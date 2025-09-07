/*
package com.social.security;

import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {

	private static final String SECRET_KEY = "mySecurityKey12345";
	private static final long EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour

	// Generate token
	public static String generateToken(String username) {
		return Jwts.builder().setSubject(username).setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
	}

	// extract Username
	public static String extractUsername(String token) {
		return getClaims(token).getSubject();
	}

	// Validate Token
	public static boolean validateToken(String token, String username) {
		return username.equals(extractUsername(token)) && !isTokenExpired(token);
	}

	private static boolean isTokenExpired(String token) {
		return getClaims(token).getExpiration().before(new Date());
	}

	private static Claims getClaims(String token) {
		return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
	}
}

*/