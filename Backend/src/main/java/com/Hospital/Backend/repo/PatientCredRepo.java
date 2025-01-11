package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.PatientCred;
import com.Hospital.Backend.model.PatientInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientCredRepo extends JpaRepository<PatientCred , Long> {
    PatientCred findByUsername(String username);

}
