import React from 'react'
import Login from "../../Components/Login";
import "./LoginRegisterPage.css";
import Register from "../../Components/Register";


const LoginRegisterPage = () => {
    React.useEffect(() => {
    document.getElementsByClassName("Navbar")[0].style.display = "none";
    } , [])
    return (
        <div className = "LoginRegister">
            <Login/>            
            <div className = "seperator"></div>
            <Register/>
        </div>
    )
}

export default LoginRegisterPage
