import React from 'react'
import { useEffect, useState } from 'react';

export default function Students() {
      const [users, setUsers] = useState([])

      const fetchData = () => {
        fetch("https://localhost:5001/api/Student")
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
        <h3 style={{textAlign: "center"}}>Student Details</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Rollno</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Class</th>
              <th scope="col">ContactNo</th>
              <th scope="col">Gender</th>
              <th scope="col">JoiningDate</th>
              <th scope="col">ParentName</th>
              <th scope="col">ParentNumber</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map(user => (
                <tr key={user.studentRollno}>
                        <td>{user.studentRollno}</td>
                            <td>{user.studentName}</td>
                            <td>{user.studentDOB}</td>
                            <td>{user.studentClass}</td>
                            <td>{user.studentContactNo}</td>
                            <td>{user.studentGender}</td>
                            <td>{user.studentJoiningDate}</td>
                            <td>{user.studentParentName}</td>
                            <td>{user.studentParentNumber}</td>
                        </tr>
                ))
            }
          </tbody>
        </table>
    </div>
  )
 };