import React from "react";
import Photo from '../../../images/peperoni.png';
import Button from '../../Buttons/Button';
import card from '../../../css/card.module.scss';
import styles from './snack-card.module.scss';

const SnackCard = () => {
  return (
    <div className={`${card.card} ${styles['snack']}`}>
      <img className={styles['snack__photo']} src={Photo} alt="snack_photo" />
      <h4>Название закуски</h4>
      <div className={styles['snack__info']}>Порция 20г</div>
      <Button className={styles['snack__button']}>179 ₽</Button>
    </div>
  );
};

export default SnackCard;