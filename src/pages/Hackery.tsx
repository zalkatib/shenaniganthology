import * as React from "react";
import NotionTable from "../components/Notion/NotionTable";
import styles from "./styles/Hackery.module.css";

const Hackery: React.FC = () => {
  const tableId =
    "76e7706a62cd4e33981650a9bfea1264?v=6ea897791a8742229b30f3bfa4d4e5d7";

  //TODO: come up with a design for this page
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
        <h4>and here is the proof</h4>
        <NotionTable tableId={tableId} origin="hackery" />
      </div>
    </div>
  );
};

export default Hackery;
