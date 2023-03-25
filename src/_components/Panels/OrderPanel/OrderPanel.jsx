import React from "react";
import Button from "../../Buttons/Button";
import MiniProductCard from "../../Cards/MiniProductCard";
import Panel from "../Panel";
import styles from './order-panel.module.scss';

const OrderPanel = () => {
  const PanelBody = <MiniProductCard short />
  const PanelFooter =
    <>
      <h3 className={styles['order__footer-total']}>Итого: 2 379 руб</h3>
      <Button className={styles['order__footer-button']}>Оформить заказ</Button>
    </>
  return (
    <Panel label='Ваш заказ' body={PanelBody} footer={PanelFooter} />
  );
};

export default OrderPanel;