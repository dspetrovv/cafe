import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { pizzaSelector, updatePizzaDiameters, updatePizzaDough, updatePizzaIngredient } from "./catalogSlice";

export const usePizzaData = ({ dispatch }) => {
  const pizza = useSelector(pizzaSelector);
  const [selectedPizzaIdx, setSelectedPizzaIdx] = useState(0);
  const [isOpenedPizza, setIsOpenedPizza] = useState(false);

  const updateIngredients = (ingredientId, isOptional) => {
    dispatch(updatePizzaIngredient({ pizzaIdx: selectedPizzaIdx, ingredientId, isOptional }));
  };

  const onSelectPizza = ({ id }) => {
    setSelectedPizzaIdx(() => pizza.findIndex((product) => product.id === id));
    setTimeout(() => {
      setIsOpenedPizza(true);
    });
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
    onSelectPizza,
    togglePizzaModal,
    updateDough,
    updateDiameter
  };
};
