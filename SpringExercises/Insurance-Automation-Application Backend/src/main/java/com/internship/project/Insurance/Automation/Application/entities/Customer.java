package com.internship.project.Insurance.Automation.Application.entities;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "customers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "buyer_id")
    private Long buyerId;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(name = "buyer_name", nullable = false, length = 100)
    private String buyerName;

    @Column(name = "buyer_phone", length = 20)
    private String buyerPhone;

    @Column(name = "buyer_email", nullable = false, unique = true, length = 100)
    private String buyerEmail;

    @Column(name = "buyer_address", length = 500)
    private String buyerAddress;

    @Column(name = "buyer_username", length = 50)
    private String buyerUsername;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<Appointment> appointments = new HashSet<>();

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<Insurance> insurances = new HashSet<>();


    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<Document> documents = new HashSet<>();
}
