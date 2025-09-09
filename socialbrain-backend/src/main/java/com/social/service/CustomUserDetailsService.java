//package com.social.service;
//
//import java.util.Optional;
//
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.social.model.User;
//import com.social.repo.UserRepository;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//	private final UserRepository userRepository;
//
//	public CustomUserDetailsService(UserRepository userRepository) {
//		this.userRepository = userRepository;
//	}
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Optional<User> userOpt = userRepository.findByUsername(username);
//		if (userOpt.isEmpty()) {
//			throw new UsernameNotFoundException("User not found with username: " + username);
//		}
//		User user = userOpt.get();
//
//		// Convert your User entity to Spring Security's UserDetails
//		return org.springframework.security.core.userdetails.User.withUsername(user.getUsername())
//				.password(user.getPassword()) // password already encoded
//				.authorities("USER") // simple role for now
//				.build();
//	}
//}