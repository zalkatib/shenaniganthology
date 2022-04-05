import React, { useEffect } from "react";
import { loadNotionContent } from "../utils/utils";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import styled from "styled-components";
import hljs from "highlight.js";

const Content = styled.div`
  .notion {
    color: var(--color-foreground) !important;
    font-size: 14px;
    a {
      color: var(--color-foreground);
    }
    .notion-code {
      background-color: var(--color-code-background);
      padding: 0;
      & code {
        padding: 20px;
      }
    }
    .notion-inline-code,
    .notion-inline-code .notion-link {
      color: var(--color-code-highlight) !important;
    }
  }
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

  return (
    <Content>
      {hljs.highlightAll()}
      {page && <NotionRenderer blockMap={page} />}
    </Content>
  );
};

export default NotionPage;
