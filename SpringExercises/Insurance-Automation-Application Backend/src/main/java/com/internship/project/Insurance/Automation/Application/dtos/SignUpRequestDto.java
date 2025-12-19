package com.internship.project.Insurance.Automation.Application.dtos;

import lombok.Data;

@Data
public class SignUpRequestDto {
    //add authentication for not null email and password
    private String name;
    private String email;
    private String password;
}
