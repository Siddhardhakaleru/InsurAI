package com.insurai.insurai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.insurai.insurai.model.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    
    Optional<User> findByEmail(String email);
}
