package com.internship.project.Insurance.Automation.Application.dtos;

import com.internship.project.Insurance.Automation.Application.entities.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private long id;
    private Set<Role> roles;
    private String name;
    private String email;
    private String password;
}
