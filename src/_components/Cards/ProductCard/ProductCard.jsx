import React from "react";
import Button from "../../Buttons/Button";
import Photo from '../../../images/peperoni.png';
import card from '../../../css/card.module.scss';
import styles from './product-card.module.scss';

const ProductCard = ({ id, title = 'Product title', info = '', price = [300], photo, onSelect }) => {
  const onSelectHandler = () => {
    onSelect(id)
  };
  // getPhotoFromServer

  return (
    <div className={`${card.card} ${styles['product']}`}>
      <div className={styles['product__photo']}>
        <img src={Photo} alt="product_photo" onClick={onSelectHandler} />
      </div>
      <hr />
      <div className={styles['product__info']}>
        <h4 onClick={onSelectHandler}>{ title }</h4>
        <span>{ info }</span>
        <div className={styles['product__info-select']}>
          <Button onClick={onSelectHandler}>Выбрать</Button>
          <span>{ `от ${price[0]} ₽` }</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;