import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
 return (
  <div className={styles.contactContainer}>
   <h1>Contact Us</h1>
   <p>Email: example@example.com</p>
   <p>Phone: +1 234 567 890</p>
  </div>
 );
};

export default Contact;
