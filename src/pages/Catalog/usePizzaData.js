import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { pizzaSelector, updatePizzaDiameters, updatePizzaDough, updatePizzaIngredient } from "./catalogSlice";
import { addProductToBasket } from "../Basket/basketSlice";

export const usePizzaData = ({ dispatch }) => {
  const pizza = useSelector(pizzaSelector);
  const [selectedPizzaIdx, setSelectedPizzaIdx] = useState(0);
  const [isOpenedPizza, setIsOpenedPizza] = useState(false);

  const updateIngredients = (ingredientId, isOptional) => {
    dispatch(updatePizzaIngredient({ pizzaIdx: selectedPizzaIdx, ingredientId, isOptional }));
  };

  const onOpenPizza = ({ id }) => {
    setSelectedPizzaIdx(pizza.findIndex((product) => product.id === id));
    setTimeout(() => {
      setIsOpenedPizza(true);
    });
  };

  const onSelectPizza = (totalPrice) => {
    console.log(totalPrice);
    const selectedPizza = { ...pizza[selectedPizzaIdx] };
    Object.defineProperty(selectedPizza, 'totalPrice', { value: totalPrice });
    dispatch(addProductToBasket(selectedPizza, 'pizza'));
    setIsOpenedPizza(false);
  };
  
  const togglePizzaModal = () => {
    setIsOpenedPizza((prevState) => !prevState);
  };

  const updateDough = useCallback((doughId) => {
    dispatch(updatePizzaDough({ pizzaIdx: selectedPizzaIdx, doughId }));
  }, [dispatch, selectedPizzaIdx]);
  const updateDiameter = useCallback((diameterId) => {
    dispatch(updatePizzaDiameters({ pizzaIdx: selectedPizzaIdx, diameterId }));
  }, [dispatch, selectedPizzaIdx]);


  return {
    pizza,
    selectedPizzaIdx,
    isOpenedPizza,
    updateIngredients,
    onOpenPizza,
    onSelectPizza,
    togglePizzaModal,
    updateDough,
    updateDiameter
  };
};
