import React from "react";
import Button from "@/_components/Buttons/Button";

const PizzaModalTotal = ({ totalPrice }) => {
  return (
    <>
      <h2>Итого: { totalPrice } ₽</h2>
      <Button>
        Добавить
      </Button>
    </>
  );
};

export default PizzaModalTotal;