import React from "react";
import Button from "@/_components/Buttons/Button";
import MiniProductCard from "@/_components/Cards/MiniProductCard";
import Panel from "../Panel";
import styles from './order-panel.module.scss';
import { useNavigate } from "react-router-dom";
import { PIZZA_SECTION } from "@/app/constants";
import { getPizzaKey } from "@/pages/Basket/functions";

const OrderPanel = ({
  products = [],
  totalPrice,
  isOpen,
  toggleIsOpen,
  onChangeProductCount
}) => {
  console.log(products);
  const PanelBody = products.map((product) => {
    let key = `${product.type}${product.id}${product.count}`;
    console.log(product.name, product.count);
    if (product.type === PIZZA_SECTION.id) {
      key = getPizzaKey(product);
    }
    return <MiniProductCard
      key={key}
      product={product}
      className={styles.order__card}
      onChangeCount={onChangeProductCount}
      short
    />
  });
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