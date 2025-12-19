package com.internship.project.Insurance.Automation.Application.entities;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "insurances")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Insurance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "insurance_id")
    private Long insuranceId;

    @ManyToOne
    @JoinColumn(name = "insurance_plan_id", nullable = false)
    private InsurancePlan insurancePlan;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "policy_number", nullable = false, unique = true, length = 50)
    private String policyNumber;

    @Column(name = "insurance_master", length = 200)
    private String insuranceMaster; // Policy document reference

    @Column(name = "insurance_type", length = 50)
    private String insuranceType;

    @Column(name = "insurance_premium", precision = 10, scale = 2, nullable = false)
    private BigDecimal insurancePremium;

    @Column(name = "insurance_amount", precision = 15, scale = 2, nullable = false)
    private BigDecimal insuranceAmount; // Coverage amount

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private InsuranceStatus status;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "insurance", cascade = CascadeType.ALL)
    private Set<Payment> payments = new HashSet<>();


    @OneToMany(mappedBy = "insurance", cascade = CascadeType.ALL)
    private Set<Document> documents = new HashSet<>();

    public enum InsuranceStatus {
        ACTIVE, EXPIRED, CANCELLED, PENDING, SUSPENDED
    }
}
