package com.insurai.insurai.Controller;

import com.insurai.dto.AdminStatsDTO;
import com.insurai.insurai.repository.UserRepository;
import com.insurai.insurai.repository.PlanRepository;
import com.insurai.insurai.repository.AppointmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminStatsController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PlanRepository planRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @GetMapping("/stats")
    public AdminStatsDTO getAdminStats() {
        long totalUsers = userRepository.count();
        long totalPlans = planRepository.count();
        long totalAppointments = appointmentRepository.count();

        return new AdminStatsDTO(totalUsers, totalPlans, totalAppointments);
    }
}
