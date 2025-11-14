# Fullstack CRUD Application

A fullstack CRUD (Create, Read, Update, Delete) application built with **React**, **Node.js (Express)**, **MongoDB**, and **Axios**. The app allows you to manage clients with features such as adding, editing, deleting, and displaying client data in a dynamic table.


## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Demo](#demo)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [API Endpoints](#api-endpoints)  
- [License](#license)  

---

## Features

- Add new clients with details: name, email, job, rate, and status.  
- Edit existing client information.  
- Delete clients with confirmation prompt.  
- Real-time table update after CRUD operations.  
- Modal forms for Add and Edit functionality.  
- Responsive and clean UI with TailwindCSS/DaisyUI.  

---

## Tech Stack

- **Frontend:** React, Axios, TailwindCSS, DaisyUI  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Mongoose ORM)  
- **Other:** React Hooks (useState, useEffect, useRef), RESTful API   

---

## Installation

### 1. Clone the repository

bash
git clone https://github.com/your-username/fullstack-crud.git
cd fullstack-crud

---
2. Install Backend dependencies

cd server
npm install

3. Install Frontend dependencies
cd ../client
npm install

4. Configure MongoDB

Make sure MongoDB is installed and running.

Update your connection string in server/index.js (or wherever your MongoDB URI is configured).

Usage
1. Start Backend Server
cd server
npm start


Server runs on: http://localhost:3000

2. Start Frontend React App
cd client
npm start


React app runs on: http://localhost:3001 (or default 3000 if backend is on another port)

3. Open App

Open http://localhost:3000 in your browser.

Use Add Client button to add new clients.

Click Update to edit existing clients.

Click Delete to remove a client.

Folder Structure
fullstack-crud/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Modelform.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Tablelist.jsx
│   │   ├── App.jsx
│   │   └── index.js
├── server/              # Node.js backend
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── api.js
│   ├── index.js
│   └── package.json
├── README.md
└── package.json

API Endpoints
Method	Endpoint	Description
GET	/read	Get all clients
POST	/create	Add a new client
POST	/update/:id	Update a client by ID
DELETE	/delete/:id	Delete a client by ID
