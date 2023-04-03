import React from 'react'
import { useEffect, useState } from 'react';

export default function Staffs() {
    const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://localhost:5001/api/Staff")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
<h3 style={{textAlign: "center"}}>Staff Details</h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Work</th>
      <th scope="col">Experience</th>
      <th scope="col">Shift</th>
      <th scope="col">DOB</th>
      <th scope="col">ContactNo</th>
      <th scope="col">JoiningDate</th>
    </tr>
  </thead>
  <tbody>
    {
    users.map(user => (
        <tr key={user.staffID}>
                <td>{user.staffID}</td>
                    <td>{user.staffName}</td>
                    <td>{user.staffDepartment}</td>
                    <td>{user.staffWork}</td>
                    <td>{user.staffExperience}</td>
                    <td>{user.staffShift}</td>
                    <td>{user.staffDOB}</td>
                    <td>{user.staffContactNo}</td>
                    <td>{user.staffJoiningDate}</td>
                </tr>
        ))
    }
  </tbody>
</table>
    </div>
  )
 };