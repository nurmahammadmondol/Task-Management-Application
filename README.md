# Task Management Application

## Live Demo

🔗 [Task Management App](https://tasks-management-application.netlify.app/)

## Repositories

- **Frontend:**
  [GitHub Repo](https://github.com/nurmahammadmondol/Task-Management-Application)
- **Backend:**
  [GitHub Repo](https://github.com/nurmahammadmondol/Task-Management-Application-Backend)

## Overview

A task management application where users can add, edit, delete, and reorder
tasks across different categories. The app provides a real-time experience with
Firebase authentication and a clean UI for smooth task management.

## Features

✅ **User Authentication** (Google Sign-in via Firebase)  
✅ **Drag & Drop Task Management**  
✅ **Task CRUD Operations** (Add, Edit, Delete, Reorder)  
✅ **Real-time Updates** (MongoDB Change Streams/WebSockets)  
✅ **Fully Responsive Design**  
✅ **Dark Mode Toggle (Bonus Feature)**

## Tech Stack

### Frontend

- React.js (with Vite)
- Tailwind CSS
- React Router
- Firebase Authentication
- React-Beautiful-DnD (for drag-and-drop functionality)

### Backend

- Node.js
- Express.js
- MongoDB (via Mongoose)
- WebSockets / Change Streams (for real-time updates)

## Installation & Setup

### 1️⃣ Clone the repositories

```sh
# Clone frontend
git clone https://github.com/nurmahammadmondol/Task-Management-Application.git
cd Task-Management-Application

# Clone backend
git clone https://github.com/nurmahammadmondol/Task-Management-Application-Backend.git
cd Task-Management-Application-Backend
```

### 2️⃣ Install dependencies

```sh
# Install frontend dependencies
cd Task-Management-Application
npm install

# Install backend dependencies
cd ../Task-Management-Application-Backend
npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file in both frontend and backend directories with necessary
configurations (e.g., Firebase API keys, MongoDB URI).

### 4️⃣ Run the application

```sh
# Start backend server
cd Task-Management-Application-Backend
npm start

# Start frontend development server
cd ../Task-Management-Application
npm run dev
```

## API Endpoints

| Method | Endpoint     | Description                          |
| ------ | ------------ | ------------------------------------ |
| POST   | `/tasks`     | Add a new task                       |
| GET    | `/tasks`     | Get all tasks for the logged-in user |
| PUT    | `/tasks/:id` | Update task details                  |
| DELETE | `/tasks/:id` | Delete a task                        |

## Folder Structure

```
Task-Management-Application
├── public
├── src
│   ├── assets
│   ├── Components
│   │   ├── AddedTasks.jsx
│   │   ├── TaskBoard.jsx
│   │   ├── UpdateTask.jsx
│   ├── Context
│   │   ├── AuthProvider.jsx
│   ├── Firebase
│   ├── Header
│   │   ├── Navbar.jsx
│   ├── Home
│   │   ├── Home.jsx
│   ├── Pages
│   │   ├── Dashboard.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   ├── PrivetRoot
│   │   ├── PrivetRouter.jsx
│   ├── Routers
│   │   ├── Routers.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
├── .env
├── package.json
└── README.md
```

## Contribution Guidelines

Feel free to fork and contribute to this project. Create a pull request with
your changes!

## License

This project is **open-source** and available under the MIT License.

🚀 **Happy Coding!**
