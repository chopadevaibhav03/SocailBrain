package com.social.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.social.model.User;
import com.social.repo.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private UserRepository userRepository;

	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	// SignUp

	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody User user) {

		if (userRepository.existsByUsername(user.getUsername())) {
			return ResponseEntity.badRequest().body("Username already exists");
		}
		if (userRepository.existsByEmail(user.getEmail())) {
			return ResponseEntity.badRequest().body("Email already exists");
		}

		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User saved = userRepository.save(user);
		return ResponseEntity.ok(saved);
	}
	
	// SignIn
	
	@PostMapping("/signin")
	public ResponseEntity<?> singin(@RequestBody User loginRequest){
		
		Optional<User> userOpt = userRepository.findByUsername(loginRequest.getUsername());
		if(userOpt.isEmpty()) {
			return ResponseEntity.badRequest().body("User not found!");
		}
		
		User user = userOpt.get();
		if(!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
			return ResponseEntity.badRequest().body("Invalid credentials");
		}
		
        return ResponseEntity.ok("Login successful (JWT will be here in future)");
		
	}
}