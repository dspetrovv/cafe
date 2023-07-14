import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  dessertSelector,
  drinkSelector,
  sauceSelector,
  snackSelector,
} from './catalogSlice';
import {
  SAUCES_SECTION,
  SNACKS_SECTION,
  DESSERTS_SECTION,
  DRINKS_SECTION,
} from '@/app/constants';
import { addProductToBasket } from '../Basket/basketSlice';

export const useSimpleProductData = ({ dispatch }) => {
  const snacks = useSelector(snackSelector);
  const sauces = useSelector(sauceSelector);
  const desserts = useSelector(dessertSelector);
  const drinks = useSelector(drinkSelector);
  const [selectedSimpleProduct, setSelectedSimpleProduct] = useState();
  const [isOpenedSimpleProduct, setIsOpenedSimpleProduct] = useState(false);

  const onOpenSimpleProduct = ({ id, sectionName }) => {
    switch (sectionName) {
      case SNACKS_SECTION.id:
        setSelectedSimpleProduct(snacks.find((snack) => snack.id === id));
        break;
      case SAUCES_SECTION.id:
        setSelectedSimpleProduct(sauces.find((sauce) => sauce.id === id));
        break;
      case DESSERTS_SECTION.id:
        setSelectedSimpleProduct(desserts.find((dessert) => dessert.id === id));
        break;
      case DRINKS_SECTION.id:
        setSelectedSimpleProduct(drinks.find((drink) => drink.id === id));
        break;
      default:
        break;
    }
    setTimeout(() => {
      setIsOpenedSimpleProduct(true);
    });
  };
  const onSelectSimpleProduct = () => {
    dispatch(addProductToBasket(selectedSimpleProduct));
    setIsOpenedSimpleProduct(false);
  };
  const toggleSimpleProductModal = () => {
    setIsOpenedSimpleProduct((prevState) => !prevState);
  };

  return {
    snacks,
    sauces,
    desserts,
    drinks,
    selectedSimpleProduct,
    isOpenedSimpleProduct,
    onOpenSimpleProduct,
    onSelectSimpleProduct,
    toggleSimpleProductModal,
  };
};
