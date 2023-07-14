import React from 'react';
import Button from '@/_components/Buttons/Button';

const PizzaModalTotal = ({ totalPrice, onSelectPizza }) => {
  return (
    <>
      <h2>Итого: {totalPrice} ₽</h2>
      <Button onClick={onSelectPizza}>Добавить</Button>
    </>
  );
};

export default PizzaModalTotal;
