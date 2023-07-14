import withSlider from '@/_hocs/Slider/withSlider';
import PizzaModalIngredient from './PizzaModalIngredient';

const PizzaModalIngredients = ({
  ingredients,
  updateIngredients,
  styles,
  ...otherProps
}) => {
  return withSlider(PizzaModalIngredient, {
    count: 3,
    elementClassName: styles['product-modal__info-ingredient'],
    elements: ingredients,
    listClassName: styles['product-modal__info-ingredients'],
  })({
    styles,
    onChange: updateIngredients,
    ...otherProps,
  });
};

export default PizzaModalIngredients;
