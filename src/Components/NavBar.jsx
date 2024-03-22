import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.css"; // Importing CSS module

export default function NavBar() {
 return (
  <>
   <div className={styles.navContainer}>
    <h1 className={styles.navHeading}>Nav</h1>
    <Link className={styles.navLink} to="/signup">
     Signup
    </Link>
    <Link className={styles.navLink} to="/login">
     Login
    </Link>
    <Link className={styles.navLink} to="/">
     Home
    </Link>
    <Link className={styles.navLink} to="/about">
     About
    </Link>
    <Link className={styles.navLink} to="/contact">
     Contact
    </Link>
    <Link className={styles.navLink} to="/dashboard">
     Dashboard
    </Link>
    <Link className={styles.navLink} to="/admin">
     Admin
    </Link>
    <Link className={styles.navLink} to="/logout">
     Logout
    </Link>
   </div>
   <Outlet />
  </>
 );
}
