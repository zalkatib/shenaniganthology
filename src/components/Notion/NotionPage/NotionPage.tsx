import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import hljs from 'highlight.js';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';

import { loadNotionContent } from '../utils';

import styles from './NotionPage.module.scss';

export const NotionPage: FunctionComponent = () => {
  const location = useLocation();
  const pageId = location.state.pageId;

  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(null);

  const loadPage = useCallback(() => {
    setLoading(true);
    loadNotionContent('page', pageId)
      .then(res => {
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
    <div className={styles.container}>
      {hljs.highlightAll()}
      {page && <NotionRenderer blockMap={page} />}
    </div>
  );
};
