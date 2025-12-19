package com.insurai.insurai.Controller;
import com.insurai.insurai.model.User;
import com.insurai.insurai.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Objects;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") 
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Signup API
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already registered!");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    //  Login API (returns full user object)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            // ✅ Return the user object itself instead of just a message
            return ResponseEntity.ok(existingUser.get());
        } else {
            return ResponseEntity.status(401).body("Invalid credentials!");
        }
    }

    //  Update User API
    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User updatedUser) {
        Optional<User> optionalUser = userRepository.findByEmail(updatedUser.getEmail());

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();

            // Update allowed fields
            if (updatedUser.getName() != null) existingUser.setName(updatedUser.getName());
            if (updatedUser.getPassword() != null) existingUser.setPassword(updatedUser.getPassword());

            userRepository.save(Objects.requireNonNull(existingUser));
            return ResponseEntity.ok(existingUser); //  Return updated user details
             //  Return updated user details
        } else {
            return ResponseEntity.status(404).body("User not found!");
        }
    }

}
