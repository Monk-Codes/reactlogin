// SignupForm.js

import React from "react";
import styles from "./SignupForm.module.css";

const SignupForm = (props) => {
 const signupFormHandler = (event) => {
  event.preventDefault();
  console.log("signup form clicked");
  props.history.push("/login");
  props.history.push("/signup");
  props.history.push("/home");
 };

 return (
  <div className={styles.signupFormContainer}>
   <h1>Signup</h1>
   <form>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <input type="submit" value="Submit" onClick={signupFormHandler} />
   </form>
  </div>
 );
};

export default SignupForm;
