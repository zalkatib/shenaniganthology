import React , {useEffect} from "react";
import NotionPage from "../components/NotionPage";
import { loadNotionContent } from "../utils/utils";
import styles from '../styles/App.module.css'

const Hackery = () => {
  const tableId = "76e7706a62cd4e33981650a9bfea1264?v=6ea897791a8742229b30f3bfa4d4e5d7";

  const [loading, setLoading] = React.useState(null);
  const [table, setTable] = React.useState(null);
  
  const loadTable = React.useCallback(() => {
    setLoading(true);
    loadNotionContent('table', tableId)
      .then((res) => {
        console.log(res);
        setTable(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading === null) loadTable();
  }, [loading, loadTable]);


  function pageList() {
    return (
      <div>
        {table.map(({ id }) => (
        <div key={id} className={styles.notionContent} >
          <NotionPage  pageId={id}/>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.hackeryContent}>
      <h2 style={{ borderBottom: "#005a83 2px dashed", marginBottom: 0}}>failing early and often</h2>
     {table && pageList()}
    </div>
  );
};

export default Hackery;
