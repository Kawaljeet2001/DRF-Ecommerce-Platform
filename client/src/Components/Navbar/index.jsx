import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../logo.png";
import UserAvatar from "../UserAvatar";
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";

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
          <Link className="sign-in" to="/login">
            Sign In
          </Link>
        </div>
      ) : (
        <div className = "Avatar-cart-holder">
          <UserAvatar />
          <button className="my-cart">
            My Cart &nbsp;&nbsp;<span>4</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
