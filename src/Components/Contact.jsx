import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
 return (
  <div className={styles.contactContainer}>
   <h1>Contact Us</h1>
   <p>
    <span>Mail: </span>
    <a href="mailto:monkcodesdev@gmail.com">monkcodesdev@gmail.com</a>
   </p>
   <p>
    <span>Phone: </span>
    +91 8961894629
   </p>
  </div>
 );
};

export default Contact;
