import React from "react";
import Button from "../../Buttons/Button";
import Photo from '../../../images/product.png';
import card from '../../../css/card.module.scss';
import styles from './product-card.module.scss';

const ProductCard = ({ title = 'Product title', info = '', price = 300 }) => {
  return (
    <div className={`${card.card} ${styles['product']}`}>
      <div className={styles['product__photo']}>
        <img src={Photo} alt="product_photo" />
      </div>
      <div className={styles['product__info']}>
        <h4>{ title }</h4>
        <span>{ info }</span>
        <div className={styles['product__info-select']}>
          <Button>Выбрать</Button>
          <span>{ `от ${price} рублей` }</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;