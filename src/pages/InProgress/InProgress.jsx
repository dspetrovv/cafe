import React from 'react';
import styles from './in-progress.module.scss';

const title = 'Упс... Страница ещё не готова, но спешим изо всех сил ;)';

const InProgress = () => {
  // Можно в теории добавить красивую картинку, но это потом
  return <h1 className={styles['in-progress__title']}>{title}</h1>;
};

export default InProgress;
