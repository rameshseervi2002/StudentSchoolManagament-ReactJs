import React from 'react'
import { useEffect, useState } from 'react';

export default function StudentPost() {
    

    const mystyle = {
        textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"

      };
      const [studentName, setName] = useState("");
      const [studentDOB, setDOB] = useState("");
      const [studentClass, setClass] = useState("");
      const [studentContactNo, setContactNo] = useState("");
      const [studentGender, setGender] = useState("");
      const [studentJoiningDate, setJoiningDate] = useState("");
      const [studentParentName, setParentName] = useState("");
      const [studentParentNumber, setParentNumber] = useState("");

      function saveUser(){
        console.warn({studentName, studentDOB, studentClass, studentContactNo,studentGender,studentJoiningDate, studentParentName, studentParentNumber});

      let data={studentName, studentDOB, studentClass, studentContactNo,studentGender,studentJoiningDate, studentParentName, studentParentNumber}

        fetch("https://localhost:5001/api/Student", {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{

                console.warn("resp",resp);
            })
        })
    } 
  return (
    <div>
        <form >
        <h3 style={mystyle}>Create New Student Details</h3>
        <div className="mb-3">
            <input  type="text" style={{width: "350px"}} placeholder='Enter Name'    onChange={(e)=>{setName(e.target.value)}} value={studentName} name="studentName" />
        </div>
        <div className="mb-3">
            <input  type="text" style={{width: "350px"}} placeholder='Enter DOB'   onChange={(e)=>{setDOB(e.target.value)}} value={studentDOB} name="studentDOB"  />
        </div>
        <div className="mb-3">
            <input  type="text" style={{width: "350px"}} placeholder='Enter Class'  onChange={(e)=>{setClass(e.target.value)}} value={studentClass} name="studentClass"  />
        </div>
        <div className="mb-3">
            <input  type="text" style={{width: "350px"}} placeholder='Enter Contact Number'  onChange={(e)=>{setContactNo(e.target.value)}} value={studentContactNo} name="studentContactNo" />
        </div>
        <div className="mb-3">
            <input   type="text" style={{width: "350px"}} placeholder='Enter Gender'  onChange={(e)=>{setGender(e.target.value)}} value={studentGender} name="studentGender" />
        </div>
        <div className="mb-3">
            <input  type="text" style={{width: "350px"}} placeholder='Enter Date of Joining'  onChange={(e)=>{setJoiningDate(e.target.value)}} value={studentJoiningDate} name="studentJoiningDate" />
        </div>
        <div className="mb-3">
            <input  type="text" style={{width: "350px"}} placeholder='Enter Father Name'  onChange={(e)=>{setParentName(e.target.value)}} value={studentParentName} name="studentParentName"  />
        </div>
        <div className="mb-3">
            <input  type="text" style={{width: "350px"}} placeholder='Enter Parent Contact Number'  onChange={(e)=>{setParentNumber(e.target.value)}} value={studentParentNumber} name="studentParentNumber" />
        </div>
        <button type="button" onClick={saveUser} className="btn btn-primary">Submit</button>
        </form>
                
    </div>
  )
}
