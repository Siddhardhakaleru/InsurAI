package com.insurai.insurai.Controller;

import com.insurai.insurai.model.Appointment;
import com.insurai.insurai.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.lang.NonNull;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;
    // Create appointment
    @PostMapping("/book")
    public ResponseEntity<?> bookAppointment(@RequestBody @NonNull Appointment appt) {
        appointmentRepository.save(appt);
        return ResponseEntity.ok("Appointment booked!");
    }

    // Get user appointments
    @GetMapping("/user/{email}")
    public List<Appointment> getUserAppointments(@PathVariable String email) {
        return appointmentRepository.findByUserEmail(email);
    }

    // Admin — view all appointments
    @GetMapping("/all")
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    // Admin — update status
    @PutMapping("/status/{id}")
    public ResponseEntity<?> updateStatus(@PathVariable @NonNull Long id, @RequestParam String status) {
        Appointment a = appointmentRepository.findById(id).orElse(null);
        if (a == null) return ResponseEntity.badRequest().body("Not found");

        a.setStatus(status);
        appointmentRepository.save(a);
        return ResponseEntity.ok("Status updated");
    }

    // ⭐ Admin — delete appointment
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable @NonNull Long id) {
        if (!appointmentRepository.existsById(id)) {
            return ResponseEntity.status(404).body("Appointment not found");
        }
        appointmentRepository.deleteById(id);
        return ResponseEntity.ok("Appointment deleted");
    }
    // ⭐ User — cancel appointment
@PutMapping("/cancel/{id}")
public ResponseEntity<?> cancelAppointment(@PathVariable @NonNull Long id) {
    Appointment appt = appointmentRepository.findById(id).orElse(null);

    if (appt == null) {
        return ResponseEntity.status(404).body("Appointment not found");
    }

    appt.setStatus("CANCELLED");
    appointmentRepository.save(appt);

    return ResponseEntity.ok("Appointment cancelled");
}

}
