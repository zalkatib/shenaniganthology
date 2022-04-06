import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./assets/duck.svg";
import ColorSchemeToggle from "./components/ColorSchemeToggle";
import Hackery from "./pages/Hackery";
import Main from "./pages/Main";
import Musings from "./pages/Musings";
import styles from "./styles/App.module.css";

const App: React.FC = () => {
  return (
    <Router basename="/shenaniganthology">
      <div className={styles.container}>
        <ColorSchemeToggle />
        <div className={styles.main}>
          <Switch>
            <Route key={0} exact path="/">
              <Main />
            </Route>
            <Route key={1} path="/hackery">
              <Hackery />
            </Route>
            <Route key={3} path="/musings">
              <Musings />
            </Route>
          </Switch>
        </div>
      </div>
      <footer className={styles.footer}>
        <img className={styles.ducklogo} src={logo} alt={"duck"} width={100} />
      </footer>
    </Router>
  );
};
export default App;
