import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./assets/duck.svg";
import Hackery from "./pages/Hackery";
import Main from "./pages/Main";
import Musings from "./pages/Musings";
import styles from "./styles/App.module.css";
import NavBar from "./components/NavBar";
import NotionPage from "./components/Notion/NotionPage";

const App: React.FC = () => {
  return (
    <Router basename="/shenaniganthology">
      <div className={styles.container}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/hackery">
            <Hackery />
          </Route>
          <Route path="/:pageName" component={NotionPage} />
          <Route path="/musings">
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
