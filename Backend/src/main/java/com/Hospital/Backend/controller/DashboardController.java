package com.Hospital.Backend.controller;

import com.Hospital.Backend.model.*;
import com.Hospital.Backend.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/patients")
    public List<PatientInfo> getPatients(){
        return dashboardService.getAllPatients();
    }

    @GetMapping("/doctors")
    public List<DoctorInfo> getDoctor(){
        return dashboardService.getAllDoctors();
    }

    @GetMapping("/doctors/images")
    public List<byte[]> getDoctorImages(){
        return dashboardService.getAllDoctorsImage();
    }

    @GetMapping("/dischargepatients")
    public List<OldPatient> getOldPatients(){
        return dashboardService.getAllOldPatients();
    }

    @GetMapping("/patient/{Id}")
    public ResponseEntity<?> getPatient(@PathVariable Long Id){
        PatientInfo patientInfo = null;
        try{
            patientInfo =  dashboardService.getPatientById(Id);
        }catch (Exception e){
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(patientInfo , HttpStatus.OK);
    }

    @GetMapping("/patientbyusername/{currentUser}")
    public ResponseEntity<?> getPatientUsingUsername(@PathVariable String currentUser){

        try{
            PatientInfo patientInfo =  dashboardService.getPatientByUserName(currentUser);
            OldPatient oldPatient =  dashboardService.getPatientByPatientCred(currentUser);
            if (patientInfo != null){
                return new ResponseEntity<>(patientInfo , HttpStatus.OK);
            }else {
                return new ResponseEntity<>(oldPatient , HttpStatus.OK);
            }
        }catch (Exception e){
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/doctor/{currentUser}")
    public ResponseEntity<?> getDoctorByUsername(@PathVariable String currentUser){
        System.out.println("Enter");
        DoctorInfo doctorInfo = null;
        try{
            doctorInfo =  dashboardService.getDoctorInfo(currentUser);
        }catch (Exception e){
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(doctorInfo , HttpStatus.OK);
    }

    @PostMapping("/patientmonitoring/{Id}")
    public ResponseEntity<?> addPatientMonitoring(@RequestBody Monitoring monitoring , @PathVariable Long Id){
        Monitoring newmonitoring = null;
        try{
            newmonitoring =  dashboardService.addMonitoring(monitoring , Id);
        }catch (Exception e){
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newmonitoring , HttpStatus.OK);
    }

    @GetMapping("/patientmonitoring/{Id}")
    public List<Monitoring> getMonitoring(@PathVariable Long Id){
        return dashboardService.getMonitoring(Id);
    }

    @GetMapping("/administration/getbillingdetails")
    public List<Billing> getBillingDetails(){
        return dashboardService.findAllBillings();
    }

    @GetMapping("/doctors/search")
    public List<DoctorInfo> searchDoctor(@RequestParam String name){
        return dashboardService.getDoctorByName(name);
    }

    @GetMapping("/patients/search")
    public List<PatientInfo> searchPatient(@RequestParam String name){
        return dashboardService.getPatientByName(name);
    }

    @GetMapping("/oldpatients/search")
    public List<OldPatient> searchOldPatient(@RequestParam String name){
        return dashboardService.getOldPatientByName(name);
    }
}