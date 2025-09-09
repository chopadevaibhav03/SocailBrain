package com.social.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.social.config.SecurityConfig;
import com.social.model.User;
import com.social.repo.UserRepository;
import com.social.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

//	private final UserRepository userRepository;

//	private final SecurityConfig securityConfig;

	@Autowired
	private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
	
//	UserController(SecurityConfig securityConfig, UserRepository userRepository) {
//		this.securityConfig = securityConfig;
//		this.userRepository = userRepository;
//	}

	// create user

	@PostMapping("/add")
	public ResponseEntity<User> createUser(@RequestBody User user) {

		User saveUser = userService.save(user);
		return ResponseEntity.ok(saveUser);
	}

	@PostMapping("/addAll")
	public ResponseEntity<List<User>> addAllUsers(@RequestBody List<User> users) {
		List<User> savedUsers = userService.saveAll(users);
		return ResponseEntity.ok(savedUsers);
	}

	@GetMapping("/all")
	public List<User> getAll() {
		return userService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<User> getUserbyId(@PathVariable int id) {
		User user = userService.getUserById(id);
		return (user != null) ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable int id) {
		userService.deleteUserById(id);
		return ResponseEntity.ok("User deleted successfully!");
	}

	@DeleteMapping("/deleteAll")
	public ResponseEntity<String> deleteAllUsers() {
		userService.deleteAll();
		return ResponseEntity.ok("All users deleted successfully!");
	}

	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User user) {
		User updated = userService.updateUser(id, user);
		return ResponseEntity.ok(updated);
	}

}
