package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.DoctorCred;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorCredRepo extends JpaRepository<DoctorCred , Long> {
    DoctorCred findByUsername(String username);
}
