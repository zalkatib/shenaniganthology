import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { loadNotionContent } from '../utils';

import styles from './NotionTable.module.scss';

interface NotionTableProps {
  tableId: string;
  origin: string;
}

const NotionTable: FunctionComponent<NotionTableProps> = ({ tableId, origin }) => {
  const [loadingTable, setLoadingTable] = useState(null);
  const [table, setTable] = useState(null);

  const loadTable = useCallback(() => {
    setLoadingTable(true);

    loadNotionContent('table', tableId)
      .then(res => {
        setTable(res.data);
      })
      .finally(() => {
        setLoadingTable(false);
      });
  }, [tableId]);

  useEffect(() => {
    if (loadingTable === null) loadTable();
  }, [table, loadingTable, loadTable]);

  //put a collapsible list here
  return (
    table && (
      <div className={styles.notionTable}>
        {table.map(item => (
          <Link
            to={{
              pathname: `/page/${item.name.replaceAll(' ', '-')}`,
              state: {
                pageId: item.id,
              },
            }}>
            <div className={styles.tableItem}>{item.name}</div>
          </Link>
        ))}
      </div>
    )
  );
};

export default NotionTable;
