import React from 'react';
import Button from '../Button';
import styles from './price-button.module.scss';

// Если вообще будет возможность менять валюту, то текущую будем хранить в сторе.
const CURRENCY_SYMBOL = [
  { name: 'rub', symbol: '₽' },
  { name: 'eur', symbol: '€' },
  { name: 'usd', symbol: '$' },
];

const PriceButton = ({ price, onClick }) => {
  return (
    <Button className={styles['price-button']} onClick={onClick}>
      от {price} ₽
    </Button>
  );
};

export default PriceButton;
