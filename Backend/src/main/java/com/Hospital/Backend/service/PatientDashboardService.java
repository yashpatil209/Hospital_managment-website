package com.Hospital.Backend.service;

import com.Hospital.Backend.model.Billing;
import com.Hospital.Backend.model.Monitoring;
import com.Hospital.Backend.model.PatientCred;
import com.Hospital.Backend.repo.BillingRepo;
import com.Hospital.Backend.repo.MonitoringRepo;
import com.Hospital.Backend.repo.PatientCredRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientDashboardService {

    @Autowired
    private PatientCredRepo patientCredRepo;

    @Autowired
    private MonitoringRepo monitoringRepo;

    @Autowired
    private BillingRepo billingRepo;

    public List<Monitoring> getMonitorings(String username) {
        PatientCred patientCred = patientCredRepo.findByUsername(username);
        return monitoringRepo.findAllByPatientId(patientCred.getPatientId());
    }

    public Billing getBill(String username) {
        PatientCred patientCred = patientCredRepo.findByUsername(username);
        return billingRepo.findByPatientCred(patientCred);
    }
}
