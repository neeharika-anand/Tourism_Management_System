import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TourButton from './TourButton';

function GuideLogin({ onGuideLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const login = () => {
    axios.post("http://localhost:8080/guide-login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus("Invalid email or password");
      } else if (response.data.err) {
        setLoginStatus("Error occurred, check console.");
      } else {
        const guideData = response.data.rows[0];
        onGuideLogin(email, guideData);
         // Call onGuideLogin function with email when login is successful
        setLoginStatus("Successfully logged in as " + email);
        navigate("/guide-home")
      }
    });
  }

  useEffect(() => {
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
  });

  return (
    <div className="App">
      <div className="login">
        <h1>Login as Guide</h1>
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
        <TourButton onClick={login}>Login</TourButton>
        <br />
        <br />
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default GuideLogin;