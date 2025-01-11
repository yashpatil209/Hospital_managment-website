package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.HospitalAdministration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalAdministrationRepo extends JpaRepository<HospitalAdministration, Long> {
    HospitalAdministration findByUsername(String username);
}
