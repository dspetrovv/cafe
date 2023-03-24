import React from "react";
import Button from "../../../Buttons/Button";

const ProductModalTotal = ({ totalPrice }) => {
  return (
    <>
      <h2>Итого: { totalPrice } руб</h2>
      <span>400 г</span>
      <Button>
        Добавить
      </Button>
    </>
  );
};

export default ProductModalTotal;