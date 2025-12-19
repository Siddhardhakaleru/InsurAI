package com.internship.project.Insurance.Automation.Application.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponseDto {
    private Long id;
    private String accessToken;
}
