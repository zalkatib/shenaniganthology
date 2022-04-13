import * as React from "react";
import NotionPage from "../components/NotionPage";
import { loadNotionContent } from "../utils/utils";
import styles from "../styles/App.module.css";

const Hackery: React.FC = () => {
  const tableId =
    "76e7706a62cd4e33981650a9bfea1264?v=6ea897791a8742229b30f3bfa4d4e5d7";

  const [tableLoaded, setTableLoaded] = React.useState(null);
  const [table, setTable] = React.useState(null);

  const loadTable = React.useCallback(() => {
    setTableLoaded(false);
    loadNotionContent("table", tableId)
      .then((res) => {
        setTable(res.data);
      })
      .finally(() => {
        setTableLoaded(true);
      });
  }, []);

  React.useEffect(() => {
    if (tableLoaded === null) loadTable();
  }, [table, tableLoaded, loadTable]);

  function pageList() {
    return (
      <div>
        {table.map(({ id }) => (
          <div key={id} className={styles.notionContent}>
            <NotionPage pageId={id} />
          </div>
        ))}
      </div>
    );
  }

  return (
    tableLoaded && (
      <div>
        <h1
          style={{
            borderBottom: "var(--color-hover) 1px dashed",
            margin: 0,
            padding: "10px",
          }}
        >
          failing early and often
        </h1>
        <div className={styles.hackeryContent}>
          <div style={{ borderRight: "var(--color-hover) 1px dashed" }}>
            <h2 style={{ marginBottom: 0, paddingRight: "50px" }}>
              in writing form. but with absolutely no helpful pagination or
              anything
            </h2>
            {table && pageList()}
          </div>
          <div>
            <h2>in project form. if there were projects to put here</h2>there
            aren't though
          </div>
        </div>
      </div>
    )
  );
};

export default Hackery;
