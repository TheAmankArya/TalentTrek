# 🚀 TalentTrek – Smart Job Portal for the Modern Workforce

Welcome to **TalentTrek**, a full-stack MERN-based job portal that bridges the gap between talented professionals and forward-thinking companies. Built with scalability, speed, and simplicity in mind, TalentTrek makes hiring and job-hunting seamless and efficient.

---

## 🌟 Features

- 🧑‍💼 Employer & Job Seeker Authentication
- 📄 Resume upload & Job application tracking
- 📝 Post, Edit, and Manage Jobs
- 🔍 Smart Job Search with Filters
- 🧠 (Optional) AI-generated interview questions (integration ready)
- ☁️ Cloudinary integration for file uploads
- 🔒 JWT-based authentication system

---

## 🏗️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary API
- JWT & bcrypt

---

## 📁 Folder Structure

```
TalentTrek/
├── backend/        # Backend code (Express, MongoDB, REST APIs)
├── frontend/       # Frontend code (React, Tailwind)
└── .env            # Environment variables
```


---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/TheAmankArya/TalentTrek.git
cd TalentTrek
```

### 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

App should now be running at `http://localhost:3000`

---

## 🧲 API Endpoints (Backend)

| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| POST   | /api/auth/register    | Register new user          |
| POST   | /api/auth/login       | Login existing user        |
| GET    | /api/jobs             | Get all jobs               |
| POST   | /api/jobs             | Create a new job (Admin)   |
| PUT    | /api/jobs/:id         | Update a job               |
| DELETE | /api/jobs/:id         | Delete a job               |
| POST   | /api/apply/:jobId     | Apply to a job             |

---

## 🙆‍♂️ Author

**Aman Arya**  
GitHub: [@TheAmankArya](https://github.com/TheAmankArya)

---

## 📌 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Future Enhancements

- 🔍 AI-powered job recommendations
- 📊 Analytics Dashboard for Admins
- 🗕️ Interview scheduling
- 🔔 Email notifications

---

> "Trek your way to the perfect talent – or the perfect job – with TalentTrek!" 🌐

