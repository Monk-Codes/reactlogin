import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";

export default function Welcome() {
 const navigate = useNavigate();

 const handleClick = () => {
  console.log("clicked");
  navigate("/login"); // Redirect to the login page
 };

 return (
  <div className={styles.welcomeContainer}>
   <h1 className={styles.welcomeHeading}>Welcome</h1>
   <p className={styles.welcomeText}>This is a simple login page</p>
   <hr className={styles.welcomeHr} />
   <button className={styles.loginButton} onClick={handleClick}>
    Login
   </button>
  </div>
 );
}
