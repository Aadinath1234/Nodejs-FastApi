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
import ProtectedRedirection from "./components/ProtectedRedirection";
import ProtectedRoute from "./components/Protectedroute";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRedirection>
                <Home />
              </ProtectedRedirection>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRedirection>
                <Login />
              </ProtectedRedirection>
            }
          />
          <Route path="/signup" element={
            <ProtectedRedirection>
 <Signup />
            </ProtectedRedirection>
           
            
            } />
          <Route path="/dashboard" element={
            <ProtectedRedirection>
<Dashboard />
            </ProtectedRedirection>
            
            } />
          <Route path="/salary" element={
           <ProtectedRedirection>
 <Salary />
           </ProtectedRedirection>
           
            
            } />
          <Route path="/people" element={
             <ProtectedRedirection>
              <People />
             </ProtectedRedirection>
            
            
            } />
          <Route path="/form" element={
            <ProtectedRedirection>
                <JobPosting />
            </ProtectedRedirection>
           
            } />
          <Route
            path="/task"
            element={
              <ProtectedRoute>
                <Task />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
