import React from 'react'
import { useState } from 'react';
export default function Login() {
    const mystyle = {
        textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"

      };
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    
    function saveUser(){
      console.warn({email, password});

    let data={email, password}

      fetch("https://localhost:5001/api/Register/signin", {
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
<h3 style={{textAlign: "center"}}>Login Page</h3>

        <form style={mystyle}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>{setemail(e.target.value)}} value={email} name="email" style={{width: "450px"}} type="email" class="form-control" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={(e)=>{setpassword(e.target.value)}} value={password} name="password" style={{width: "450px"}} type="password" class="form-control" />
  </div>
  <button onClick={saveUser} type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
