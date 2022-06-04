import * as React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import ColorSchemeToggle from "./ColorSchemeToggle";

const NavBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <ColorSchemeToggle />
      <h1 className={styles.title}>
        <Link to="/">hello world</Link>
      </h1>
      <div className={styles.links}>
        <Link to="/hackery">hackery</Link>
        <Link to="/musings">musings</Link>
      </div>
    </div>
  );
};

export default NavBar;
