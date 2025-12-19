package com.insurai.insurai.Controller;

import com.insurai.insurai.model.Plan;
import com.insurai.insurai.config.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.insurai.insurai.repository.PlanRepository;

import java.util.List;

@RestController
@RequestMapping("/api/admin/plans")
@CrossOrigin("*")
public class PlanAdminController {

    @Autowired
    private PlanService planService;

    @Autowired
    private PlanRepository planRepository;  // <-- FIXED

    @PostMapping
    public Plan createPlan(@RequestBody Plan plan) {
        return planService.createPlan(plan);
    }

    @GetMapping
    public List<Plan> getAllPlans() {
        return planService.getAllPlans();
    }

    @GetMapping("/{id}")
    public Plan getPlanById(@PathVariable Long id) {
        return planService.getPlanById(id);
    }

    @PutMapping("/{id}")
    public Plan updatePlan(@PathVariable Long id, @RequestBody Plan plan) {
        return planService.updatePlan(id, plan);
    }

    @DeleteMapping("/{id}")
    public String deletePlan(@PathVariable Long id) {
        planService.deletePlan(id);
        return "Plan deleted successfully";
    }

    // ⭐ PLAN COUNT API FOR ADMIN DASHBOARD
    @GetMapping("/count")
    public long getPlanCount() {
        return planRepository.count();
    }
}
