import withSlider from "../../../../_hocs/Slider/withSlider";
import ProductModalIngredient from "./ProductModalIngredient";

const ProductModalIngredients = ({ ingredients, setIngredients, styles, ...otherProps }) => {
  const { selectedProductIdx } = otherProps;
  const onChange = (id) => {
    setIngredients((prevState) => {
      console.log(id, prevState[selectedProductIdx].ingredients);
      const ingredientIdx = prevState[selectedProductIdx].ingredients.findIndex((state) => state.id === id);
      prevState[selectedProductIdx].ingredients[ingredientIdx].checked = !prevState[selectedProductIdx].ingredients[ingredientIdx].checked;
      return [ ...prevState];
    });
  };

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
    onChange,
    ...otherProps
  })
};

export default ProductModalIngredients;