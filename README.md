# 🚀 Nexus - Investor & Entrepreneur Collaboration Platform

A RESTful Backend API built with **Node.js**, **Express.js**, and **MongoDB Atlas** that connects entrepreneurs with investors. The platform enables users to register, manage startup profiles, schedule meetings, exchange messages, upload documents, receive notifications, and manage investment requests.

---

## 📌 Project Overview

The Nexus platform provides a secure backend system for connecting startups and investors. It supports authentication, startup management, investor management, meetings, messaging, notifications, investment tracking, and dashboard analytics using RESTful APIs.

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Password Encryption using bcryptjs

### 👤 User Management
- View User Profile
- Update User Profile
- Role-Based Authorization (Entrepreneur / Investor)

### 🚀 Startup Management
- Create Startup
- View All Startups
- View Startup by ID
- Update Startup
- Delete Startup
- Search & Filter Startups

### 💰 Investor Management
- Create Investor Profile
- View Investors
- Update Investor Profile
- Delete Investor Profile

### 📅 Meeting Management
- Schedule Meetings
- View Meetings
- Update Meeting Status
- Delete Meetings

### 📁 Document Management
- Upload Documents
- View Documents
- Delete Documents

### 💬 Messaging
- Send Messages
- View Conversations

### 🔔 Notifications
- Create Notifications
- View Notifications
- Mark Notifications as Read

### 💵 Investment Management
- Create Investment Requests
- View Investments
- Update Investment Status

### 📊 Dashboard
- Total Users
- Total Startups
- Total Investors
- Total Meetings
- Total Documents
- Total Messages
- Total Notifications

---

# 🛠 Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose ODM

## Authentication
- JSON Web Token (JWT)
- bcryptjs

## Deployment
- Railway

## API Testing
- Thunder Client

## Version Control
- Git
- GitHub

---

# 📂 Project Structure

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
├── package-lock.json
├── .env
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/AreebaAslam153/Nexus-Backend.git
```

## Navigate into Project

```bash
cd Nexus-Backend
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

## Run Development Server

```bash
npm run dev
```

The server will start on:

```
http://localhost:5000
```

---

# 🚀 Deployment

### Backend (Railway)

```
https://nexus-backend-production-0d80.up.railway.app
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint |
|--------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Users

| Method | Endpoint |
|--------|----------|
| GET | /api/users/profile |
| PUT | /api/users/profile |

---

## Startups

| Method | Endpoint |
|--------|----------|
| GET | /api/startups |
| GET | /api/startups/:id |
| POST | /api/startups |
| PUT | /api/startups/:id |
| DELETE | /api/startups/:id |

---

## Investors

| Method | Endpoint |
|--------|----------|
| GET | /api/investors |
| POST | /api/investors |
| PUT | /api/investors/:id |
| DELETE | /api/investors/:id |

---

## Meetings

| Method | Endpoint |
|--------|----------|
| GET | /api/meetings |
| POST | /api/meetings |
| PUT | /api/meetings/:id |
| DELETE | /api/meetings/:id |

---

## Documents

| Method | Endpoint |
|--------|----------|
| GET | /api/documents |
| POST | /api/documents |
| DELETE | /api/documents/:id |

---

## Messages

| Method | Endpoint |
|--------|----------|
| GET | /api/messages |
| POST | /api/messages |

---

## Notifications

| Method | Endpoint |
|--------|----------|
| GET | /api/notifications |
| POST | /api/notifications |

---

## Investments

| Method | Endpoint |
|--------|----------|
| GET | /api/investments |
| POST | /api/investments |
| PUT | /api/investments/:id |

---

## Dashboard

| Method | Endpoint |
|--------|----------|
| GET | /api/dashboard/stats |

---

# 🔐 Authentication

Protected routes require a valid JWT token.

Example:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 🧪 API Testing

All APIs were tested successfully using **Thunder Client** in Visual Studio Code.

The following operations were verified:

- User Registration
- User Login
- JWT Authentication
- CRUD Operations
- Protected Routes
- Role-Based Authorization
- Dashboard Statistics

---

# 👨‍💻 Developer

**Areeba Aslam**

BS Information Technology

GitHub:
https://github.com/AreebaAslam153

---

# 📄 License

This project was developed for educational and internship purposes.
