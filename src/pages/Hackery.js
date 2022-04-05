import React, { useEffect } from "react";
import NotionPage from "../components/NotionPage";
import { loadNotionContent } from "../utils/utils";
import styles from "../styles/App.module.css";

const Hackery = () => {
  const tableId =
    "76e7706a62cd4e33981650a9bfea1264?v=6ea897791a8742229b30f3bfa4d4e5d7";

  const [loadingTable, setLoadingTable] = React.useState(null);
  const [loadingPages, setLoadingPages] = React.useState(null);
  const [table, setTable] = React.useState(null);
  const [pages, setPages] = React.useState([]);

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

  const loadPages = React.useCallback(() => {
    setLoadingPages(true);
    table.forEach((element) => {
      pages.push(loadNotionContent("page", element.id).then((res) => res.data));
    });
    setLoadingPages(false);
  }, [table, pages]);

  useEffect(() => {
    if (loadingTable === null) loadTable();
    if (table && loadingPages === null) {
      loadPages();
    }
  }, [table, loadingTable, loadingPages, loadTable, loadPages]);

  function pageList() {
    console.log(table);
    console.log(pages);
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
  );
};

export default Hackery;
