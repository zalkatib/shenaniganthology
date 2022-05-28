import * as React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/App.module.css";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>

      <div>
        <Link to="/hackery">
          <h2>hackery 💻</h2>
          <p>experiments and projects</p>
        </Link>

        <Link to="/musings">
          <h2>🖋 musings</h2>
          <p>miscellany and miniutiae</p>
        </Link>
      </div>
    </main>
  );
};

export default Main;
