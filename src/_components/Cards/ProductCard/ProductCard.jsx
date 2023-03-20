import React from "react";
import Button from "../../Buttons/Button";
import Photo from '../../../images/product.png';
import styles from '../../../css/card.module.scss';

const ProductCard = ({ title = 'Product title', info = '', price = 300 }) => {
  return (
    <div className={`${styles.card} ${styles['card-product']}`}>
      <div className={styles['card-product__photo']}>
      <img src={Photo} alt="product_photo" />
      </div>
      <div className={styles['card-product__info']}>
        <h4>{ title }</h4>
        <span>{ info }</span>
        <div className={styles['card-product__info-select']}>
          <Button>Выбрать</Button>
          <span>{ `от ${price} рублей` }</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;