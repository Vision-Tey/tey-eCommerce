import {BrowserRouter as Router, useHistory} from "react-router-dom";
import React, { useContext, useState } from 'react'
import { UserContext } from "../Components/UserContext";
// import { useHistory } from 'react'

export function Login() {
    const history = useHistory(); 
    const handleHistory = ()=> {history.push("/home");
}
 const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const [user, setUser] = useContext(UserContext);
function dothat(e){

    setData({...data, [e.target.name]:e.target.value});
}
const addUser = e => {
    e.preventDefault();
    setUser(()=>[{user:data.name}])
    history.push("/home")
}

console.log(data.name, data.email,data.password);
    return (
        // <Router>
       
             <form  className="login" >
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
              
              <button type="submit" className="btn"  onClick={addUser} 
              >Login</button>
              </form>
        
        // </Router>
    )
}

export default Login
