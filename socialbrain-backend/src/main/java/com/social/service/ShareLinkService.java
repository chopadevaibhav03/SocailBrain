package com.social.service;

import java.util.List;
import java.util.Optional;

import com.social.model.Content;
import com.social.model.ShareLink;
import com.social.model.User;

public interface ShareLinkService {

	ShareLink createShareLink(User user, List<Content> contents);
    Optional<ShareLink> getByHash(String hash);
}
