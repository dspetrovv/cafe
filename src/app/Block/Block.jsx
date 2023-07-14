import React, { memo } from 'react';
import styles from './block.module.scss';
import { Link } from 'react-router-dom';
import { useWindowSize } from './useWindowSize';

const Block = () => {
  const width = useWindowSize();

  if (width < 960) {
    return (
      <div className={styles.block}>
        <h1>
          Упс! Похоже, ваш экран не подходит для работы с приложением. Загрузите
          наше мобильное приложение:
        </h1>
        <h3>
          <Link to="#">Тык</Link>
        </h3>
      </div>
    );
  }
  return false;
};

export default memo(Block);
