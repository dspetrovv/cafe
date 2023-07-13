import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { pizzaFilterSelector, toggleFilterItem, updateCatalogFilter } from "./catalogSlice";
import { PIZZA_SECTION } from "@/app/constants";

export const useCatalogFilter = ({ dispatch }) => {
  const pizzaFilter = useSelector(pizzaFilterSelector);

  // Если в будущем подъедут новые фильтры
  // то будем хранить в массиве объектов:
  // [{ key: 'pizza'/'snack'/'sauce', isFiltered: true/false }]
  const [isFiltered, setIsFiltered] = useState(false);
  const [isOpenedFilter, setIsOpenedFilter] = useState(false);
  const [filterItemsIds, setFilterItemsIds] = useState([]);
  const [previousFilterItemsIds, setPreviousFilterItemsIds] = useState([]);

  const toggleIsOpenFilter = (val = true) => {
    if (!val && !isFiltered) {
      setFilterItemsIds([]);
      // Pizza is hardcode
      dispatch(updateCatalogFilter({ key: PIZZA_SECTION.id, filterItemsIds: [] }));
    }
    if (isFiltered) {
      setFilterItemsIds(previousFilterItemsIds);
      dispatch(updateCatalogFilter({ key: PIZZA_SECTION.id, filterItemsIds: previousFilterItemsIds }));
    }
    setIsOpenedFilter(val);
  };

  const onToggleFilterItem = useCallback((id, filterIndex) => {
    // Pizza is hardcode
    dispatch(toggleFilterItem({ key: PIZZA_SECTION.id, filterIndex, itemId: id }))
    setFilterItemsIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((prev) => prev !== id);
      }
      return [ ...prevState, id ];
    });
  }, [dispatch]);

  const acceptFilterChanges = () => {
    setIsFiltered(true);
    setPreviousFilterItemsIds(filterItemsIds);
    // Pizza is hardcode
    dispatch(updateCatalogFilter({ key: PIZZA_SECTION.id, filterItemsIds }));
    setIsOpenedFilter(false);
  }

  const resetFilterChanges = () => {
    setFilterItemsIds([]);
    setIsFiltered(false);
    // Pizza is hardcode
    dispatch(updateCatalogFilter({ key: PIZZA_SECTION.id, filterItemsIds: [] }));
  }

  return {
    pizzaFilter,
    isOpenedFilter,
    toggleIsOpenFilter,
    onToggleFilterItem,
    acceptFilterChanges,
    resetFilterChanges,
  };
};
