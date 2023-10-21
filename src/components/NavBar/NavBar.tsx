import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { ColorSchemeToggle } from '../ColorSchemeToggle';

import styles from './NavBar.module.scss';

export const NavBar: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <ColorSchemeToggle />
      <h1 className={styles.title}>
        <Link to='/'>hello world</Link>
      </h1>
      <div className={styles.links}>
        <Link to='/lemonadestand'>lemonade stand</Link>
      </div>
    </div>
  );
};
