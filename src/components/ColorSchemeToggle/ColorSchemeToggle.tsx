import { FunctionComponent } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import styles from './ColorSchemeToggle.module.scss';

import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useColorScheme(): {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
} {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  );

  const [isDark, setIsDark] = useState(false);

  const value = useMemo(() => (isDark === undefined ? !!systemPrefersDark : isDark), [isDark, systemPrefersDark]);

  useEffect(() => {
    if (value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}

export const ColorSchemeToggle: FunctionComponent = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className={styles.container}>
      <Toggle
        checked={isDark}
        onChange={event => setIsDark(event.target.checked)}
        icons={{ checked: '🌙', unchecked: '🔆' }}
        aria-label='Dark mode'
      />
    </div>
  );
};
