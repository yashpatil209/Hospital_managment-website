package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.Monitoring;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface MonitoringRepo extends JpaRepository<Monitoring , Long> {
    List<Monitoring> findAllByPatientId(Long patientId);
}
