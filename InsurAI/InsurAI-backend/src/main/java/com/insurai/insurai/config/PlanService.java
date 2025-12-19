package com.insurai.insurai.config;

import com.insurai.insurai.model.Plan;

import java.util.List;

public interface PlanService {
    Plan createPlan(Plan plan);
    List<Plan> getAllPlans();
    Plan getPlanById(Long id);
    Plan updatePlan(Long id, Plan plan);
    void deletePlan(Long id);
}
