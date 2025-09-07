package com.social.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.social.model.ShareLink;

public interface ShareLinkRepository extends JpaRepository<ShareLink, Integer> {

	Optional<ShareLink> findByHash(String hash);
}
