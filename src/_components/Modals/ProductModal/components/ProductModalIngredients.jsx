import React from "react";
import CheckboxButton from "../../../Buttons/CheckboxButton";

const ProductModalIngredients = ({styles, ingredients = []}) => {
  return (
    <div className={styles['product-modal__info-ingredients']}>
        { ingredients.map((ingredient) => 
          <div key={ingredient.id} className={styles['product-modal__info-ingredient']}>
            <CheckboxButton outline initialChecked={ingredient.checked}>
              <img src={ingredient.photo} alt="product_photo" />
            </CheckboxButton>
            <span className={styles['product-modal__info-ingredient-name']}>{ ingredient.name }</span>
            <span className={styles['product-modal__info-ingredient-price']}>{ ingredient.price }</span>
          </div>
        ) }
    </div>
  );
};

export default ProductModalIngredients;