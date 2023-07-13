import { useState } from "react";
import { useSelector } from "react-redux";
import { sauceSelector, snackSelector } from "./catalogSlice";
import { SAUCES_SECTION, SNACKS_SECTION } from "@/app/constants";
import { addProductToBasket } from "../Basket/basketSlice";

export const useSimpleProductData = ({ dispatch }) => {
  const snacks = useSelector(snackSelector);
  const sauces = useSelector(sauceSelector);
  const [selectedSimpleProduct, setSelectedSimpleProduct] = useState();
  const [isOpenedSimpleProduct, setIsOpenedSimpleProduct] = useState(false);

  const onOpenSimpleProduct = ({ id, sectionName }) => {
    switch (sectionName) {
      case SNACKS_SECTION.id:
        setSelectedSimpleProduct(snacks.find((snack) => snack.id === id));
        break;
      case SAUCES_SECTION.id:
        setSelectedSimpleProduct(sauces.find((sauce) => sauce.id === id))
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
    selectedSimpleProduct,
    isOpenedSimpleProduct,
    onOpenSimpleProduct,
    onSelectSimpleProduct,
    toggleSimpleProductModal
  };
};
