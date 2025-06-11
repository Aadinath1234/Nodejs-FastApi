import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import People from "./components/People/People";
import Salary from "./components/Salary/Salary";
import JobPosting from "./components/JobPosting/JobPosting";
import Home from "./components/Home/Home";
import Task from "./components/Task/Task";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/people" element={<People />} />
          <Route path="/form" element={<JobPosting />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
