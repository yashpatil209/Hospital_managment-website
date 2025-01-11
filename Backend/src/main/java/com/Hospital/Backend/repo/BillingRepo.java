package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.Billing;
import com.Hospital.Backend.model.PatientCred;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillingRepo extends JpaRepository<Billing , Long> {
    Billing findByPatientCred(PatientCred patientCred);

    @Query(value = "SELECT * FROM Billing WHERE total <> 0", nativeQuery = true)
    List<Billing> findAllWithNonZeroTotal();
}