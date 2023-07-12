import React from "react";
import Button from "../../Buttons/Button";
import MiniProductCard from "@/_components/Cards/MiniProductCard";
import Panel from "../Panel";
import styles from './order-panel.module.scss';
import { useNavigate } from "react-router-dom";

const OrderPanel = ({
  products = [],
  totalPrice,
  isOpen,
  toggleIsOpen,
  onChangeProductCount
}) => {
  const PanelBody = products.map((product) => 
    <MiniProductCard
      key={product.id}
      product={product}
      className={styles.order__card}
      onChangeCount={onChangeProductCount}
      short
    />
  );
  const navigate = useNavigate();
  const accept = () => {
    navigate('/basket');
    toggleIsOpen(false);
  };

  const PanelFooter =
    <>
      <h3 className={styles['order__footer-total']}>Итого: { totalPrice } ₽</h3>
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