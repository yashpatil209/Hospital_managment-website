package com.Hospital.Backend.service;

import com.Hospital.Backend.model.DoctorCred;
import com.Hospital.Backend.model.DoctorInfo;
import com.Hospital.Backend.model.PatientCred;
import com.Hospital.Backend.model.PatientInfo;
import com.Hospital.Backend.repo.DoctorCredRepo;
import com.Hospital.Backend.repo.DoctorInfoRepo;
import com.Hospital.Backend.repo.PatientCredRepo;
import com.Hospital.Backend.repo.PatientInfoRepo;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import java.io.IOException;
import java.util.Random;

@Service
public class AccountService {

    @Autowired
    private PatientInfoRepo patientInfoRepo;

    @Autowired
    private DoctorCredRepo doctorCredRepo;

    @Autowired
    private DoctorInfoRepo doctorInfoRepo;

    @Autowired
    public EmailService emailService;

    @Autowired
    private PatientCredRepo patientCredRepo;
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);

    public String generateUniqueNumber() {
        Random random = new Random();
        StringBuilder uniqueNumber = new StringBuilder();

        for (int i = 0; i < 4; i++) {
            uniqueNumber.append(random.nextInt(10));
        }
        return uniqueNumber.toString();
    }

    public PatientCred addUsernamePassword(PatientInfo patientInfo) throws MessagingException {

        PatientCred newPatientCred = new PatientCred();

        String number = generateUniqueNumber();
        String username = patientInfo.getFname() + number;
        number = generateUniqueNumber();
        String password = patientInfo.getLname() + "@" + number;
        newPatientCred.setUsername(username);
        newPatientCred.setPassword(passwordEncoder.encode(password));

        emailService.sendWelcomeEmail(patientInfo.getEmail() , patientInfo.getFname(), newPatientCred.getUsername(), password);
        return patientCredRepo.save(newPatientCred);
    }

    public PatientInfo addPatientInfo(PatientInfo patientInfo , MultipartFile adharImage) throws IOException, MessagingException {
        PatientInfo newPatientInfo = null;
        PatientCred newPatientCred = addUsernamePassword(patientInfo);
        patientInfo.setAdharImage(adharImage.getBytes());
        patientInfo.setPatientCred(newPatientCred);

        newPatientInfo =  patientInfoRepo.save(patientInfo);

        return newPatientInfo;
    }

    public DoctorCred addDoctorCred(DoctorCred doctorCred) throws MessagingException {
        DoctorCred newDoctorCred = null;
        String number = generateUniqueNumber();
        String username = doctorCred.getFname() + number;
        number = generateUniqueNumber();
        String password = doctorCred.getLname() + "@" + number;
        doctorCred.setUsername(username);
        doctorCred.setPassword(passwordEncoder.encode(password));

        newDoctorCred = doctorCredRepo.save(doctorCred);

        emailService.sendWelcomeEmail(newDoctorCred.getEmail() ,newDoctorCred.getFname() , newDoctorCred.getUsername(), password);
        return doctorCredRepo.save(doctorCred);
    }

    public DoctorInfo addDoctorInfo(DoctorInfo doctorInfo, MultipartFile adharImage, MultipartFile image, String username) throws IOException {

        DoctorCred doctorCred = doctorCredRepo.findByUsername(username);
        DoctorInfo newDoctorInfo = null;

        doctorInfo.setAdharImage(adharImage.getBytes());
        doctorInfo.setPhoto(image.getBytes());
        doctorInfo.setDoctorCred(doctorCred);
        newDoctorInfo = doctorInfoRepo.save(doctorInfo);

        doctorCred.setInfo(newDoctorInfo.getId());
        doctorCredRepo.save(doctorCred);
        return  doctorInfoRepo.save(doctorInfo);
    }
}