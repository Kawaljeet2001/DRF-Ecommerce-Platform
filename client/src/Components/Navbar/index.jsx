import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../logo.png";
import UserAvatar from "../UserAvatar";
import UserContext from "../../UserContext";
import {Link} from "react-router-dom";

const Navbar = () => {
  const { LoggedUser } = useContext(UserContext);

  return (
    <div className="Navbar">
      <div className="logo-holder">
        <img src={logo} />
      </div>
      <div className="search">
        <input type="Text" placeholder="Search" />
        <button>
          <i className="fa fa-lg fa-search" aria-hidden="true"></i>
        </button>
      </div>

      {!LoggedUser ? (
        <div className="cart-auth-controls">
          <Link className="sign-in" to = "/login">Sign In</Link>
          {/* <button className="sign-in">Sign in</button>
          <button className="sign-up">Sign up</button> */}
          <button className="my-cart">
            My Cart &nbsp;&nbsp;<span>4</span>
          </button>
        </div>
      ) : (
        <UserAvatar />
      )}
    </div>
  );
};

export default Navbar;
