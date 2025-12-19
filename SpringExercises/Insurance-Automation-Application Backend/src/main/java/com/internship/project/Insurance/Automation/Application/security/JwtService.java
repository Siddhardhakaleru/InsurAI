package com.internship.project.Insurance.Automation.Application.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import com.internship.project.Insurance.Automation.Application.entities.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secretKey;

    // ---------- Generate ACCESS TOKEN (Valid 5 mins) ----------
    public String generateAccessToken(User user) {

        return Jwts.builder()
                .setSubject(String.valueOf(user.getId()))
                .claim("email", user.getEmail())
                .claim("roles", user.getAuthorities()) // ROLE_USER / ROLE_ADMIN
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 5)) // 5 mins
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8)))
                .compact();
    }

    // ---------- Generate REFRESH TOKEN (Valid 6 months) ----------
    public String generateRefreshToken(Long userId) {

        return Jwts.builder()
                .setSubject(String.valueOf(userId))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000L * 60 * 60 * 24 * 30 * 6))
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8)))
                .compact();
    }

    // ---------- Extract User ID ----------
    public Long getUserIdFromToken(String token) {

        return Long.parseLong(
                Jwts.parserBuilder()
                        .setSigningKey(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8)))
                        .build()
                        .parseClaimsJws(token)
                        .getBody()
                        .getSubject()
        );
    }
}
