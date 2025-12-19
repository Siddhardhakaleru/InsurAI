package com.insurai.insurai.config.impl;

import com.insurai.insurai.model.Admin;
import com.insurai.insurai.repository.AdminRepository;
import com.insurai.insurai.config.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Objects;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepo;
    @Override
    public Admin register(Admin admin) {
        Objects.requireNonNull(admin, "admin must not be null");
        return adminRepo.save(admin);
    }

    @Override
    public Admin login(String email, String password) {
        Admin admin = adminRepo.findByEmail(email);
        if (admin != null && admin.getPassword().equals(password)) {
            return admin;
        }
        return null;
    }
}
