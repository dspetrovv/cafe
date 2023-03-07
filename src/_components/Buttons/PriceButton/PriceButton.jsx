import React from "react";
import Button from "../Button";
import styles from './price-button.module.scss';

const CURRENCY_SYMBOL = [
  { name: 'rub', symbol: '₽' },
  { name: 'eur', symbol: '€' },
  { name: 'usd', symbol: '$' },
];

const PriceButton = ({ price, currency = 'rub', onClick }) => {
  const currencySymbol = CURRENCY_SYMBOL.find((symbol) => symbol.name === currency).symbol;

  return (
    <Button className={styles['price-button']} onClick={onClick}>
      от {price} {currencySymbol}
    </Button>
  );
};

export default PriceButton;