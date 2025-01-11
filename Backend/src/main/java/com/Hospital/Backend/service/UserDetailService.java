package com.Hospital.Backend.service;

import com.Hospital.Backend.model.DoctorCred;
import com.Hospital.Backend.model.HospitalAdministration;
import com.Hospital.Backend.model.PatientCred;
import com.Hospital.Backend.repo.DoctorCredRepo;
import com.Hospital.Backend.repo.HospitalAdministrationRepo;
import com.Hospital.Backend.repo.PatientCredRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    private PatientCredRepo patientCredRepo;

    @Autowired
    private DoctorCredRepo doctorCredRepo;

    @Autowired
    private HospitalAdministrationRepo hospitalAdministrationRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        PatientCred patientCred = patientCredRepo.findByUsername(username);
        if (patientCred != null) {
            return User.withUsername(patientCred.getUsername())
                    .password(patientCred.getPassword())
                    .roles("Patient")
                    .build();
        }

        DoctorCred doctorCred = doctorCredRepo.findByUsername(username);
        if (doctorCred != null) {
            return User.withUsername(doctorCred.getUsername())
                    .password(doctorCred.getPassword())
                    .roles("Doctor")
                    .build();
        }

        HospitalAdministration hospitalAdministration = hospitalAdministrationRepo.findByUsername(username);
        if (hospitalAdministration != null) {
            return User.withUsername(hospitalAdministration.getUsername())
                    .password(hospitalAdministration.getPassword())
                    .roles("HospitalAdministration")
                    .build();
        }

        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}