import React from "react";
import CheckboxButton from "@/_components/Buttons/CheckboxButton";

const ProductModalIngredient = ({styles, element, onChange, isOptional}) => {
  const onChangeHandler = () => {
    onChange(element.id, isOptional);
  };

  if (isOptional) {
    console.log(element?.name, element?.selected);
  }

  return (
    <div className={styles['product-modal__info-ingredient']}>
      <CheckboxButton outline initialChecked={element?.selected} onChange={onChangeHandler}>
        <img src={element?.photo} alt="product_photo" />
      </CheckboxButton>
      <span
        className={styles['product-modal__info-ingredient-name']}
        title={element?.name}
      >
        { element?.name }
      </span>
      <span className={styles['product-modal__info-ingredient-price']}>{ element?.price }</span>
    </div>
  );
};

export default ProductModalIngredient;