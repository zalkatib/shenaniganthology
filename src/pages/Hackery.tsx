import * as React from "react";
import NotionTable from "../components/Notion/NotionTable";
import styles from "./styles/Hackery.module.css";

const Hackery: React.FC = () => {
  const tableId =
    "76e7706a62cd4e33981650a9bfea1264?v=6ea897791a8742229b30f3bfa4d4e5d7";

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1
          style={{
            borderBottom: "var(--color-hover) 1px dashed",
          }}
        >
          failing early and often
        </h1>
        {/* <h2 style={{ marginBottom: 0 }}>
          in writing form. but with absolutely no helpful pagination or anything
        </h2> */}
        <NotionTable tableId={tableId} />
      </div>
      {/* <div>
            <h2>in project form. if there were projects to put here</h2>there
            aren't though
          </div> */}
      {/* <div className={styles.notContent}></div> */}
    </div>
  );
};

export default Hackery;
