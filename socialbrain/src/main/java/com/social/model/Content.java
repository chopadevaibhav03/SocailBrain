package com.social.model;

import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "contents")

public class Content {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String link;

	private String type;

	private String title;

	// MAPPING WITH USER

	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	@ElementCollection
	@CollectionTable(name = "content_tags",joinColumns = @JoinColumn(name = "content_id"))
	@Column(name = "tag")
	private List<String> tags;

	public Content(int id, String link, String type, String title, User user, List<String> tags) {
		super();
		this.id = id;
		this.link = link;
		this.type = type;
		this.title = title;
		this.user = user;
		this.tags = tags;
	}

	public Content() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "Content [id=" + id + ", link=" + link + ", type=" + type + ", title=" + title + ", user=" + user
				+ ", tags=" + tags + "]";
	}
	
	

}
