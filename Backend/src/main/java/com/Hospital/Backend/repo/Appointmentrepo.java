package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.Appointment;
import com.Hospital.Backend.model.DoctorCred;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface Appointmentrepo extends JpaRepository<Appointment , Long> {
    List<Appointment> findByDoctorCred(DoctorCred doctorCred);;

    List<Appointment> findAllByDoctorCredAndDate(DoctorCred doctorCred , LocalDate date);

}