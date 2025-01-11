package com.Hospital.Backend.controller;

import com.Hospital.Backend.model.Billing;
import com.Hospital.Backend.model.PatientInfo;
import com.Hospital.Backend.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;


@RestController
public class BillingController {

    @Autowired
    private BillingService billingService;

    @PutMapping("/addbill/{Id}")
    public ResponseEntity<?> addBill(@RequestBody Billing billing , @PathVariable Long Id){

        try{
            billingService.addBilling(billing , Id);
        }catch (Exception e){
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/discharge/{Id}")
    public ResponseEntity<?> Discharge(@PathVariable Long Id){
        PatientInfo patientInfo = null;
        try {
            patientInfo = billingService.dischargePatient(Id);
        } catch (Exception e) {
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/getbill/{Id}")
    public ResponseEntity<?> getBill(@PathVariable Long Id){
        Billing billing = null;
        try {
            billing = billingService.getBilling(Id);

        } catch (Exception e) {
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(billing, HttpStatus.OK);
    }
}