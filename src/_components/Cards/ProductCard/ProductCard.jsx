import React from "react";
import Button from "@/_components/Buttons/Button";
import Pizza from '@/images/peperoni.png';
import Snack from '@/images/snack.png';
import NoPhoto from '@/images/no photo.png';
import Drink from '@/images/drink.png';
import card from '@/css/card.module.scss';
import styles from './product-card.module.scss';
import { PIZZA_SECTION, SNACKS_SECTION, DRINKS_SECTION } from "@/app/constants";

const ProductCard = ({
  id,
  name = 'Product name',
  info = '',
  price,
  photo,
  type,
  onSelect
}) => {
  const onSelectHandler = () => {
    onSelect(id);
  };
  let image = photo;

  if (!image) {
    if (type === PIZZA_SECTION.id) {
      image = Pizza;
    } else if (type === SNACKS_SECTION.id) {
      image = Snack;
    } else if (type === DRINKS_SECTION.id) {
      image = Drink;
    }  else {
      image = NoPhoto;
    }
  }

  return (
    <div className={`${card.card} ${styles['product']}`}>
      <div className={styles['product__photo']}>
        <img src={image} alt="product_photo" onClick={onSelectHandler} />
      </div>
      <hr />
      <div className={styles['product__info']}>
        <h4 onClick={onSelectHandler}>{ name }</h4>
        <span>{ info }</span>
        <div className={styles['product__info-select']}>
          <Button onClick={onSelectHandler}>Выбрать</Button>
          <span>{ Array.isArray(price) ? `от ${price[0]}` : price } ₽</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;