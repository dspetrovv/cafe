import React, { useMemo } from "react";
import Photo from '@/images/peperoni.png';
import withModalWrapper from "@/_hocs/Modal/withModalWrapper";
import Tabs from "@/_components/Tabs";
import PizzaModalIngredients from "./components/PizzaModalIngredients";
import PizzaModalTotal from "./components/PizzaModalTotal";
import styles from './pizza-modal.module.scss';

// С диаметром пиццы должна расти и стоимость дополнительных ингридиентов.
// Каждую итерацию увеличиваем на 0.5 от цены.
const setPriceByDiameter = (diameterIdx, price) => price * (diameterIdx % 2 && diameterIdx !== 0 ? diameterIdx + 0.5 : diameterIdx + 1);

const PizzaModal = ({
  pizza,
  isOpen,
  updateIngredients,
  updateDough,
  updateDiameter
}) => {
  const {
    name,
    dough,
    diameters,
    ingredients,
    optionalIngredients,
    price
  } = pizza;

  const selectedDiameterIdx = useMemo(() => diameters.findIndex((diameter) => diameter.selected), [diameters]);

  const optionalIngredientsByDiameter = useMemo(() => 
    optionalIngredients.map((optionalIngredient) => ({
      ...optionalIngredient,
      price: setPriceByDiameter(selectedDiameterIdx, optionalIngredient.price)
  })), [optionalIngredients, selectedDiameterIdx]);

  const totalPrice = useMemo(() => {
    const additionalPrice = optionalIngredientsByDiameter.reduce((prev, optionalIngredient) => {
      const sum = optionalIngredient.selected === true ? optionalIngredient.price : 0;
      return prev + sum;
    }, 0);

    return price[selectedDiameterIdx] + additionalPrice;
  }, [price, selectedDiameterIdx, optionalIngredientsByDiameter]);

  const className = `${styles['product-modal']}${!isOpen ? ` ${styles['product-modal_hidden']}` : ''}`;

  return (
    <div className={className} onClick={(e) => e.stopPropagation()}>
      <div className={styles['product-modal__photo']}>
        <img src={Photo} alt="product_photo" />
      </div>
      <div className={styles['product-modal__info']}>
        <h2>{ name }</h2>
        <div className={styles['product-modal__info-block']}>
          <PizzaModalIngredients
            ingredients={ingredients}
            updateIngredients={updateIngredients}
            styles={styles}
          />
          <div className={styles['product-modal__info-dough']}>
            <Tabs tabs={dough} onChange={updateDough} />
            <Tabs tabs={diameters} onChange={updateDiameter} />
          </div>
          <h3>Добавить в пиццу</h3>
          <PizzaModalIngredients
            ingredients={optionalIngredientsByDiameter}
            updateIngredients={updateIngredients}
            styles={styles}
            isOptional
          />
        </div>
        <div className={styles['product-modal__info-total']}>
          <PizzaModalTotal totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default withModalWrapper(PizzaModal);