import React from "react";
import CheckboxButton from "../../../Buttons/CheckboxButton";

const ProductModalIngredient = ({styles, element, onChange}) => {
  const onChangeHandler = () => {
    onChange(element.id);
  };

  return (
    <div className={styles['product-modal__info-ingredient']}>
      <CheckboxButton outline initialChecked={element?.selected} onChange={onChangeHandler}>
        <img src={element?.photo} alt="product_photo" />
      </CheckboxButton>
      <span className={styles['product-modal__info-ingredient-name']}>{ element?.name }</span>
      <span className={styles['product-modal__info-ingredient-price']}>{ element?.price }</span>
    </div>
  );
};

export default ProductModalIngredient;