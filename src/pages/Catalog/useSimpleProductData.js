import { useState } from "react";
import { useSelector } from "react-redux";
import { sauceSelector, snackSelector } from "./catalogSlice";
import { SAUCES_SECTION, SNACKS_SECTION } from "@/app/Header/Header";

export const useSimpleProductData = () => {
  const snacks = useSelector(snackSelector);
  const sauces = useSelector(sauceSelector);
  const [selectedSimpleProduct, setSelectedSimpleProduct] = useState();
  const [isOpenedSimpleProduct, setIsOpenedSimpleProduct] = useState(false);

  const onSelectSimpleProduct = ({ id, sectionName }) => {
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
  const toggleSimpleProductModal = () => {
    setIsOpenedSimpleProduct((prevState) => !prevState);
  };

  return {
    snacks,
    sauces,
    selectedSimpleProduct,
    isOpenedSimpleProduct,
    onSelectSimpleProduct,
    toggleSimpleProductModal
  };
};
