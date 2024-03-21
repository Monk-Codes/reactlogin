import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
 return (
  <footer className={styles.footer}>
   <div className={styles.footerContainer}>
    <div className={styles.footerColumn}>
     <h4>About Us</h4>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit, ante non varius hendrerit.</p>
    </div>
    <div className={styles.footerColumn}>
     <h4>Contact Us</h4>
     <ul>
      <li>Phone: 123-456-7890</li>
      <li>Email: info@example.com</li>
      <li>Address: 123 Main St, City, Country</li>
     </ul>
    </div>
    <div className={styles.footerColumn}>
     <h4>Services</h4>
     <ul>
      <li>Product A</li>
      <li>Product B</li>
      <li>Product C</li>
     </ul>
    </div>
   </div>
   <div className={styles.bottomBar}>
    <p>&copy; 2024 Your Company. All rights reserved.</p>
   </div>
  </footer>
 );
};

export default Footer;
