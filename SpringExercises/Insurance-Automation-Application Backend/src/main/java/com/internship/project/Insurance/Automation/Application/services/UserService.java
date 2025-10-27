package com.internship.project.Insurance.Automation.Application.services;


import com.internship.project.Insurance.Automation.Application.dtos.LoginRequestDto;
import com.internship.project.Insurance.Automation.Application.dtos.LoginResponseDto;
import com.internship.project.Insurance.Automation.Application.dtos.SignUpRequestDto;
import com.internship.project.Insurance.Automation.Application.dtos.SignUpResponseDto;
import com.internship.project.Insurance.Automation.Application.entities.User;
import com.internship.project.Insurance.Automation.Application.entities.enums.Role;
import com.internship.project.Insurance.Automation.Application.repositories.UserRepository;
import com.internship.project.Insurance.Automation.Application.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationNotSupportedException;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .orElseThrow(
                        () -> new UsernameNotFoundException("User not found with email : " + username));
    }

    public SignUpResponseDto signUp(SignUpRequestDto signUpRequestDto) throws Exception{
        User user = userRepository.findByEmail(signUpRequestDto.getEmail()).orElse(null);
        if(user !=null){
            throw new AuthenticationNotSupportedException("User already exists with email: " + signUpRequestDto.getEmail());
        }
        user = User.builder()
                .name(signUpRequestDto.getName())
                .roles(Set.of(Role.CUSTOMER))
                .email(signUpRequestDto.getEmail())
                .password(passwordEncoder.encode(signUpRequestDto.getPassword()))
                .build();
        User newuser = userRepository.save(user);
        return new SignUpResponseDto(newuser.getId(), newuser.getEmail());
    }

    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        User user = userRepository.findByEmail(loginRequestDto.getEmail()).orElseThrow(
                () -> new AuthenticationCredentialsNotFoundException("User not found with email: " + loginRequestDto.getEmail())
        );

        String accessToken = jwtService.generateAccessToken(user);
        return new LoginResponseDto(user.getId(),accessToken);
    }
}
