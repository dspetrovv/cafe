import React from 'react';
import styles from './error.module.scss';

const Error = () => {
  // Фотку красивую с 404 ошибкой
  return (
    <h1 className={styles.error__title}>Такой страницы не существует -_-</h1>
  );
};

export default Error;
