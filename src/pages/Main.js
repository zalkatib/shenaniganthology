import React from "react";
import styles from "../styles/App.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>hello world</h1>

      <h3 className={styles.description}>🖋💻📚☕📸⛈</h3>

      <div className={styles.grid}>
        <Link
          to="/hackery"
          className={styles.card}
          style={{ textAlign: "right" }}
        >
          <h2>hackery</h2>
          <p>experiments and projects</p>
        </Link>
        {/* 
        <Link to="/studies" className={styles.card}>
          <h2>studies</h2>
          <p>attempts to do things</p>
        </Link> */}

        <Link to="/musings" className={styles.card}>
          <h2>musings</h2>
          <p>miscellany and miniutiae</p>
        </Link>
        {/* 
        <Link to="/pictures" className={styles.card}>
          <h2>pictures</h2>
          <p>probably lots of sunsets</p>
        </Link> */}
      </div>
    </main>
  );
};

export default Main;
