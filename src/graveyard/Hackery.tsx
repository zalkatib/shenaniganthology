import { FunctionComponent } from 'react';
import NotionTable from '../components/Notion/NotionTable/NotionTable';
import styles from './styles/Hackery.module.css';

const Hackery: FunctionComponent = () => {
  const tableId = process.env.REACT_APP_NOTION_HACKERY_TABLE_ID;

  //TODO: come up with a design for this page
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1
          style={{
            borderBottom: 'var(--color-hover) 1px dashed',
          }}>
          failing early and often
        </h1>
        <h4>and here is the proof</h4>
        <NotionTable tableId={tableId} origin='hackery' />
      </div>
    </div>
  );
};

export default Hackery;
