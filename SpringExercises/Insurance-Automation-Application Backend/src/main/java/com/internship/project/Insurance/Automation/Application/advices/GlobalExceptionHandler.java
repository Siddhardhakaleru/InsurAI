package com.internship.project.Insurance.Automation.Application.advices;

import com.internship.project.Insurance.Automation.Application.exceptions.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiError> handleResourceNotFoundException(ResourceNotFoundException exception){
        ApiError apiError = new ApiError(exception.getMessage(), HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(apiError,apiError.getStatus());
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ApiError> handleAuthenticationException(AuthenticationException exception){
        ApiError apiError = new ApiError(exception.getMessage(), HttpStatus.UNAUTHORIZED);

        return new ResponseEntity<>(apiError,apiError.getStatus());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handleAllException(Exception exception){
        ApiError apiError = new ApiError(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(apiError,apiError.getStatus());
    }
}
