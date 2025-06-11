# 📝 Full Stack Task Manager App

A full-stack web application for managing tasks with user authentication, CRUD functionality, and CSV export. Built with **React**, **Tailwind CSS**, and **DaisyUI** on the frontend. The backend uses **Node.js + MongoDB** for authentication and task CRUD operations, and **FastAPI** (Python) for exporting tasks as a CSV file.

---

## 🛠️ Tech Stack

* **Frontend**: React + Tailwind CSS + DaisyUI
* **Backend 1**: Node.js + **MongoDB** (Authentication + CRUD Operations)
* **Backend 2**: FastAPI (CSV Export)

---

## 🚀 Features

* ✅ User Authentication (Sign Up & Login)
* ✅ Task Manager Page: Create, Read, Update, Delete tasks
* ✅ Export Tasks: Download tasks as a CSV file

---

## 📂 Project Structure

```
.
├── frontend     # React frontend
├── backend1     # Node.js + MongoDB backend (Authentication + CRUD)
└── backend2     # FastAPI backend (CSV Export)
```

---

## 🧑‍💻 Setup Instructions

### 1. Clone and Unzip the Repository

```bash
unzip project.zip
cd project-directory
```

---

### 2. Frontend Setup (React + Tailwind CSS + DaisyUI)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: [http://localhost:5173](http://localhost:5173)

---

### 3. Backend 1 Setup (Node.js + MongoDB – Authentication + CRUD)

```bash
cd ../backend1
npm install
```

Ensure MongoDB is running locally or use a cloud instance (like MongoDB Atlas).
Update the MongoDB connection string in your `.env` file or config.

```bash
node server.js
# OR (if nodemon is installed)
nodemon server.js
```

This backend handles:

* User sign up and login (with JWT or session)
* All task-related Create, Read, Update, and Delete operations (stored in MongoDB)

---

### 4. Backend 2 Setup (FastAPI – CSV Export)

```bash
cd ../backend2
pip install -r requirements.txt
uvicorn main:app --reload
```

This backend provides an API endpoint to export all tasks as a downloadable CSV file.

---

## 🔑 Usage Flow

1. Open the app in your browser at [http://localhost:5173](http://localhost:5173)
2. Click **Login**, then use the **Signup** link to register
3. Log in with your credentials
4. You’ll be redirected to the **Task Manager Page**, where you can:

   * ➕ Add new tasks
   * ✏️ Edit or 🗑️ Delete existing tasks
   * 📤 Export your task list to CSV

---

## 📦 Dependencies

Make sure the following are installed on your system:

* [Node.js](https://nodejs.org/)
* npm
* [MongoDB](https://www.mongodb.com/) (local or cloud instance)
* [Python 3.8+](https://www.python.org/)
* pip (Python package installer)
* uvicorn (installed via `requirements.txt`)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).
