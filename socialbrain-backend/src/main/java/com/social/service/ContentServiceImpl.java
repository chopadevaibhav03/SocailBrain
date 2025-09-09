package com.social.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.social.controller.UserController;
import com.social.model.Content;
import com.social.model.User;
import com.social.repo.ContentRepository;

@Service
public class ContentServiceImpl implements ContentService {

//	private final UserController userController;

	@Autowired
	private ContentRepository contentRepo;

//	ContentServiceImpl(UserController userController) {
//		this.userController = userController;
//	}

    @Autowired
    private UserService userService; // ✅ if you need user info
	
	@Override
	public Content saveContent(Content content) {

		return contentRepo.save(content);
	}

	@Override
	public List<Content> findAll() {
		return contentRepo.findAll();
	}

	@Override
	public Optional<Content> findById(int id) {
		return contentRepo.findById(id);
	}

	@Override
	public List<Content> getConteByType(String type) {
		return contentRepo.getConteByType(type);
	}

	@Override
	public List<Content> getContentByTitle(String title) {
		return contentRepo.getContentByTitle(title);
	}

	@Override
	public List<Content> findByUser(User user) {
		return contentRepo.findByUser(user);
	}

	@Override
	public void deleteById(int id) {
		contentRepo.deleteById(id);
		
	}

	@Override
	public List<Content> getContentByTag(String tag) {
		return contentRepo.findByTagsContaining(tag);
	}

}
