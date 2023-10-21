import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import duck from '../../assets/duck2.svg';
import lemonade from '../../assets/lemonadeStand.png';

import styles from './LemonadeStand.module.scss';

export const LemonadeStand: FunctionComponent = () => {
  const [left, setLeft] = useState(80);
  const [duckAtLemonadeStand, setDuckAtLemonadeStand] = useState(false);
  const [grapes, setGrapes] = useState(false);
  const [direction, setDirection] = useState('left');

  useEffect(() => {
    if (duckAtLemonadeStand) {
      setGrapes(true);
    } else setGrapes(false);
  }, [duckAtLemonadeStand, setGrapes]);

  useEffect(() => {
    if (left <= 0) {
      setDuckAtLemonadeStand(true);
    } else setDuckAtLemonadeStand(false);
  }, [left, setDuckAtLemonadeStand]);

  const moveLeft = useCallback(() => {
    setLeft(left - 5);
    setDirection('left');
  }, [left, setLeft]);

  const moveRight = useCallback(() => {
    setLeft(left + 5);
    setDirection('right');
  }, [left, setLeft]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        moveLeft();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        moveRight();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [moveLeft, moveRight]);

  return (
    <div className={styles.container}>
      <div className={styles.path}>
        <img src={lemonade} className={styles.lemonade} style={{ position: 'relative', left: 0 }} />
        <img
          src={duck}
          style={{ left: `${left}vw` }}
          className={classNames(styles.duck, {
            [styles.transformX]: direction === 'right',
          })}
        />
      </div>
      <div className={styles.grapes}>{grapes ? 'got any grapes?' : ''}</div>
    </div>
  );
};
