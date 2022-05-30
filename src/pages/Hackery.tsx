import * as React from "react";
import NotionPage from "../components/NotionPage";
import { loadNotionContent } from "../utils/utils";
import styles from "../styles/Hackery.module.css";

const Hackery: React.FC = () => {
  const tableId =
    "76e7706a62cd4e33981650a9bfea1264?v=6ea897791a8742229b30f3bfa4d4e5d7";

  const [loadingTable, setLoadingTable] = React.useState(null);
  const [table, setTable] = React.useState(null);

  const loadTable = React.useCallback(() => {
    setLoadingTable(true);
    loadNotionContent("table", tableId)
      .then((res) => {
        console.log(res);
        setTable(res.data);
      })
      .finally(() => {
        setLoadingTable(false);
      });
  }, []);

  React.useEffect(() => {
    if (loadingTable === null) loadTable();
  }, [table, loadingTable, loadTable]);

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
    table && (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1
            style={{
              borderBottom: "var(--color-hover) 1px dashed",
            }}
          >
            failing early and often
          </h1>
          <h2 style={{ marginBottom: 0 }}>
            in writing form. but with absolutely no helpful pagination or
            anything
          </h2>
          {pageList()}
        </div>
        {/* <div>
            <h2>in project form. if there were projects to put here</h2>there
            aren't though
          </div> */}
        <div className={styles.notContent} />
      </div>
    )
  );
};

export default Hackery;
