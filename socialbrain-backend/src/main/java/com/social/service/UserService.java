package com.social.service;

import java.util.List;

import com.social.model.User;

public interface UserService {

	User save(User user);
	
	List<User> saveAll(List<User> users);
	
	List<User> findAll();
	
    User getUserById(int id);

    void deleteUserById(int id);
    
    void deleteAll();

	User updateUser(Integer id, User user);

}
