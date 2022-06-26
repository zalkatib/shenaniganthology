import * as React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useColorScheme } from "../utils/useColorScheme";
import styles from "./styles/ColorSchemeToggle.module.scss";

const ColorSchemeToggle: React.FC = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className={styles.container}>
      <Toggle
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode"
      />
    </div>
  );
};

export default ColorSchemeToggle;
