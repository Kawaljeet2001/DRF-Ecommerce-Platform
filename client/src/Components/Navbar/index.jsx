import React from 'react'
import "./Navbar.css";
import logo from "../../logo.png";

const index = () => {
    return (
        <div className = "Navbar">
            <div className = "logo-holder">
                <img src = {logo}/>
            </div>
            <div className = "search">
                <input type = "Text" placeholder = "Search"/>
                <button><i className="fa fa-lg fa-search" aria-hidden="true"></i></button>
            </div>
            <div className = "cart-auth-controls">
                <button className = "sign-in">Sign in</button>
                <button className = "sign-up">Sign up</button>
                <button className = "my-cart">My Cart &nbsp;&nbsp;<span>4</span></button>
            </div>
        </div>
    )
}

export default index
