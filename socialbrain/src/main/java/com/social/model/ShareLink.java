package com.social.model;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ValueGenerationType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "share_links")
public class ShareLink {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// unique random string for sharing
	@Column(unique = true, nullable = false)
	private String hash;

	// Who created the share link
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	// Contents associated with this share link

	@ManyToMany
	@JoinTable(name = "share_link_contents", 
	joinColumns = @JoinColumn(name = "share_link_id"), 
	inverseJoinColumns = @JoinColumn(name = "content_id"))
	private List<Content> contents = new ArrayList<>();

	public ShareLink(int id, String hash, User user, List<Content> contents) {
		super();
		this.id = id;
		this.hash = hash;
		this.user = user;
		this.contents = contents;
	}

	public ShareLink() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getHash() {
		return hash;
	}

	public void setHash(String hash) {
		this.hash = hash;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Content> getContents() {
		return contents;
	}

	public void setContents(List<Content> contents) {
		this.contents = contents;
	}

	@Override
	public String toString() {
		return "ShareLink [id=" + id + ", hash=" + hash + ", user=" + user + ", contents=" + contents + "]";
	}
	
	
	
}
