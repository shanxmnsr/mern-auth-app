# MERN Authentication System

A full-stack MERN authentication application implementing a secure two-token authentication system using JWT access tokens and refresh tokens.

Users can register, login, access protected routes, refresh expired sessions, and securely logout.


---

## Live Demo

Frontend:
[https://mern-auth-app-beta.vercel.app](https://mern-auth-app-pu25.onrender.com)

Backend API:
[https://mern-auth-app-pu25.onrender.com](https://mern-auth-app-beta.vercel.app/)

---

## Features

- User registration
- Secure password hashing using bcrypt
- JWT authentication
- Short-lived access tokens
- Long-lived refresh tokens
- HTTP-only cookie storage
- Protected dashboard
- Refresh token based session renewal
- Secure logout
- MongoDB database integration

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cookie Parser

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

# Authentication Flow

This application uses a two-token authentication system.

## Access Token

- Short-lived JWT token
- Expires after 15 minutes
- Used to access protected routes

## Refresh Token

- Long-lived JWT token
- Expires after 7 days
- Used to generate a new access token after expiration
- Stored securely in HTTP-only cookies
- Stored in database for validation


---

# Security Implementation

- Passwords are hashed using bcrypt
- JWT tokens are stored in HTTP-only cookies
- Refresh tokens are stored securely
- Protected routes verify access tokens
- Sensitive user information is not exposed

---

# Project Structure


client/
├── src/
│ ├── pages
│ ├── components
│ ├── context
│ └── api
server/
├── controllers
├── models
├── routes
├── middleware
└── server.js

---


# API Endpoints

## Register


POST /api/auth/register


## Login


POST /api/auth/login


## Refresh Token


GET /api/auth/refresh


## Logout


POST /api/auth/logout



# Author

Shania
