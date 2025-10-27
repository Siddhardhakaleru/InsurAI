package com.internship.project.Insurance.Automation.Application.security;


import com.internship.project.Insurance.Automation.Application.dtos.LoginRequestDto;
import com.internship.project.Insurance.Automation.Application.dtos.LoginResponseDto;
import com.internship.project.Insurance.Automation.Application.dtos.SignUpRequestDto;
import com.internship.project.Insurance.Automation.Application.dtos.SignUpResponseDto;
import com.internship.project.Insurance.Automation.Application.services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping("/signup")
    public ResponseEntity<SignUpResponseDto> signup(@RequestBody SignUpRequestDto signUpRequestDto) throws Exception{
        return new ResponseEntity<>(userService.signUp(signUpRequestDto), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto loginRequestDto, HttpServletRequest request, HttpServletResponse response) throws Exception{
        LoginResponseDto loginResponseDto = userService.login(loginRequestDto);
        String refreshToken = jwtService.generateRefreshToken(loginResponseDto.getId());
        Cookie cookie = new Cookie("refresh_token", refreshToken);
        cookie.setHttpOnly(true);
        //make it secure if in production environment
        response.addCookie(cookie);
        return new ResponseEntity<>(loginResponseDto, HttpStatus.FOUND);
    }
}
