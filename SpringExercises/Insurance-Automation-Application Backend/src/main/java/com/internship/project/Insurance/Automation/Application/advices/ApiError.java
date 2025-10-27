package com.internship.project.Insurance.Automation.Application.advices;

import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
public class ApiError {
    private LocalDateTime time;
    private HttpStatus status;
    private String error;

    public ApiError() {
        this.time = LocalDateTime.now();
    }

    public ApiError(String error, HttpStatus status) {
        this();
        this.error = error;
        this.status = status;
    }
}
