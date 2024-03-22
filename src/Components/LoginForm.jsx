// LoginForm.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css"; // Import CSS module

export default function LoginForm() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate();

 const login = (e) => {
  e.preventDefault();
  setError(""); // Reset any previous error message
  // Perform login logic here, for example, validating credentials
  if (username === "admin" && password === "admin") {
   // Simulating successful login
   navigate("/dashboard"); // Redirect to dashboard page
  } else {
   setError("Invalid username or password"); // Set error message
  }
 };

 return (
  <div className={styles.loginFormContainer}>
   {" "}
   <h2>Login</h2>
   <form onSubmit={login}>
    <input type="text" name="Username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.inputField} />
    <input type="password" name="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} />
    <input type="submit" value="Login" className={styles.submitButton} />
   </form>
   {error && <p className={styles.errorMessage}>{error}</p>}
  </div>
 );
}
