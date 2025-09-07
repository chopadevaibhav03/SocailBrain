package com.social.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.social.model.User;
import com.social.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}
	
	@Override
    public List<User> saveAll(List<User> users) {
        return userRepository.saveAll(users);
    }

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
	}

	@Override
	public void deleteUserById(int id) {
		userRepository.deleteUserById(id);
		
	}

	@Override
	public void deleteAll() {
		userRepository.deleteAll();
		
	}

	public User updateUser(Integer id, User updatedUser) {
        return userRepository.findById(id).map(existingUser -> {
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            // 👉 add other fields you have in your User model
            return userRepository.save(existingUser);
        }).orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }
	
	
}
