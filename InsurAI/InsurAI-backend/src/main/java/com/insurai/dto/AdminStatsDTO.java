package com.insurai.dto;

public class AdminStatsDTO {

    private long totalUsers;
    private long totalPlans;
    private long totalAppointments;

    public AdminStatsDTO(long totalUsers, long totalPlans, long totalAppointments) {
        this.totalUsers = totalUsers;
        this.totalPlans = totalPlans;
        this.totalAppointments = totalAppointments;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public long getTotalPlans() {
        return totalPlans;
    }

    public long getTotalAppointments() {
        return totalAppointments;
    }
}
