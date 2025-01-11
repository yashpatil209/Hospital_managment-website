package com.Hospital.Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
@Data
public class DoctorInfo {

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private Long regno; // Medical registration number, assumed unique

    private String fname;
    private String lname;
    private Date dob;
    private String sex;
    private Long adharno;
    private String qualification;
    private String specialization;
    private Number experience;
    private String area;
    private String city;
    private String state;
    private Long postCode;

    @Lob
    private byte[] adharImage;

    @Lob
    private byte[] photo;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private DoctorCred doctorCred;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Long getRegno() {
        return regno;
    }

    public void setRegno(Long regno) {
        this.regno = regno;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Long getAdharno() {
        return adharno;
    }

    public void setAdharno(Long adharno) {
        this.adharno = adharno;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public Number getExperience() {
        return experience;
    }

    public void setExperience(Number experience) {
        this.experience = experience;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Long getPostCode() {
        return postCode;
    }

    public void setPostCode(Long postCode) {
        this.postCode = postCode;
    }

    public byte[] getAdharImage() {
        return adharImage;
    }

    public void setAdharImage(byte[] adharImage) {
        this.adharImage = adharImage;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public DoctorCred getDoctorCred() {
        return doctorCred;
    }

    public void setDoctorCred(DoctorCred doctorCred) {
        this.doctorCred = doctorCred;
    }
}