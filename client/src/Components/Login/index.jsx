import React from "react";
import axios from "axios";
import "./Login.css";
import { Redirect } from "react-router";
import UserContext from "../../UserContext";

const Login = () => {
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");

  const {LoggedUser , UpdateUser } = React.useContext(UserContext);
  
  const [login_success, setlogginsuccess] = React.useState(false);

  function settokentosessionstorage(username , token)
  {
    var mylocalstorage = window.localStorage;

    // var object = {};
    // object[username] = token;
    mylocalstorage.setItem(username, JSON.stringify(token));

    mylocalstorage.setItem("currentlyLoggedUser" , username);
    
    console.log(mylocalstorage);
  }

  async function login() {
    try {
      var credentials = {
        username: username,
        password: password,
      };

      const res = await axios.post(
        `http://127.0.0.1:8000/accounts/token/`,
        credentials
      );
      UpdateUser(username);
      console.log(res.data);
      settokentosessionstorage(username , res.data)
      setlogginsuccess(res.data);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="Login">
      {login_success ? (
        <Redirect
          to={{
            pathname: "/search",
            
            state: { token : login_success , username : username },
          }} exact
        />
      ) : null}
      <h3>SIGN IN</h3>
      <input
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
        className="first"
        type="text"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        type="password"
        required
        placeholder="Password"
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
