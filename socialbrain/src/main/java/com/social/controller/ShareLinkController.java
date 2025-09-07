package com.social.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.social.config.AppConfig;
import com.social.model.Content;
import com.social.model.ShareLink;
import com.social.model.User;
import com.social.repo.ContentRepository;
import com.social.repo.UserRepository;
import com.social.service.ShareLinkService;

@RestController
@RequestMapping("/api/share")
public class ShareLinkController {

	private final AppConfig appConfig;

	@Autowired
	private ShareLinkService shareLinkService;

	@Autowired
	private ContentRepository contentRepository;

	@Autowired
	private UserRepository userRepository;

	ShareLinkController(AppConfig appConfig) {
		this.appConfig = appConfig;
	}

	@PostMapping("/create/{userId}")
	public ResponseEntity<?> createShareLink(@PathVariable Integer userId, @RequestBody List<Integer> contentIds) {
		Optional<User> userOpt = userRepository.findById(userId);

		if (userOpt.isEmpty()) {
			return ResponseEntity.badRequest().body("user not found!");
		}

		List<Content> contents = contentRepository.findAllById(contentIds);
		if (contents.isEmpty()) {
			return ResponseEntity.badRequest().body("No contents found!");
		}

		ShareLink shareLink = shareLinkService.createShareLink(userOpt.get(), contents);
		return ResponseEntity.ok(shareLink);
	}

	// Fetch shared content by hash
	@GetMapping("/{hash}")
	public ResponseEntity<?> getSharedContent(@PathVariable String hash) {
		Optional<ShareLink> shareLinkOpt = shareLinkService.getByHash(hash);
		if (shareLinkOpt.isEmpty()) {
			return ResponseEntity.badRequest().body("Invalid share link!");
		}

		ShareLink shareLink = shareLinkOpt.get();
		return ResponseEntity.ok(shareLink.getContents());
	}

}
