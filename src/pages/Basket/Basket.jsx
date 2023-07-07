import React from 'react';
import MiniProductCard from '@/_components/Cards/MiniProductCard/MiniProductCard';
import PromocodeCard from './components/PromocodeCard';
import AddToOrder from './components/AddToOrder';
import Contacts from './components/Contacts';
import Delivery from './components/Delivery';
import Payment from './components/Payment';
import Change from './components/Change';
import Comment from './components/Comment';
import Button from '@/_components/Buttons/Button/Button';
import styles from './basket.module.scss';
import orderStyle from "@/_components/Panels/OrderPanel/order-panel.module.scss";
import { getClassName } from '@/functions/classNameFunctions';

const Basket = () => {
  const sliderClassName = getClassName(styles.basket, styles.basket__slider);
  const totalBlockClassName = getClassName(styles.basket, styles.basket__total);
  const totalPrice = 300;
  return (
    <>
      <section className={styles.basket}>
        <h1>Ваш заказ</h1>
        <MiniProductCard className={styles.basket__card} />
        <MiniProductCard className={styles.basket__card} />
        <PromocodeCard totalPrice={totalPrice} />
      </section>
      <section className={sliderClassName}>
        <h3>Добавить к заказу?</h3>
        <AddToOrder />
        <h3>Соусы</h3>
        <AddToOrder />
      </section>
      <section className={styles.basket}>
        <h3 className={styles.basket__title_medium}>О вас</h3>
        <Contacts />
      </section>
      <section className={styles.basket}>
        <h3 className={styles.basket__title_medium}>Доставка</h3>
        <Delivery />
      </section>
      <section className={styles.basket}>
        <h3 className={styles.basket__title_medium}>Оплата (при получении)</h3>
        <Payment />
      </section>
      <section className={styles.basket}>
        <h3 className={styles.basket__title_short}>Сдача</h3>
        <Change />
      </section>
      <section className={styles.basket}>
        <h3 className={styles.basket__title_comment}>Комментарий</h3>
        <Comment />
      </section>
      <section className={totalBlockClassName}>
        <h3 className={orderStyle['order__footer-total']}>Итого: { totalPrice } ₽</h3>
        <Button>Оформить заказ</Button>
      </section>
    </>
  );
};

export default Basket;
