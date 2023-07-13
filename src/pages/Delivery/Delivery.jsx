import React from "react";
import Driver from '@/images/driver.png';
import styles from './delivery.module.scss';

const Delivery = () => {
  return (
    <>
      <img
        src={Driver}
        alt="On it's way"
        className={styles.delivery__photo}
      />
      <h1 className={styles.delivery__title}>
        Ваш заказ в пути!
      </h1>
    </>
  );
};

export default Delivery;
