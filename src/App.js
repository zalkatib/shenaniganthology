import logo from "./assets/duck.svg";
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hackery from "./pages/Hackery";
import Studies from "./pages/Studies";
import Main from "./pages/Main";
import Musings from "./pages/Musings";
import Pictures from "./pages/Pictures";
import React from "react";
import ColorSchemeToggle from "./components/ColorSchemeToggle";

function App() {
  return (
    <Router basename="/shenaniganthology">
      <div className={styles.container}>
        <div className={styles.main}>
          <ColorSchemeToggle />
          <Switch>
            <Route key={0} exact path="/">
              <Main />
            </Route>
            <Route key={1} path="/hackery">
              <Hackery />
            </Route>
            <Route key={2} path="/studies">
              <Studies />
            </Route>
            <Route key={3} path="/musings">
              <Musings />
            </Route>
            <Route key={4} path="/pictures">
              <Pictures />
            </Route>
          </Switch>
        </div>
      </div>
      <footer className={styles.footer}>
        <img className={styles.ducklogo} src={logo} alt={"duck"} width={100} />
      </footer>
    </Router>
  );
}
export default App;
