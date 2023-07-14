import React from 'react';
import withModalWrapper from '@/_hocs/Modal/withModalWrapper';
import styles from './panel.module.scss';

const Panel = ({ label = 'Title', body, footer, isOpen }) => {
  const className = `${styles.panel}${
    !isOpen ? ` ${styles.panel_hidden}` : ''
  }`;

  return (
    <div className={className} onClick={(e) => e.stopPropagation()}>
      <div className={styles['panel__head']}>
        <h1>{label}</h1>
      </div>
      <div className={styles['panel__body']}>{body}</div>
      <div className={styles['panel__footer']}>{footer}</div>
    </div>
  );
};

export default withModalWrapper(Panel);
