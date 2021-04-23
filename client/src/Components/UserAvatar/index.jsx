import React from "react";
import "./UserAvatar.css";
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";
const UserAvatar = () => {
  const { LoggedUser } = React.useContext(UserContext);

  function printname(str) {
    var firstchar = str[0];
    return firstchar.toUpperCase();
  }

  function logoutuser() {
    var mylocalstorage = window.localStorage;
    mylocalstorage.setItem("currentlyLoggedUser", "");
  }

  function displayuserdetails(){
      var div = document.getElementsByClassName("userDetails")[0];

      if(div.style.display === "flex")
      div.style.display = "none";

      else
      div.style.display = "flex";
        
  }
  return (
    <div className="UserAvatar">
      <div className="UserAvatar-inner" onClick = {displayuserdetails}>
        <p>{LoggedUser ? printname(LoggedUser) : null}</p>
      </div>
      <div className="userDetails">
          <Link className = "profile">Profile</Link>
        <a href="/" onClick={logoutuser}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default UserAvatar;
