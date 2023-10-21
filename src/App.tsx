import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './pages/Main';
import { LemonadeStand } from './pages/LemonadeStand';
import { NavBar } from './components/NavBar';

import logo from './assets/duck.svg';
import styles from './styles/App.module.scss';

export const App: FunctionComponent = () => {
  return (
    <Router basename='/shenaniganthology'>
      <div className={styles.container}>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/lemonadestand'>
            <LemonadeStand />
          </Route>
        </Switch>
      </div>
      <footer className={styles.footer}>
        <img className={styles.ducklogo} src={logo} alt={'duck'} width={100} />
      </footer>
    </Router>
  );
};
