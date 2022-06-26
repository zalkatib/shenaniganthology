import * as React from "react";
import styles from "./styles/GridItem.module.scss";

interface GridItemProps {
  header: string;
  collapsed: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ header, collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className={isCollapsed ? styles.arrowRight : styles.arrowDown} />
        <h2>{header}</h2>
      </div>
      <div
        className={
          isCollapsed ? styles.contentCollapsed : styles.contentExpanded
        }
      >
        {children}
      </div>
    </div>
  );
};

export default GridItem;
