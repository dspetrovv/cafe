import React from "react";
import Photo from '../../../images/product.png';
import Button from '../../Buttons/Button';
import styles from '../../../css/card.module.scss';

const SnackCard = () => {
  return (
    <div className={`${styles.card} ${styles['card-snack']}`}>
        <img className={styles['card-snack__photo']} src={Photo} alt="snack_photo" />

      <h4>Название закуски</h4>
      <div className={styles['card-snack__info']}>Порция 20г</div>
      <Button className={styles['card-snack__button']}>179 рублей</Button>
    </div>
  );
};

export default SnackCard;