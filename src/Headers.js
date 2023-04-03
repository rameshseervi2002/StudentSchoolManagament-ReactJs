import React from 'react'
import { Outlet,Router, Link, BrowserRouter, NavLink } from "react-router-dom";


export default function Headers() {
  return (
    <div>
<BrowserRouter> 
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">School Management</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Students</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Teacher</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Staffs</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</BrowserRouter>
    </div>
  )
}
