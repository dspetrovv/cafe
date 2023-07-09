import React from "react";
import Button from "@/_components/Buttons/Button";
import Photo from '@/images/peperoni.png';
import card from '@/css/card.module.scss';
import styles from './product-card.module.scss';

const ProductCard = ({ id, name = 'Product name', info = '', price = 'N', onSelect }) => {
  const onSelectHandler = () => {
    onSelect(id);
  };
  // getPhotoFromServer

  return (
    <div className={`${card.card} ${styles['product']}`}>
      <div className={styles['product__photo']}>
        <img src={Photo} alt="product_photo" onClick={onSelectHandler} />
      </div>
      <hr />
      <div className={styles['product__info']}>
        <h4 onClick={onSelectHandler}>{ name }</h4>
        <span>{ info }</span>
        <div className={styles['product__info-select']}>
          <Button onClick={onSelectHandler}>Выбрать</Button>
          <span>{ `от ${price} ₽` }</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;