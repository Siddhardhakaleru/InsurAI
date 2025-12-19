package com.insurai.insurai.config;

import com.insurai.insurai.model.Admin;

public interface AdminService {
    Admin register(Admin admin);
    Admin login(String email, String password);
}
