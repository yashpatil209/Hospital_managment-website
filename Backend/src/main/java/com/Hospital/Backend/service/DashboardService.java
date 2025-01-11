package com.Hospital.Backend.service;

import com.Hospital.Backend.model.*;
import com.Hospital.Backend.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class DashboardService {

    @Autowired
    private PatientInfoRepo patientInfoRepo;

    @Autowired
    private  PatientCredRepo patientCredRepo;

    @Autowired
    private DoctorCredRepo doctorCredRepo;

    @Autowired
    private OldPatientRepo oldPatientRepo;

    @Autowired
    private DoctorInfoRepo doctorInfoRepo;

    @Autowired
    private MonitoringRepo monitoringRepo;

    @Autowired
    private BillingRepo billingRepo;

    public List<PatientInfo> getAllPatients() {
        return patientInfoRepo.findAll();
    }

    public List<DoctorInfo> getAllDoctors() {
        return doctorInfoRepo.findAll();
    }

    public List<DoctorInfo> getDoctorByName(String name){
        return doctorInfoRepo.findByFnameContainingIgnoreCase(name);
    }

    public List<PatientInfo> getPatientByName(String name) {
        return patientInfoRepo.findByFnameContainingIgnoreCase(name);
    }

    public PatientInfo getPatientById(Long id) {
        return patientInfoRepo.findById(id).orElseThrow();
    }

    public List<OldPatient> getAllOldPatients() {
        return oldPatientRepo.findAll();
    }

    public Monitoring addMonitoring(Monitoring monitoring, Long id) {
        monitoring.setPatientId(id);
        return monitoringRepo.save(monitoring);
    }

    public DoctorInfo getDoctorInfo(String username){
         DoctorCred doctorCred = doctorCredRepo.findByUsername(username);

         return doctorInfoRepo.findById(doctorCred.getInfo()).orElse(null);
    }

    public List<Monitoring> getMonitoring(Long id) {
        return monitoringRepo.findAllByPatientId(id);
    }

    public PatientInfo getPatientByUserName(String username) {
        PatientCred patientCred = patientCredRepo.findByUsername(username);
        return patientInfoRepo.findByPatientCred(patientCred);
    }
    public OldPatient getPatientByPatientCred(String username){
        PatientCred patientCred = patientCredRepo.findByUsername(username);
        return oldPatientRepo.findByPatientCred(patientCred);
    }

    public List<Billing> findAllBillings() {
        return billingRepo.findAllWithNonZeroTotal();
    }

    public List<OldPatient> getOldPatientByName(String name) {
        return oldPatientRepo.findByFnameContainingIgnoreCase(name);
    }

    public List<byte[]> getAllDoctorsImage() {
        return doctorInfoRepo.findAllPhotos();
    }
}