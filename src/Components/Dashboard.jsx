// Dashboard.js

import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
 return (
  <div className={styles.dashboardContainer}>
   <h1>Dashboard</h1>
   <div className={styles.card}>
    <h2>Account Balance</h2>
    <p>$5000</p>
   </div>
   <div className={styles.card}>
    <h2>Expenses</h2>
    <p>$1000</p>
   </div>
   <div className={styles.card}>
    <h2>Income</h2>
    <p>$2000</p>
   </div>
  </div>
 );
};

export default Dashboard;
