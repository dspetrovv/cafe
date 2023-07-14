import React from 'react';
import Pizza from '@/images/peperoni.png';
import Snack from '@/images/snack.png';
import NoPhoto from '@/images/no photo.png';
import Drink from '@/images/drink.png';
import Button from '@/_components/Buttons/Button';
import card from '@/css/card.module.scss';
import styles from './snack-card.module.scss';
import { PIZZA_SECTION, SNACKS_SECTION, DRINKS_SECTION } from '@/app/constants';

const SnackCard = ({ element, onClick }) => {
  const {
    name = 'Название закуски',
    portion,
    price = 'N',
    photo,
    type,
  } = element;

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

  const onClickHandler = () => {
    onClick(element, type);
  };

  return (
    <div className={`${card.card} ${styles['snack']}`}>
      <img className={styles['snack__photo']} src={image} alt="snack_photo" />
      <h4>{name}</h4>
      {portion && (
        <div className={styles['snack__info']}>Порция {portion}гр</div>
      )}
      <Button className={styles['snack__button']} onClick={onClickHandler}>
        {price} ₽
      </Button>
    </div>
  );
};

export default SnackCard;
