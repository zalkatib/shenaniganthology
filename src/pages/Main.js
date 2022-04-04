import React from "react";
import styles from "../styles/App.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>hello world</h1>

      <h4 className={styles.description}>
        far too much symmetry happening here
      </h4>

      <div className={styles.grid}>
        <Link
          to="/hackery"
          className={styles.card}
          style={{ textAlign: "right" }}
        >
          <h2>hackery 💻</h2>
          <p>experiments and projects</p>
        </Link>

        <Link to="/musings" className={styles.card}>
          <h2>🖋 musings</h2>
          <p>miscellany and miniutiae</p>
        </Link>
      </div>
    </main>
  );
};

export default Main;
