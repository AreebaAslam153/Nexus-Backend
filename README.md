# Nexus - Investor & Entrepreneur Collaboration Platform

A RESTful backend API built using **Node.js**, **Express.js**, and **MongoDB Atlas** for connecting entrepreneurs with investors. The platform allows users to register, manage startup profiles, schedule meetings, exchange messages, upload documents, receive notifications, and track investments.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcryptjs

### User Management
- View User Profile
- Update User Profile
- Role-Based Authorization (Entrepreneur / Investor)

### Startup Management
- Create Startup
- View All Startups
- View Startup by ID
- Update Startup
- Delete Startup
- Search & Filter Startups

### Investor Management
- Create Investor Profile
- View Investors
- Update Investor
- Delete Investor

### Meeting Management
- Schedule Meetings
- View Meetings
- Update Meeting Status
- Delete Meetings

### Document Management
- Upload Documents
- View Documents
- Delete Documents

### Messaging
- Send Messages
- View Conversation History

### Notifications
- Create Notifications
- View Notifications
- Mark Notifications as Read

### Investment Management
- Create Investment Requests
- View Investments
- Update Investment Status

### Dashboard
- Dashboard Statistics
- Total Users
- Total Startups
- Total Investors
- Total Meetings
- Total Documents
- Total Messages
- Total Notifications

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcryptjs

### Development Tools
- Nodemon
- Thunder Client
- VS Code
- Git & GitHub

---

## 📂 Project Structure

```
Nexus-Backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
│
├── app.js
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd Nexus-Backend
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

### Run Project

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint |
|--------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Users

| Method | Endpoint |
|--------|----------|
| GET | /api/users/profile |
| PUT | /api/users/profile |

### Startups

| Method | Endpoint |
|--------|----------|
| POST | /api/startups |
| GET | /api/startups |
| GET | /api/startups/:id |
| PUT | /api/startups/:id |
| DELETE | /api/startups/:id |

### Investors

| Method | Endpoint |
|--------|----------|
| POST | /api/investors |
| GET | /api/investors |
| PUT | /api/investors/:id |
| DELETE | /api/investors/:id |

### Meetings

| Method | Endpoint |
|--------|----------|
| POST | /api/meetings |
| GET | /api/meetings |
| PUT | /api/meetings/:id |
| DELETE | /api/meetings/:id |

### Documents

| Method | Endpoint |
|--------|----------|
| POST | /api/documents |
| GET | /api/documents |
| DELETE | /api/documents/:id |

### Messages

| Method | Endpoint |
|--------|----------|
| POST | /api/messages |
| GET | /api/messages |

### Notifications

| Method | Endpoint |
|--------|----------|
| POST | /api/notifications |
| GET | /api/notifications |

### Investments

| Method | Endpoint |
|--------|----------|
| POST | /api/investments |
| GET | /api/investments |
| PUT | /api/investments/:id |

### Dashboard

| Method | Endpoint |
|--------|----------|
| GET | /api/dashboard |

---

## 🔐 Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 👩‍💻 Developer

**Areeba Aslam**

BS Information Technology

University of Education, Lahore (Multan Campus)

GitHub: *https://github.com/AreebaAslam153*

---

## 📄 License

This project was developed for learning and internship purposes.
