import * as React from "react";
import { Link } from "react-router-dom";
import { loadNotionContent } from "../../utils/utils";
import styles from "./styles/NotionTable.module.scss";

interface NotionTableProps {
  tableId: string;
  origin: string;
}

const NotionTable: React.FC<NotionTableProps> = ({ tableId, origin }) => {
  const [loadingTable, setLoadingTable] = React.useState(null);
  const [table, setTable] = React.useState(null);

  const loadTable = React.useCallback(() => {
    setLoadingTable(true);
    loadNotionContent("table", tableId)
      .then((res) => {
        setTable(res.data);
      })
      .finally(() => {
        setLoadingTable(false);
      });
  }, [tableId]);

  React.useEffect(() => {
    if (loadingTable === null) loadTable();
  }, [table, loadingTable, loadTable]);

  //put a collapsible list here
  return (
    table && (
      <div className={styles.notionTable}>
        {table.map((item) => (
          <Link
            to={{
              pathname: `/page/${item.name.replaceAll(" ", "-")}`,
              state: {
                pageId: item.id,
              },
            }}
          >
            <div className={styles.tableItem}>{item.name}</div>
          </Link>
        ))}
      </div>
    )
  );
};

export default NotionTable;
