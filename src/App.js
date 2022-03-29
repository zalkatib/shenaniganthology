import logo from "./assets/duck.svg";
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hackery from "./pages/Hackery";
import Studies from "./pages/Studies";
import Main from "./pages/Main";
import Musings from "./pages/Musings";
import Pictures from "./pages/Pictures";
import React from "react";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.main}>
          <Switch>
            <Route exact path="/shenaniganthology/">
              <Main />
            </Route>
            <Route path="/shenaniganthology/hackery">
              <Hackery />
            </Route>
            <Route path="/shenaniganthology/studies">
              <Studies />
            </Route>
            <Route path="/shenaniganthology/musings">
              <Musings />
            </Route>
            <Route path="/shenaniganthology/pictures">
              <Pictures />
            </Route>
          </Switch>
        </div>
      </div>
      <footer className={styles.footer}>
        <img className={styles.ducklogo} src={logo} width={80} />
      </footer>
    </Router>
  );
}
export default App;
