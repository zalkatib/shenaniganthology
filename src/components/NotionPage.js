import React, { useEffect } from "react";
import { loadNotionContent } from "../utils/utils";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import styled from "styled-components";

const Content = styled.div`
  .notion {
    color: var(--color-foreground) !important;
    a {
      color: var(--color-foreground) !important;
    }
  }
  .notion-code {
    background-color: var(--color-code) !important;
  }
  font-size: 300px;
`;

const NotionPage = ({ pageId }) => {
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

  useEffect(() => {
    if (loading === null) loadPage();
  }, [loading, loadPage]);

  return <Content>{page && <NotionRenderer blockMap={page} />}</Content>;
};

export default NotionPage;
