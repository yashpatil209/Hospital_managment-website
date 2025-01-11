package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.PatientCred;
import com.Hospital.Backend.model.PatientInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PatientInfoRepo extends JpaRepository<PatientInfo , Long> {
    PatientInfo findByPatientCred(PatientCred patientInfo);

    List<PatientInfo> findByFnameContainingIgnoreCase(String name);
}
