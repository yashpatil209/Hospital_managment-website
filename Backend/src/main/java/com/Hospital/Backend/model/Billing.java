package com.Hospital.Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.stereotype.Component;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
@Data
public class Billing {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ColumnDefault("0")
    private int roomRent;
    @ColumnDefault("0")
    private int medicalService;
    @ColumnDefault("0")
    private int medication;
    @ColumnDefault("0")
    private int labTest;
    @ColumnDefault("0")
    private int surgicalService;
    @ColumnDefault("0")
    private int foodDiet;
    @ColumnDefault("0")
    private int total;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private PatientCred patientCred;

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;


    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public int getRoomRent() {
        return roomRent;
    }

    public void setRoomRent(int roomRent) {
        this.roomRent = roomRent;
    }

    public int getMedicalService() {
        return medicalService;
    }

    public void setMedicalService(int medicalService) {
        this.medicalService = medicalService;
    }

    public int getMedication() {
        return medication;
    }

    public void setMedication(int medication) {
        this.medication = medication;
    }

    public int getLabTest() {
        return labTest;
    }

    public void setLabTest(int labTest) {
        this.labTest = labTest;
    }

    public int getSurgicalService() {
        return surgicalService;
    }

    public void setSurgicalService(int surgicalService) {
        this.surgicalService = surgicalService;
    }

    public int getFoodDiet() {
        return foodDiet;
    }

    public void setFoodDiet(int foodDiet) {
        this.foodDiet = foodDiet;
    }

    public PatientCred getPatientCred() {
        return patientCred;
    }

    public void setPatientCred(PatientCred patientCred) {
        this.patientCred = patientCred;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}