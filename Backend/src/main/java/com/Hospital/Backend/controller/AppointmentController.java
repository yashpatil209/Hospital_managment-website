package com.Hospital.Backend.controller;

import com.Hospital.Backend.model.Appointment;
import com.Hospital.Backend.model.DoctorCred;
import com.Hospital.Backend.model.DoctorInfo;
import com.Hospital.Backend.repo.Appointmentrepo;
import com.Hospital.Backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private Appointmentrepo appointmentrepo;

    @PostMapping("/bookappointment/{Id}")
    public ResponseEntity<?> bookApointment(@RequestBody Appointment appointment , @PathVariable Long Id){
        Appointment newAppointment = null;

        try {
            newAppointment = appointmentService.addAppointment(appointment , Id);
            if(newAppointment == null){
                return new ResponseEntity<>("Not Available" , HttpStatus.CONFLICT);
            }
        }catch (Exception e){
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newAppointment , HttpStatus.CREATED);
    }

    @GetMapping("/appointments/{username}")
    public List<Appointment> getAppointments(@PathVariable String username){
        return appointmentService.findAppointments(username);
    }

    @DeleteMapping("/appointment/{Id}")
    public ResponseEntity<?> RemoveAppointment(@PathVariable Long Id){
        String res = "";
        try {
            res = appointmentService.deleteAppointment(Id);
        } catch (Exception e) {
            return new ResponseEntity<>(e , HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(res , HttpStatus.OK);
    }
}
