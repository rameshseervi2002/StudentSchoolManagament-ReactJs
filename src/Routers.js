import React from 'react'
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Students from './Students'
import Home from './Home'
import Staffs from './Staffs'
import Teacher from './Teacher'
import Login from './Login';
import Register from './Register';
import StudentPost from './StudentPost';
import TeacherPost from './TeacherPost';
import StaffPost from './StaffPost';

export default function Router() {
  const mystyle = {
    padding: "15px",
    color: "white",
    textDecoration: 'none' 
  };
  const collapse = {
  display: "contents"
  };
  return (
    <div>
      
    <BrowserRouter>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <div class="container-fluid">
    <h5><NavLink  class="nav-link" style={mystyle} to="/">School Management</NavLink></h5>
      <div style={collapse} class="collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink  class="nav-link"  style={mystyle} to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink  class="nav-link" style={mystyle} to="/student">Student</NavLink>
          </li>
          <li class="nav-item">
            <NavLink  class="nav-link" style={mystyle} to="/studentpost">StudentPost</NavLink>
          </li>
          <li class="nav-item">
             <NavLink  class="nav-link" style={mystyle} to="/teacher">Teacher</NavLink>
          </li>
          <li class="nav-item">
            <NavLink  class="nav-link" style={mystyle} to="/teacherpost">TeacherPost</NavLink>
          </li>
          <li class="nav-item">
          <NavLink  class="nav-link" style={mystyle} to="/staff">Staff</NavLink>
          </li>
          <li class="nav-item">
            <NavLink  class="nav-link" style={mystyle} to="/staffpost">StaffPost</NavLink>
          </li>
          <li class="nav-item">
             <NavLink  class="nav-link" style={mystyle} to="/login">Login</NavLink>
          </li>
          <li class="nav-item">
          <NavLink  class="nav-link" style={mystyle} to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/student" element={<Students />} />
        <Route path="/studentpost" element={<StudentPost />} />
        <Route path="/staff" element={<Staffs />} />
        <Route path="/staffpost" element={<StaffPost />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacherpost" element={<TeacherPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      
    </BrowserRouter>
    </div>
  )
}
