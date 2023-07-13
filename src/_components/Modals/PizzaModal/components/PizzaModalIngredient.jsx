import React from "react";
import Pizza from '@/images/peperoni.png';
import Snack from '@/images/snack.png';
import NoPhoto from '@/images/no photo.png';
import CheckboxButton from "@/_components/Buttons/CheckboxButton";
import { PIZZA_SECTION, SNACKS_SECTION } from "@/app/constants";

const PizzaModalIngredient = ({styles, element, onChange, isOptional}) => {
  const {
    id,
    name,
    type,
    photo,
    price,
    selected
  } = element;
  const onChangeHandler = () => {
    onChange(id, isOptional);
  };
  let image = photo;

  if (!image) {
    if (type === PIZZA_SECTION.id) {
      image = Pizza;
    } else if (type === SNACKS_SECTION.id) {
      image = Snack;
    } else {
      image = NoPhoto;
    }
  }

  return (
    <div className={styles['product-modal__info-ingredient']}>
      <CheckboxButton outline initialChecked={selected} onChange={onChangeHandler}>
        <img src={photo} alt="product_photo" />
      </CheckboxButton>
      <span
        className={styles['product-modal__info-ingredient-name']}
        title={name}
      >
        { name }
      </span>
      { price && <span className={styles['product-modal__info-ingredient-price']}>{ price } ₽</span>}
    </div>
  );
};

export default PizzaModalIngredient;