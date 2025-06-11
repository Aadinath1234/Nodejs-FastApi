
# 📝 Full Stack Task Manager App

A full-stack web application for managing tasks with user authentication, CRUD functionality, and CSV export. Built with **React**, **Tailwind CSS**, and **DaisyUI** on the frontend; uses **Node.js** for authentication and CRUD operations; and **FastAPI** (Python) for exporting tasks as a CSV file.

---

## 🛠️ Tech Stack

- **Frontend**: React + Tailwind CSS + DaisyUI  
- **Backend 1**: Node.js (Authentication + CRUD Operations)  
- **Backend 2**: FastAPI (CSV Export)

---

## 🚀 Features

- ✅ User Authentication (Sign Up & Login)
- ✅ Task Manager Page: Create, Read, Update, Delete tasks
- ✅ Export Tasks: Download tasks as a CSV file

---

## 📂 Project Structure

```

.
├── frontend     # React frontend
├── backend1     # Node.js backend (Authentication + CRUD)
└── backend2     # FastAPI backend (CSV Export)

````

---

## 🧑‍💻 Setup Instructions

### 1. Clone and Unzip the Repository

```bash
unzip project.zip
cd project-directory
````

---

### 2. Frontend Setup (React + Tailwind CSS + DaisyUI)

```bash
cd frontend
npm install
npm run dev
```

* Runs on: `http://localhost:5173` (default Vite port)

---

### 3. Backend 1 Setup (Node.js – Authentication + CRUD)

```bash
cd ../backend1
npm install
node server.js
# OR (if nodemon is installed)
nodemon server.js
```

* This backend handles:

  * User sign up and login
  * All task CRUD operations

---

### 4. Backend 2 Setup (FastAPI – CSV Export)

```bash
cd ../backend2
pip install -r requirements.txt
uvicorn main:app --reload
```

* This backend provides an API endpoint to export all tasks as a downloadable CSV file.

---

## 🔑 Usage Flow

1. Open the app in your browser at [http://localhost:5173](http://localhost:5173)
2. Click **Login** → Use **Signup** link to register
3. After registering, log in with your credentials
4. You’ll be redirected to the **Task Manager Page**

You can now:

* ➕ Add new tasks
* ✏️ Edit or 🗑️ Delete existing tasks
* 📤 Export your task list to CSV

---

## 📦 Dependencies

Make sure the following are installed:

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [Python 3.8+](https://www.python.org/)
* `pip` (Python package installer)
* `uvicorn` (included in `requirements.txt` for FastAPI)

---

## 📃 License

This project is licensed under the **MIT License**.

```

---

Let me know if you'd like to include screenshots, API route documentation, or environment variable setup.
```
