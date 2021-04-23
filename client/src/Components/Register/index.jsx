import React from 'react'
import "./Register.css";

const Register = () => {
    return (
        <div className = "Register">
            <h3>SIGN UP</h3>
            <input className = "first" type = "text" placeholder = "Username" />
            <input type = "password" required placeholder = "Password"/>
            <button>Sign Up</button>
        </div>
    )
}

export default Register
