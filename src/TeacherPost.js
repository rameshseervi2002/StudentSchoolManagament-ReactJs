import React from 'react'
import { useEffect, useState } from 'react'

export default function TeacherPost() {
    
    const [teacherName, setName] = useState("");
    const [teacherDOB, setDOB] = useState("");
    const [teacherSubject, setClass] = useState("");
    const [teacherContactNo, setContactNo] = useState("");
    const [teacherGender, setGender] = useState("");
    const [teacherJoiningDate, setJoiningDate] = useState("");
    const [addresss, setParentName] = useState("");
   
    function saveUser(){
      console.warn({
        teacherName, teacherDOB, teacherSubject, teacherContactNo,teacherGender,teacherJoiningDate, addresss
        });

      let data={teacherName, teacherDOB, teacherSubject, teacherContactNo,teacherGender,teacherJoiningDate, addresss}

      fetch("https://localhost:5001/api/Teacher", {
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
      <h3 style={{textAlign: "center"}}>Create New Teacher Details</h3>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}}   placeholder='Enter Name'  onChange={(e)=>{setName(e.target.value)}} value={teacherName} name="teacherName" />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}}   placeholder='Enter DOB' onChange={(e)=>{setDOB(e.target.value)}} value={teacherDOB} name="teacherDOB"  />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}}   placeholder='Enter Job Roles' onChange={(e)=>{setClass(e.target.value)}} value={teacherSubject} name="teacherSubject"  />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}}   placeholder='Enter Contact Number' onChange={(e)=>{setContactNo(e.target.value)}} value={teacherContactNo} name="teacherContactNo" />
      </div>
      <div className="mb-3">
          <input   type="text" style={{width: "350px"}}   placeholder='Enter Gender' onChange={(e)=>{setGender(e.target.value)}} value={teacherGender} name="teacherGender" />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}}   placeholder='Enter Date of Joining' onChange={(e)=>{setJoiningDate(e.target.value)}} value={teacherJoiningDate} name="teacherJoiningDate" />
      </div>
      <div className="mb-3">
          <input  type="text" style={{width: "350px"}}   placeholder='Enter Address' onChange={(e)=>{setParentName(e.target.value)}} value={addresss} name="addresss"  />
      </div>
      
      <button type="button" onClick={saveUser} className="btn btn-primary">Submit</button>
      </form>
              
  </div>
)
}
