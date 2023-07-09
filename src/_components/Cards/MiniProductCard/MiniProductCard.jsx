import React from "react";
import Photo from '@/images/peperoni.png';
import card from '@/css/card.module.scss';
import styles from './mini-product-card.module.scss';
import CounterButton from "@/_components/Buttons/CounterButton";
import { getClassName } from "@/functions/classNameFunctions";

const MiniProductCard = ({
  id,
  name = 'Name',
  info,
  price,
  short,
  className,
  count = 1,
  removed = [],
  added = [],
  onChange,
}) => {
  const wrapperClassName = getClassName(`${card.card} ${styles['mini-product-card']}${short ? ` ${styles['mini-product-card_short']}` : ''}`, className);
  const onChangeHandler = (count) => {
    onChange({ count, id });
  };

  return (
    <div className={wrapperClassName}>
      <div className={styles['mini-product-card__photo']}>
        <img src={Photo} alt="product_photo" />
      </div>
      <div className={styles['mini-product-card__info']}>
        <div className={styles['mini-product-card__info-main']}>
          <h3>{ name }</h3>
          { info && <span>{ info }</span> }
          { !!removed.length &&
            <div className={styles['mini-product-card__info-main__removed']}>
              Убрано: {removed.map((ingredient, index) => (
              <>
                <span>-{ingredient}</span>{index + 1 !== removed.length ? ', ': ''}
              </>))}
            </div>
          }
          { !!added.length &&
            <div className={styles['mini-product-card__info-main__added']}>
              Добавлено: {added.map((ingredient, index) => (
              <>
                <span>+{ingredient}</span>{index + 1 !== added.length ? ', ': ''}
              </>))}
            </div>
          }
        </div>
        <div className={styles['mini-product-card__info-price']}>
          <CounterButton initialCount={count} onChange={onChangeHandler} />
          <span>{ price } ₽</span>
        </div>
      </div>
    </div>
  );
};

export default MiniProductCard;