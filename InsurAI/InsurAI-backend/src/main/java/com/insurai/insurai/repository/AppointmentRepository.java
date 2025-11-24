package com.insurai.insurai.repository;

import com.insurai.insurai.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByUserEmail(String email);
}
