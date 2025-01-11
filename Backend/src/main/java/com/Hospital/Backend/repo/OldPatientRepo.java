package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.OldPatient;
import com.Hospital.Backend.model.PatientCred;
import com.Hospital.Backend.model.PatientInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OldPatientRepo extends JpaRepository<OldPatient, Long> {
    OldPatient findByPatientCred(PatientCred patientInfo);

    List<OldPatient> findByFnameContainingIgnoreCase(String name);
}
