import React from "react";
import Photo from '../../../images/product.png';
import card from '../../../css/card.module.scss';
import styles from './mini-product-card.module.scss';
import CounterButton from "../../Buttons/CounterButton";

const MiniProductCard = ({ short }) => {
  const className = `${card.card} ${styles['mini-product-card']}${short ? ` ${styles['mini-product-card_short']}` : ''}`;
  return (
    <div className={className}>
      <div className={styles['mini-product-card__photo']}>
        <img src={Photo} alt="product_photo" />
      </div>
      <div className={styles['mini-product-card__info']}>
        <div className={styles['mini-product-card__info-main']}>
          <h3>Title</h3>
          <span>Традиционное тесто, 23см</span>
        </div>
        <div className={styles['mini-product-card__info-price']}>
          <CounterButton />
          <span>399 руб</span>
        </div>
      </div>
    </div>
  );
};

export default MiniProductCard;