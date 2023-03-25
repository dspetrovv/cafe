import React from "react";
import withModalWrapper from "../../../_hocs/Modal/withModalWrapper";
import styles from './panel.module.scss';

const Panel = ({ label = 'Title', body, footer }) => {
  return (
    <div className={styles['panel']}>
      <div className={styles['panel__head']}>
        <h1>{ label }</h1>
      </div>
      <div className={styles['panel__body']}>
        { body }
      </div>
      <div className={styles['panel__footer']}>
        { footer }
      </div>
    </div>
  );
};

export default withModalWrapper(Panel);