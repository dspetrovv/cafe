import React from "react";
import Button from "../../Buttons/Button";
import Photo from '../../../images/product.png';
import styles from '../../../css/card.module.scss';

const ProductCard = () => {
  return (
    <div className={`${styles.card} ${styles['card-product']}`}>
      <img src={Photo} alt="product_photo" className={styles['card-product__photo']} />
      <div className={styles['card-product__info']}>
        <h4>Product title</h4>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat provident enim eaque minus esse. Hic est dolores at facere, aliquam placeat mollitia a culpa rem saepe fuga nesciunt soluta ex.</span>
        <div className={styles['card-product__info-select']}>
          <Button>Выбрать</Button>
          <span>от 300 рублей</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;