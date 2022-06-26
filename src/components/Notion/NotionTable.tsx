import * as React from "react";
import NotionPage from "./NotionPage";
import { loadNotionContent } from "../../utils/utils";
import styles from "./styles/NotionTable.module.css";
import GridItem from "../GridItem";

interface NotionTableProps {
  tableId: string;
}

const NotionTable: React.FC<NotionTableProps> = ({ tableId }) => {
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
  }, [tableId]);

  React.useEffect(() => {
    if (loadingTable === null) loadTable();
  }, [table, loadingTable, loadTable]);
  //put a collapsible list here
  return (
    table && (
      <div className={styles.notionTable}>
        {table.map((item) => (
          <GridItem key={item.id} header={item.name} collapsed>
            <NotionPage pageId={item.id} />
          </GridItem>
        ))}
      </div>
    )
  );
};

export default NotionTable;
