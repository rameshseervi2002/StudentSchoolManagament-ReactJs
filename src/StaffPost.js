import React from 'react'
import { useState } from 'react';

export default function StaffPost() {
  
    const [staffName, setName] = useState("");
    const [staffDOB, setDOB] = useState("");
    const [staffDepartment, setClass] = useState("");
    const [staffContactNo, setContactNo] = useState("");
    const [staffShift, setGender] = useState("");
    const [staffJoiningDate, setJoiningDate] = useState("");
    const [staffWork, setParentName] = useState("");
    const [staffExperience, setParentNumber] = useState("");
    function saveUser(){
      console.warn({staffName, staffDOB, staffDepartment, staffContactNo,staffShift,staffJoiningDate, staffWork, staffExperience});

    let data={staffName, staffDOB, staffDepartment, staffContactNo,staffShift,staffJoiningDate, staffWork, staffExperience}

      fetch("https://localhost:5001/api/Staff", {
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
      <h3 style={{textAlign: "center"}}>Create New Staff Details</h3>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}} placeholder='Enter Full Name'  onChange={(e)=>{setName(e.target.value)}} value={staffName} name="staffName" />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}} placeholder='Enter DOB '  onChange={(e)=>{setDOB(e.target.value)}} value={staffDOB} name="staffDOB"  />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}} placeholder='Enter Department'  onChange={(e)=>{setClass(e.target.value)}} value={staffDepartment} name="staffDepartment"  />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}} placeholder='Enter Contact Number '  onChange={(e)=>{setContactNo(e.target.value)}} value={staffContactNo} name="staffContactNo" />
      </div>
      <div className="mb-3">
          <input   type="text" style={{width: "350px"}} placeholder='Enter Shift Timing'  onChange={(e)=>{setGender(e.target.value)}} value={staffShift} name="staffShift" />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}} placeholder='Enter Joining Timing '  onChange={(e)=>{setJoiningDate(e.target.value)}} value={staffJoiningDate} name="staffJoiningDate" />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}} placeholder='Enter Roles '  onChange={(e)=>{setParentName(e.target.value)}} value={staffWork} name="staffWork"  />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}} placeholder='Enter Experience '  onChange={(e)=>{setParentNumber(e.target.value)}} value={staffExperience} name="staffExperience" />
      </div>
      <button type="button" onClick={saveUser} className="btn btn-primary">Submit</button>
      </form>
              
  </div>
)
}