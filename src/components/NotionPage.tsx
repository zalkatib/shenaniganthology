import * as React from "react";
import { loadNotionContent } from "../utils/utils";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import styles from "./styles/NotionPage.module.scss";
import hljs from "highlight.js";

const NotionPage: React.FC<{ pageId }> = ({ pageId }) => {
  const [loading, setLoading] = React.useState(null);
  const [page, setPage] = React.useState(null);

  const loadPage = React.useCallback(() => {
    setLoading(true);
    loadNotionContent("page", pageId)
      .then((res) => {
        console.log(res);
        setPage(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageId]);

  React.useEffect(() => {
    if (loading === null) loadPage();
  }, [loading, loadPage]);

  return (
    <div className={styles.container}>
      {hljs.highlightAll()}
      {page && <NotionRenderer blockMap={page} />}
    </div>
  );
};

export default NotionPage;
