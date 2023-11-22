
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TourButton from './TourButton';
import './Login.css'


function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  
  const navigate = useNavigate();

  const login = () => {
    axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus("Invalid email or password");
      } else if (response.data.err) {
        setLoginStatus("Error occurred, check console.");
      } else {
        const userData = response.data.rows[0];
        onLogin(email, userData); // Call onLogin function with email when login is successful
        setLoginStatus("Successfully logged in as " + email);
        navigate("/")
      }
    });
  }
  useEffect(() => { // dont have to press button now, can just hit enter
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        login()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  } );

  return (
    <div className='outer'>
    <div className="loginapp" >
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password…"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <TourButton onClick={login} >Login</TourButton>
        <br />
        <br />
        <p>Haven't registered yet?</p>
        <TourButton onClick={() => navigate("/register")}>Sign Up</TourButton>
        <p>Are you a Guide?</p>
        <TourButton onClick={() => navigate("/guide-login")}>Login as Guide</TourButton>
      </div>
      <h1>{loginStatus}</h1>
    </div>
    </div>
  );
}

export default Login;

