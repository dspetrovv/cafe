import React, { useMemo } from "react";
import Photo from '../../../images/product.png';
import withModalWrapper from "../../../_hocs/Modal/withModalWrapper";
import Tabs from "../../Tabs";
import ProductModalIngredients from "./components/ProductModalIngredients";
import ProductModalTotal from "./components/ProductModalTotal";
import styles from './product-modal.module.scss';

const ProductModal = ({ isOpen, toggleIsOpen }) => {
  const tabs1 = [
    { id: 1, text: 'traditional', selected: true },
    { id: 2, text: 'thin' },
  ];
  const tabs2 = [
    { id: 1, text: '20cm', selected: true },
    { id: 2, text: '28cm' },
    { id: 3, text: '33cm' },
  ];
  const ingredients1 = [
    { id: 1, name: 'Моцарелла', photo: Photo, price: '40 rub' },
    { id: 2, name: 'Моцарелла', photo: Photo, price: '40 rub' },
  ];
  const ingredients2 = [
    { id: 1, name: 'Моцарелла', photo: Photo },
    { id: 2, name: 'Моцарелла', photo: Photo },
  ];
  const totalPrice = useMemo(() => 300, []);
  const className = `${styles['product-modal']}${!isOpen ? ` ${styles['product-modal_hidden']}` : ''}`;
  return (
    <div className={className} onClick={(e) => e.stopPropagation()}>
      <div className={styles['product-modal__photo']}>
        <img src={Photo} alt="product_photo" />
      </div>
      <div className={styles['product-modal__info']}>
        <h2>Title</h2>
        <div className={styles['product-modal__info-block']}>
          <ProductModalIngredients styles={styles} ingredients={ingredients1} />
          <div className={styles['product-modal__info-dough']}>
            <Tabs tabs={tabs1} />
            <Tabs tabs={tabs2} />
          </div>
          <h3>Title 1</h3>
          <ProductModalIngredients styles={styles} ingredients={ingredients2} />
        </div>
        <div className={styles['product-modal__info-total']}>
          <ProductModalTotal totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default withModalWrapper(ProductModal);