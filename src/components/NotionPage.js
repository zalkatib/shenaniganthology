import React, { useEffect } from "react";
import { loadNotionContent } from "../utils/utils";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";

const NotionPage = ({ pageId }) => {
  const [loading, setLoading] = React.useState(null);
  const [page, setPage] = React.useState(null);

  const loadPage = React.useCallback(() => {
    setLoading(true);
    loadNotionContent('page', pageId)
      .then((res) => {
        console.log(res);
        setPage(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageId]);

  useEffect(() => {
    if (loading === null) loadPage();
  }, [loading, loadPage]);

  return (
    <div className="content">{page && <NotionRenderer blockMap={page} />}</div>
  );
};

export default NotionPage;
