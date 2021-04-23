import React from 'react'
import Login from "../../Components/Login";
import "./LoginRegisterPage.css";
import Register from "../../Components/Register";
import {Redirect} from "react-router-dom";
import UserContext from "../../UserContext";

const LoginRegisterPage = () => {
    const {LoggedUser , UpdateUser} = React.useContext(UserContext);
    React.useEffect(() => {
    document.getElementsByClassName("Navbar")[0].style.display = "none";
    } , [])

    React.useEffect(() => {
        console.log(LoggedUser);
      } , [])
    return (
        <div className = "LoginRegister">
            {
                LoggedUser ? <Redirect to = {{pathname : "/search" }} /> : null
            }
            <Login/>            
            <div className = "seperator"></div>
            <Register/>
        </div>
    )
}

export default LoginRegisterPage
