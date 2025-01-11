package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.DoctorCred;
import com.Hospital.Backend.model.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoctorInfoRepo extends JpaRepository<DoctorInfo , Long> {
    List<DoctorInfo> findByFnameContainingIgnoreCase(String name);

    @Query("SELECT d.photo FROM DoctorInfo d WHERE d.photo IS NOT NULL")
    List<byte[]> findAllPhotos();
}
