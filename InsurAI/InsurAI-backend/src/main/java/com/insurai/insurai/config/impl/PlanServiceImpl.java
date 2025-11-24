package com.insurai.insurai.config.impl;

import com.insurai.insurai.model.Plan;
import com.insurai.insurai.repository.PlanRepository;
import com.insurai.insurai.config.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanRepository planRepository;

    @Override
    public Plan createPlan(Plan plan) {
        Objects.requireNonNull(plan, "plan must not be null");
        Plan saved = planRepository.save(plan);
        return Objects.requireNonNull(saved, "saved plan is null");
    }

    @Override
    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    @Override
    public Plan getPlanById(Long id) {
        Objects.requireNonNull(id, "id must not be null");
        Plan plan = planRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plan not found"));
        return Objects.requireNonNull(plan, "retrieved plan is null");
    }

    @Override
    public Plan updatePlan(Long id, Plan updatedPlan) {
        Objects.requireNonNull(id, "id must not be null");
        Objects.requireNonNull(updatedPlan, "updatedPlan must not be null");
        Plan plan = getPlanById(id);

        plan.setPlanName(updatedPlan.getPlanName());
        plan.setDescription(updatedPlan.getDescription());
        plan.setPremium(updatedPlan.getPremium());
        plan.setCoverageAmount(updatedPlan.getCoverageAmount());
        plan.setType(updatedPlan.getType());

        Plan saved = planRepository.save(plan);
        return Objects.requireNonNull(saved, "updated plan is null");
    }

    @Override
    public void deletePlan(Long id) {
        Objects.requireNonNull(id, "id must not be null");
        planRepository.deleteById(id);
    }
}
