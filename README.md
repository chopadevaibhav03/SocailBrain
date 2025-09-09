# 🧠 Social Brain – Backend (Spring Boot)

## 📌 Project Overview

**Social Brain** is a backend system built with **Spring Boot** that allows users to save, organize, and share digital content such as YouTube videos, articles, and social media posts.
The project integrates **JWT-based authentication** and supports user management, content management, tagging, and secure share links.

This backend is designed to integrate seamlessly with a **React frontend**.

---

## 🎯 Problem Statement

Managing digital resources (videos, links, blogs, tweets, etc.) is often messy — scattered across browsers, apps, and notes.
This project solves that by:

* Allowing users to store, categorize, and manage all their content in one place.
* Tagging and filtering for quick retrieval.
* Securely sharing collections with others.

---

## 🚀 Features

* **User Authentication**

  * Signup & Login with password encryption (`BCrypt`).
  * JWT token-based secure authentication.
* **Content Management**

  * Add content (links, titles, types like YouTube, Twitter, Instagram, etc.).
  * Fetch all contents for the logged-in user.
  * Filter by content type or tags.
  * Update / Delete contents.
* **Tags**

  * Add tags to content for easier searching.
  * Filter content based on tags.
* **Share Links**

  * Generate unique, shareable links for your saved content.
  * Anyone with the link can view shared content.
* **Security**

  * Role-based secured endpoints with Spring Security.
  * Stateless authentication with JWT.

---

## 🛠️ Tech Stack

* **Backend Framework:** Spring Boot (v3.5.x)
* **Database:** MySQL
* **ORM:** Spring Data JPA (Hibernate)
* **Authentication:** JWT + Spring Security
* **Language:** Java 21
* **Frontend (planned):** React + Tailwind

---

## 📂 Project Structure

```
socialbrain-backend/
│── src/main/java/com/social/
│   ├── config/             # Security & AppConfig
│   ├── controller/         # REST Controllers (User, Auth, Content, Tags, Share)
│   ├── model/              # Entities (User, Content, Tag, ShareLink)
│   ├── repo/               # Repositories (JPA Interfaces)
│   ├── security/           # JWT Filter & Util
│   └── service/            # Business Logic (Interfaces & Implementations)
│
│── src/main/resources/
│   ├── application.properties
│   └── data.sql (sample seed data)
│
│── pom.xml
│── README.md
```

---

## ⚡ API Endpoints

### 🔑 Auth

* `POST /api/auth/signup` → Register new user
* `POST /api/auth/signin` → Login and get JWT

### 👤 User

* `GET /api/users/all` → Get all users (Admin only / for testing)
* `GET /api/users/{id}` → Get user by ID
* `PUT /api/users/update/{id}` → Update user
* `DELETE /api/users/{id}` → Delete user

### 📄 Content

* `POST /api/content/add` → Add new content (JWT user only)
* `GET /api/content/all` → Get all content of logged-in user
* `GET /api/content/type/{type}` → Filter content by type
* `DELETE /api/content/{id}` → Delete content

### 🏷 Tags

* `POST /api/tags/add/{contentId}` → Add tag to content
* `GET /api/tags/{tag}` → Get contents with tag

### 🔗 Share

* `POST /api/share/generate` → Generate unique share link
* `GET /api/share/{hash}` → View shared content

---

## ▶️ Running the Project

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/socialbrain-backend.git
cd socialbrain-backend
```

### 2️⃣ Configure Database

Update `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/socialbrain
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3️⃣ Run the app

```bash
mvn spring-boot:run
```

Backend runs at → `http://localhost:8084`

---

## 🔮 Future Enhancements

* Likes & Comments on content
* Advanced search (by title, tag, type)
* User profiles with analytics
* Tracking clicks on shared links
* Role-based access (Admin, User)

---

## 👨‍💻 Author

**Vaibhav Chopade**
| 💻 Java + Spring Developer | 🚀 Aspiring Backend Engineer

📧 [chopadevaibhav03@gmail.com](mailto:chopadevaibhav03@gmail.com)
🔗 [GitHub](https://github.com/chopadevaibhav03) | [LinkedIn](https://linkedin.com/in/chopadevaibhav03)

---


