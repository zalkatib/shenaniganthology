import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./assets/duck.svg";
import Hackery from "./pages/Hackery";
import Main from "./pages/Main";
import Musings from "./pages/Musings";
import styles from "./styles/App.module.css";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Router basename="/shenaniganthology">
      <div className={styles.container}>
        <NavBar />
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
      <footer className={styles.footer}>
        <img className={styles.ducklogo} src={logo} alt={"duck"} width={100} />
      </footer>
    </Router>
  );
};
export default App;
