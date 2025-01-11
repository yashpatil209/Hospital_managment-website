package com.Hospital.Backend.controller;

import com.Hospital.Backend.model.*;
import com.Hospital.Backend.repo.DoctorCredRepo;
import com.Hospital.Backend.repo.HospitalAdministrationRepo;
import com.Hospital.Backend.repo.PatientCredRepo;
import com.Hospital.Backend.service.AccountService;
import com.Hospital.Backend.service.EmailService;
import com.Hospital.Backend.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("http://localhost:5173")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private PatientCredRepo patientCredRepo;

    @Autowired
    private DoctorCredRepo doctorCredRepo;

    @Autowired
    private HospitalAdministrationRepo hospitalAdministrationRepo;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register/patient")
    public ResponseEntity<?> registerPatient(@RequestPart PatientInfo patientInfo, @RequestPart MultipartFile adharImage){
        PatientInfo newPatientInfo = null;
        try {
            newPatientInfo =  accountService.addPatientInfo(patientInfo , adharImage);
        }catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newPatientInfo , HttpStatus.CREATED);
    }

    @PostMapping("/filldoctorinfo/{username}")
    public ResponseEntity<?> DoctorInfo(@RequestPart DoctorInfo doctorInfo, @RequestPart MultipartFile adharImage ,@RequestPart MultipartFile photo ,@PathVariable String username){
        DoctorInfo newDoctorInfo = null;

        try {
            newDoctorInfo =  accountService.addDoctorInfo(doctorInfo , adharImage , photo , username);
        }catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newDoctorInfo , HttpStatus.CREATED);
    }

    @PostMapping("/login/patient")
    public ResponseEntity<?> loginPatient(@RequestBody PatientCred patientCred){
        PatientCred newPatientCred = patientCredRepo.findByUsername(patientCred.getUsername());
        System.out.println(newPatientCred);

        if (newPatientCred == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(patientCred.getUsername(), patientCred.getPassword()));

        String jwtToken = "";
        if(authentication.isAuthenticated()) {
            jwtToken = jwtService.generateToken(patientCred.getUsername() , "Patient");
            return new ResponseEntity<>(jwtToken , HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/register/doctor")
    public ResponseEntity<?> registerDoctor(@RequestBody DoctorCred doctorCred){
        DoctorCred newDoctorCred = null;
        try{
            newDoctorCred = accountService.addDoctorCred(doctorCred);
        }
        catch (Exception e){
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newDoctorCred , HttpStatus.CREATED);
    }

    @PostMapping("/login/doctor")
    public ResponseEntity<?> loginDoctor(@RequestBody DoctorCred doctorCred){
        DoctorCred doctorCred1 = doctorCredRepo.findByUsername(doctorCred.getUsername());

        if(doctorCred1 == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(doctorCred.getUsername(), doctorCred.getPassword()));

        String jwtToken = "";
        if(authentication.isAuthenticated()) {
            jwtToken = jwtService.generateToken(doctorCred.getUsername() , "Doctor");
            return new ResponseEntity<>(jwtToken , HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login/hospitaladministration")
    public ResponseEntity<?> loginHospitalAdministration(@RequestBody HospitalAdministration hospitalAdministration){

        HospitalAdministration hospitalAdministration1 = hospitalAdministrationRepo.findByUsername(hospitalAdministration.getUsername());

        if(hospitalAdministration1 == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(hospitalAdministration.getUsername(), hospitalAdministration.getPassword()));

        String jwtToken = "";
        if(authentication.isAuthenticated()) {
            jwtToken = jwtService.generateToken(hospitalAdministration.getUsername() , "HospitalAdministration");
            return new ResponseEntity<>(jwtToken , HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


}