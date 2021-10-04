import {BrowserRouter as Router, useHistory} from "react-router-dom";
import React, { useState } from 'react'
// import { useHistory } from 'react'

function Login() {
    const history = useHistory(); 
    const handleHistory = ()=> {history.push("/home");
}
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })
function dothat(e){
    setData({...data, [e.target.name]:e.target.value});
}

console.log(data.name, data.email,data.password);
    return (
        <Router>
        <div className="login">
            <h2>Tey eCommerce</h2>
            <label>Name</label>
            <input
             type="text"
             name = "name"
             value = {data.name} 
             onChange = {dothat}
             placeholder = "Enter Name"/>
             <br />
             
             <label>Email</label>
             <input
              type="email"
              name = "email"
              value = {data.email}
              onChange = {dothat}
              placeholder = "Enter email" />
              <br />
              <label>Password</label>
              <input
              type="password"
              name = "password"
              value = {data.password}
              onChange = {dothat}
              placeholder = "Enter password" />
              <br />
              <button className = "btn" onClick = {handleHistory}>Login</button>
        </div>
        </Router>
    )
}

export default Login
