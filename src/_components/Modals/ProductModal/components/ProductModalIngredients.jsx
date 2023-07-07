import withSlider from "@/_hocs/Slider/withSlider";
import ProductModalIngredient from "./ProductModalIngredient";

const ProductModalIngredients = ({ ingredients, updateIngredients, styles, ...otherProps }) => {

  return withSlider(
    ProductModalIngredient,
      {
        count: 3,
        elementClassName: styles['product-modal__info-ingredient'],
        elements: ingredients,
        listClassName: styles['product-modal__info-ingredients'],
      }
    )
  ({
    styles,
    onChange: updateIngredients,
    ...otherProps
  })
};

export default ProductModalIngredients;