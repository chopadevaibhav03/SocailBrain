package com.social.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.social.model.Content;
import com.social.model.User;
import com.social.repo.UserRepository;
import com.social.service.ContentService;
import com.social.service.ContentServiceImpl;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/content")
public class ContentController {

	private final ContentServiceImpl contentServiceImpl;

	@Autowired
	private ContentService contentService;
	@Autowired
	private UserRepository userRepository;

	ContentController(ContentServiceImpl contentServiceImpl) {
		this.contentServiceImpl = contentServiceImpl;
	}

	// Add new content (User is taken from JWT)
	@PostMapping("/add")
	public ResponseEntity<?> addContent(HttpServletRequest request, @RequestBody Content content) {

		String username = (String) request.getAttribute("username"); // ✅ from JwtFilter
		if (username == null) {
			return ResponseEntity.status(401).body("Unauthorized: No username in token");
		}

		Optional<User> userOpt = userRepository.findByUsername(username);
		if (userOpt.isEmpty()) {
			return ResponseEntity.badRequest().body("User not found with username: " + username);
		}

		content.setUser(userOpt.get());
		Content saved = contentService.saveContent(content);

		return ResponseEntity.ok(saved);
	}

	@GetMapping("/all")
	public List<Content> getAllContents() {
		return contentService.findAll();

	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getContentById(@PathVariable int id) {
		Optional<Content> content = contentService.findById(id);
		return content.isPresent() ? ResponseEntity.ok(content.get())
				: ResponseEntity.badRequest().body("content not found");
	}

	// Get content by it's type...
	@GetMapping("/type/{type}")
	public List<Content> getContentByType(@PathVariable String type) {
		return contentService.getConteByType(type);
	}

	// Get content by it's title
	@GetMapping("/title/{title}")
	public List<Content> getContentByTitle(@PathVariable String title) {
		return contentService.getContentByTitle(title);
	}

	// Get all content of a user..
	@GetMapping("/user/{userId}")
	public ResponseEntity<?> getContentsByUser(@PathVariable Integer userId) {
		Optional<User> userOpt = userRepository.findById(userId);
		if (userOpt.isEmpty()) {
			return ResponseEntity.badRequest().body("User not found with id " + userId);
		}

		List<Content> userContents = contentService.findByUser(userOpt.get());
		return ResponseEntity.ok(userContents);
	}

	// update content by it's id
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateContent(@PathVariable int id, @RequestBody Content updatedContent) {
		Optional<Content> contentOpt = contentService.findById(id);
		if (contentOpt.isEmpty()) {
			return ResponseEntity.badRequest().body("Content not found with the id");
		}

		Content content = contentOpt.get();
		content.setTitle(updatedContent.getTitle());
		content.setTitle(updatedContent.getType());
		content.setLink(updatedContent.getLink());

		Content save = contentService.saveContent(content);
		return ResponseEntity.ok(save);
	}

	// delete content by id
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteContent(@PathVariable int id) {
		Optional<Content> contentOpt = contentService.findById(id);
		if (contentOpt.isEmpty()) {
			return ResponseEntity.badRequest().body("content not found " + id);
		}

		contentService.deleteById(id);
		return ResponseEntity.ok("Content deleted Successfully");

	}

	@GetMapping("/tag/{tag}")
	public List<Content> getContentByTag(@PathVariable String tag) {
		return contentService.getContentByTag(tag);
	}
}
