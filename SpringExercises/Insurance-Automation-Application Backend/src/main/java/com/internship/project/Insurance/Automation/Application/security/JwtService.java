package com.internship.project.Insurance.Automation.Application.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import com.internship.project.Insurance.Automation.Application.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    @Autowired
    private String secretKey;

    public String generateAccessToken(User user){
        return Jwts.builder()
                .subject( Long.toString(user.getId()))
                .claim(user.getEmail(),"userEmail")
                .claim(user.getAuthorities().toString(),"roles")
                .expiration(new Date(System.currentTimeMillis() +  1000 * 60 *5))
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                .compact();

    }
    public String generateRefreshToken(Long userId){
        return Jwts.builder()
                .subject( userId .toString())
                .expiration(new Date(System.currentTimeMillis() + (1000L * 60 * 60 * 24 * 7 * 4 * 6)))
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                .compact();

    }
    public   Long getUserIdFromToken(String token){
        String userId = Jwts.parser()
                .setSigningKey(Keys.hmacShaKeyFor(secretKey.getBytes()))
                .build()
                .parseClaimsJws(token)
                .getPayload()
                .getSubject();
                return Long.getLong(userId);
    }
}
