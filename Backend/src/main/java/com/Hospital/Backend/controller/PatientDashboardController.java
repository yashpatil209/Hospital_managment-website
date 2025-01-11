package com.Hospital.Backend.controller;

import com.Hospital.Backend.model.Billing;
import com.Hospital.Backend.model.Monitoring;
import com.Hospital.Backend.service.PatientDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PatientDashboardController {

    @Autowired
    private PatientDashboardService patientDashboardService;

    @GetMapping("/patient/monitoring/{username}")
    public List<Monitoring> getMonitoring(@PathVariable String username){
        return patientDashboardService.getMonitorings(username);
    }

    @GetMapping("patient/bill/{username}")
    public ResponseEntity<?> getBill(@PathVariable String username){
        Billing billing = null;
        try {
            billing = patientDashboardService.getBill(username);
            return new ResponseEntity<>(billing , HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
    }
}
