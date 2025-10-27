package com.internship.project.Insurance.Automation.Application.entities;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "agents")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "agent_id")
    private Long agentId;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(name = "agent_name", nullable = false, length = 100)
    private String agentName;

    @Column(name = "agent_specialization", length = 200)
    private String agentSpecialization;

    @Column(name = "agent_email", nullable = false, unique = true, length = 100)
    private String agentEmail;

    @Column(name = "agent_phone", length = 20)
    private String agentPhone;

    @Column(name = "agent_address", length = 500)
    private String agentAddress;

    @Column(name = "years_of_experience")
    private Integer yearsOfExperience;

    @Column(name = "rating", precision = 3, scale = 2)
    private BigDecimal rating;

    @Column(name = "is_available")
    private Boolean isAvailable = true;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "agent", cascade = CascadeType.ALL)
    private Set<Appointment> appointments = new HashSet<>();

    @OneToMany(mappedBy = "agent", cascade = CascadeType.ALL)
    private Set<AgentAvailability> availabilities = new HashSet<>();


}