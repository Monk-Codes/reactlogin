import React, { useState } from "react";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [signupSuccess, setSignupSuccess] = useState(false);

 const signupFormHandler = (event) => {
  event.preventDefault();

  // Simulate saving signup details to backend (Replace this with your actual backend logic)
  saveSignupDetails(username, password);

  // Set signup success state
  setSignupSuccess(true);
 };

 const saveSignupDetails = (username, password) => {
  // Here you would make a request to your backend API to save the signup details
  console.log("Saving signup details:", username, password);
  // Simulated backend save (replace with actual API call)
  // For simplicity, we're just logging the details to the console
 };

 return (
  <div className={styles.signupFormContainer}>
   <h1>Signup</h1>
   {signupSuccess ? (
    <p>Signup successful! You can now login.</p>
   ) : (
    <form onSubmit={signupFormHandler}>
     <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
     <input type="submit" value="Submit" />
    </form>
   )}
  </div>
 );
};

export default SignupForm;
