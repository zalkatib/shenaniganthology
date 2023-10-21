import { FunctionComponent, useState } from 'react';

import styles from './Collapse.module.scss';

interface CollapseProps {
  header: string;
  collapsed: boolean;
}

export const Collapse: FunctionComponent<CollapseProps> = ({ header, collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className={isCollapsed ? styles.arrowRight : styles.arrowDown} />
        <h2>{header}</h2>
      </div>
      <div className={isCollapsed ? styles.contentCollapsed : styles.contentExpanded}>{children}</div>
    </div>
  );
};
