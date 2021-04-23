import React from 'react'
import "./Login.css";

const Login = () => {
    return (
        <div className ="Login">
            <h3>SIGN IN</h3>
            <input className = "first" type = "text" placeholder = "Username" />
            <input type = "password" required placeholder = "Password"/>
            <button>Login</button>            
        </div>
    )
}

export default Login
