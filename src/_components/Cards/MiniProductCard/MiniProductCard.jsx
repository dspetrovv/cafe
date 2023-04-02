import React from "react";
import Photo from '../../../images/peperoni.png';
import card from '../../../css/card.module.scss';
import styles from './mini-product-card.module.scss';
import CounterButton from "../../Buttons/CounterButton";

const MiniProductCard = ({
  id = 1,
  name = 'Title',
  info = 'Традиционное тесто, 23 см',
  price = 300,
  short,
  onChange = () => {}
}) => {
  const className = `${card.card} ${styles['mini-product-card']}${short ? ` ${styles['mini-product-card_short']}` : ''}`;
  const onChangeHandler = (price) => {
    onChange({ price, id });
  };
  return (
    <div className={className}>
      <div className={styles['mini-product-card__photo']}>
        <img src={Photo} alt="product_photo" />
      </div>
      <div className={styles['mini-product-card__info']}>
        <div className={styles['mini-product-card__info-main']}>
          <h3>{ name }</h3>
          <span>{ info }</span>
        </div>
        <div className={styles['mini-product-card__info-price']}>
          <CounterButton initialCount={1} price={price} onChange={onChangeHandler} />
          <span>{ price } ₽</span>
        </div>
      </div>
    </div>
  );
};

export default MiniProductCard;