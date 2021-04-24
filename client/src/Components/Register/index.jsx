import React from 'react'
import "./Register.css";
import UserContext from "../../UserContext";
import axios from "axios";
import { Redirect } from 'react-router';

const Register = () => {
    const [username, setusername] = React.useState("");
    const [password, setpassword] = React.useState("");
    const {UpdateUser } = React.useContext(UserContext);
    const [succesloggedin , setsuccesloggedin] = React.useState(false);
    function setlocalstorage(data)
    {
        var mylocalstorage = window.localStorage;
        console.log({"access" : data.access , "refresh" : data.refresh});
        mylocalstorage.setItem(data.username , JSON.stringify({"access" : data.access , "refresh" : data.refresh}))
        UpdateUser(data.username)
        
        mylocalstorage.setItem("currentlyLoggedUser" , data.username);
    }
    async function RegisterUser()
    {
        var credentialobject = {
            "username" : username,
            "password" : password
        }
        try{
            const res = await axios.post("http://127.0.0.1:8000/accounts/register" , credentialobject)
            setlocalstorage(res.data);
            setsuccesloggedin(true);
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div className = "Register">
            {succesloggedin ? <Redirect to = "/search" exact />: null}
            <h3>SIGN UP</h3>
            <input value = {username} onChange = {(e)=>setusername(e.target.value)} className = "first" type = "text" placeholder = "Username" />
            <input value = {password} onChange = {(e)=>setpassword(e.target.value)} type = "password" required placeholder = "Password"/>
            <button onClick = {RegisterUser}>Sign Up</button>
        </div>
    )
}

export default Register
