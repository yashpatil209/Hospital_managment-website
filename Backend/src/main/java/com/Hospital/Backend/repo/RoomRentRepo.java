package com.Hospital.Backend.repo;

import com.Hospital.Backend.model.RoomRent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRentRepo extends JpaRepository<RoomRent , Long> {
    RoomRent findByType(String type);
}
