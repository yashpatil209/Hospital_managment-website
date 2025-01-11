package com.Hospital.Backend.service;

import com.Hospital.Backend.model.Appointment;
import com.Hospital.Backend.model.DoctorCred;
import com.Hospital.Backend.model.DoctorInfo;
import com.Hospital.Backend.model.PatientInfo;
import com.Hospital.Backend.repo.Appointmentrepo;
import com.Hospital.Backend.repo.DoctorCredRepo;
import jakarta.mail.MessagingException;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private DoctorCredRepo doctorCredRepo;

    @Autowired
    private Appointmentrepo appointmentrepo;

    @Autowired
    private EmailService emailService;


    public DoctorCred getDoctorById(Long Id){
        return doctorCredRepo.findById(Id).orElse(null);
    }

    public String CalculateTime(int n){

        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR_OF_DAY, 1);
        calendar.set(Calendar.MINUTE, 0);
        calendar.add(Calendar.MINUTE, (n) * 15);

        return new SimpleDateFormat("hh:mm a").format(calendar.getTime());
    }

    public Appointment addAppointment(Appointment appointment, Long Id) throws MessagingException {
        DoctorCred doctorCred = getDoctorById(Id);
        int n = appointmentrepo.findAllByDoctorCredAndDate(doctorCred , appointment.getDate()).size();

        if(n < 16){
            appointment.setDoctorCred(doctorCred);
            appointment.setTime(CalculateTime(n));

            emailService.sendAppointmentEmail(appointment.getEmail() , appointment.getName() ,appointment.getDate().toString() ,appointment.getTime() , doctorCred.getFname() + " " + doctorCred.getLname());
            return appointmentrepo.save(appointment);
        }
        else {
            return null;
        }
    }

    public List<Appointment> findAppointments(String username) {
        
        DoctorCred doctorCred = doctorCredRepo.findByUsername(username);
        return appointmentrepo.findAllByDoctorCredAndDate(doctorCred , LocalDate.now());
    }

    public String deleteAppointment(Long id) {
        appointmentrepo.deleteById(id);
        return "Deleted";
    }
}