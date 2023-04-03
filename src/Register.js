import React from 'react'
import { useState } from 'react';
export default function Register() {
    const mystyle = {
        textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
      };
      const [userName, setName] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [password, setpassword] = useState("");
    const [conformpassword, setcpassword] = useState("");
    
    function saveUser(){
      console.warn({userName, email, mobile, password, conformpassword});

    let data={userName, email, mobile, password,conformpassword}

      fetch("https://localhost:5001/api/Register", {
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
      }).then((result)=>{
          result.json().then((resp)=>{

              console.log("resp",resp);
          })
      })
  } 
  return (
    
    <div>
<h3 style={{textAlign: "center"}}>Register Page</h3>

        <form style={mystyle}>
  <div class="mb-3">
    <label  class="form-label">Full Name</label>
    <input onChange={(e)=>{setName(e.target.value)}} value={userName} name="userName" style={{width: "450px"}}  type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label class="form-label">Email Number</label>
    <input onChange={(e)=>{setemail(e.target.value)}} value={email} name="email" style={{width: "450px"}}  type="email" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Mobile address</label>
    <input onChange={(e)=>{setmobile(e.target.value)}} value={mobile} name="mobile" style={{width: "450px"}}  type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input onChange={(e)=>{setpassword(e.target.value)}} value={password} name="password" style={{width: "450px"}}  type="password" class="form-control"   />
  </div>
  <div class="mb-3">
    <label  class="form-label">Conform Password</label>
    <input onChange={(e)=>{setcpassword(e.target.value)}} value={conformpassword} name="conformpassword" style={{width: "450px"}}  type="password" class="form-control"  />
  </div>
  <button onClick={saveUser} type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
