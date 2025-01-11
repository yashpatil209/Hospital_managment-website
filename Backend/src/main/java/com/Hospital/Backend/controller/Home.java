package com.Hospital.Backend.controller;

import com.Hospital.Backend.model.HospitalAdministration;
import com.Hospital.Backend.model.RoomRent;
import com.Hospital.Backend.repo.HospitalAdministrationRepo;
import com.Hospital.Backend.repo.RoomRentRepo;
import com.Hospital.Backend.service.EmailService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Home {

    @Autowired
    private HospitalAdministrationRepo hospitalAdministrationRepo;

    @Autowired
    private EmailService emailService;

    @Autowired
    private RoomRentRepo roomRentRepo;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);


    @Secured("ROLE_Doctor")
    @GetMapping("/")
    public String hello(){
        return "Hello Yash";
    }

    @PostMapping("/roomrent")
    public List<RoomRent> hallo(@RequestBody List<RoomRent> roomRent) {
         return roomRentRepo.saveAll(roomRent);
    }

    @GetMapping("/secure")
    public String secure(){
        return "secure route";
    }

    @PostMapping("/")
    public String admin(@RequestBody HospitalAdministration hospitalAdministration){
        hospitalAdministration.setPassword(passwordEncoder.encode(hospitalAdministration.getPassword()));
        hospitalAdministrationRepo.save(hospitalAdministration);
        return "register";
    }
}