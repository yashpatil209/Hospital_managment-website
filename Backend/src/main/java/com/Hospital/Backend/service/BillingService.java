package com.Hospital.Backend.service;

import com.Hospital.Backend.model.*;
import com.Hospital.Backend.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Service
public class BillingService {
    @Autowired
    private BillingRepo billingRepo;

    @Autowired
    private PatientCredRepo patientCredRepo;

    @Autowired
    private PatientInfoRepo patientInfoRepo;

    @Autowired
    private OldPatientRepo oldPatientRepo;

    @Autowired
    private RoomRentRepo roomRentRepo;

    public Billing addBilling(Billing billing , Long Id) {
        PatientCred patientCred = patientCredRepo.findById(Id).orElse(null);
        Billing newBilling = billingRepo.findByPatientCred(patientCred);

        if(newBilling != null){

            newBilling.setMedicalService(newBilling.getMedicalService() + billing.getMedicalService());
            newBilling.setMedication(newBilling.getMedication() + billing.getMedication());
            newBilling.setLabTest(newBilling.getLabTest() + billing.getLabTest());
            newBilling.setSurgicalService(newBilling.getSurgicalService() + billing.getSurgicalService());
            newBilling.setFoodDiet(newBilling.getFoodDiet() + billing.getFoodDiet());

            return billingRepo.save(newBilling);
        }else {
            billing.setPatientCred(patientCred);
            return billingRepo.save(billing);
        }
    }

    public void addRoomRent(Long Id , String room , PatientCred patientCred){
        Billing newBilling = billingRepo.findByPatientCred(patientCred);
        RoomRent roomRent = roomRentRepo.findByType(room);
        String admissionDate = patientCred.getCreatedAt().toString().split(" ")[0];
        LocalDate date1 = LocalDate.parse(admissionDate);
        LocalDate date2 = LocalDate.now();
        int days = (int) (ChronoUnit.DAYS.between(date1, date2) + 1);
        System.out.println(newBilling.getRoomRent());
        int RoomRent = roomRent.getOneDayCharges() * days;
        newBilling.setRoomRent(RoomRent);
        System.out.println(newBilling.getRoomRent() + newBilling.getFoodDiet()+newBilling.getSurgicalService()+newBilling.getMedicalService()+newBilling.getMedication()+newBilling.getLabTest());
        newBilling.setTotal(newBilling.getRoomRent() + newBilling.getFoodDiet()+newBilling.getSurgicalService()+newBilling.getMedicalService()+newBilling.getMedication()+newBilling.getLabTest());
        billingRepo.save(newBilling);
    }

    public OldPatient preservePatient(PatientInfo patientInfo , PatientCred patientCred){
        OldPatient oldPatient = new OldPatient();
        oldPatient.setFname(patientInfo.getFname());
        oldPatient.setLname(patientInfo.getLname());
        oldPatient.setDob(patientInfo.getDob());
        oldPatient.setArea(patientInfo.getArea());
        oldPatient.setPhone(patientInfo.getPhone());
        oldPatient.setEmail(patientInfo.getEmail());
        oldPatient.setAdharImage(patientInfo.getAdharImage());
        oldPatient.setPatientCred(patientCred);
        oldPatient.setCity(patientInfo.getCity());
        oldPatient.setGname(patientInfo.getGname());
        oldPatient.setSex(patientInfo.getSex());
        oldPatient.setPostCode(patientInfo.getPostCode());
        oldPatient.setState(patientInfo.getState());
        oldPatient.setMedHistory(patientInfo.getMedHistory());
        oldPatient.setAdmissionDate(patientInfo.getCreatedAt());

        return  oldPatientRepo.save(oldPatient);
    }

    public PatientInfo dischargePatient(Long id) {
        PatientInfo patientInfo = patientInfoRepo.findById(id).orElse(null);
        PatientCred patientCred = patientCredRepo.findById(patientInfo.getPatientCred().getPatientId()).orElse(null);
        if(patientInfo != null){
            preservePatient(patientInfo , patientCred);
            addRoomRent(id , patientInfo.getRoomType() , patientCred);
            patientInfoRepo.delete(patientInfo);
        }
        return patientInfo;
    }

    public Billing getBilling(Long Id) {
        PatientCred patientCred = patientCredRepo.findById(Id).orElse(null);
        return billingRepo.findByPatientCred(patientCred);
    }
}