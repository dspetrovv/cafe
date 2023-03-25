import React from "react";
import Button from "../../Buttons/Button";
import MiniProductCard from "../../Cards/MiniProductCard";
import Panel from "../Panel";
import styles from './order-panel.module.scss';

const mockProducts = [
  { id: 1, name: 'Product-1', info: 'Традиционное тесто, 23 см', price: 300 },
  { id: 2, name: 'Product-2', info: 'Тонкое тесто, 20 см', price: 500 }
];

const OrderPanel = ({ products = mockProducts, totalPrice, isOpen, toggleIsOpen, onChange, accept }) => {
  const PanelBody = products.map((product) => 
    <MiniProductCard
      key={product.id}
      id={product.id}
      name={product.name}
      info={product.info}
      price={product.price}
      onChange={onChange}
      short
    />
  );

  const PanelFooter =
    <>
      <h3 className={styles['order__footer-total']}>Итого: { totalPrice } руб</h3>
      <Button className={styles['order__footer-button']} onClick={accept}>Оформить заказ</Button>
    </>

  return (
    <Panel
      label='Ваш заказ'
      body={PanelBody}
      footer={PanelFooter}
      isOpen={isOpen}
      toggleIsOpen={toggleIsOpen}
    />
  );
};

export default OrderPanel;