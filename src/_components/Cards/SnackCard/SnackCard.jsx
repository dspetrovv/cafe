import React from "react";
import Photo from '@/images/peperoni.png';
import Button from '@/_components/Buttons/Button';
import card from '@/css/card.module.scss';
import styles from './snack-card.module.scss';

const SnackCard = ({ element }) => {
  const {
    name = 'Название закуски',
    portion,
    price = 'N',
    onClick
  } = element;

  const onClickHandler = () => {
    onClick(element)
  };

  return (
    <div className={`${card.card} ${styles['snack']}`}>
      <img className={styles['snack__photo']} src={Photo} alt="snack_photo" />
      <h4>{ name }</h4>
      {portion && <div className={styles['snack__info']}>Порция { portion }гр</div>}
      <Button className={styles['snack__button']} onClick={onClickHandler}>{ price } ₽</Button>
    </div>
  );
};

export default SnackCard;