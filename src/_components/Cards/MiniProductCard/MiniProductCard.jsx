import React from "react";
import Pizza from '@/images/peperoni.png';
import Snack from '@/images/snack.png';
import NoPhoto from '@/images/no photo.png';
import Drink from '@/images/drink.png';
import card from '@/css/card.module.scss';
import styles from './mini-product-card.module.scss';
import CounterButton from "@/_components/Buttons/CounterButton";
import { getClassName } from "@/functions/classNameFunctions";
import { PIZZA_SECTION, SNACKS_SECTION, DRINKS_SECTION } from "@/app/constants";

const MiniProductCard = ({
  short,
  className,
  product,
  onChangeCount,
}) => {
  const {
    name = '',
    info,
    price,
    count,
    type,
    photo,
    removed = [],
    added = []
  } = product;
  let image = photo;

  if (!image) {
    if (type === PIZZA_SECTION.id) {
      image = Pizza;
    } else if (type === SNACKS_SECTION.id) {
      image = Snack;
    } else if (type === DRINKS_SECTION.id) {
      image = Drink;
    } else {
      image = NoPhoto;
    }
  }

  const wrapperClassName = getClassName(`${card.card} ${styles['mini-product-card']}${short ? ` ${styles['mini-product-card_short']}` : ''}`, className);
  const onChangeCountHandler = (count) => {
    console.log(count);
    onChangeCount({ count, product, type });
  };

  return (
    <div className={wrapperClassName}>
      <div className={styles['mini-product-card__photo']}>
        <img src={image} alt="product_photo" />
      </div>
      <div className={styles['mini-product-card__info']}>
        <div className={styles['mini-product-card__info-main']}>
          <h3>{ name }</h3>
          { info && <span>{ info }</span> }
          { !!removed.length &&
            <div className={styles['mini-product-card__info-main__removed']}>
              Убрано: {removed.map((ingredient, index) => (
              <>
                <span>-{ingredient.name}</span>{index + 1 !== removed.length ? ', ': ''}
              </>))}
            </div>
          }
          { !!added.length &&
            <div className={styles['mini-product-card__info-main__added']}>
              Добавлено: {added.map((ingredient, index) => (
              <>
                <span>+{ingredient.name}</span>{index + 1 !== added.length ? ', ': ''}
              </>))}
            </div>
          }
        </div>
        <div className={styles['mini-product-card__info-price']}>
          <CounterButton initialCount={count} onChange={onChangeCountHandler} />
          <span>{ price } ₽</span>
        </div>
      </div>
    </div>
  );
};

export default MiniProductCard;