import React from 'react'
import { useEffect, useState } from 'react';

export default function Teacher() {
  
    const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://localhost:5001/api/Teacher")
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
<h3 style={{textAlign: "center"}}>Teacher Details</h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Gender</th>
      <th scope="col">Subject</th>
      <th scope="col">ContactNo</th>
      <th scope="col">JoiningDate</th>
      <th scope="col">Addresss</th>
    </tr>
  </thead>
  <tbody>
    {
    users.map(user => (
        <tr key={user.teacherID}>
                <td>{user.teacherID}</td>
                    <td>{user.teacherName}</td>
                    <td>{user.teacherDOB}</td>
                    <td>{user.teacherGender}</td>
                    <td>{user.teacherSubject}</td>
                    <td>{user.teacherContactNo}</td>
                    <td>{user.teacherJoiningDate}</td>
                    <td>{user.addresss}</td>
                </tr>
        ))
    }
  </tbody>
</table>
    </div>
  )
 };