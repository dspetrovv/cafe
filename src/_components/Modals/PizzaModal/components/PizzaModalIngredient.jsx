import React from "react";
import NoPhoto from '@/images/logo-mini.png';
import CheckboxButton from "@/_components/Buttons/CheckboxButton";

const PizzaModalIngredient = ({styles, element, onChange, isOptional}) => {
  const {
    id,
    name,
    photo,
    price,
    selected
  } = element;
  const onChangeHandler = () => {
    onChange(id, isOptional);
  };
  let image = photo;

  if (!image) {
    image = NoPhoto;
  }

  return (
    <div className={styles['product-modal__info-ingredient']}>
      <CheckboxButton outline initialChecked={selected} onChange={onChangeHandler}>
        <img src={NoPhoto} alt="product_photo" />
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