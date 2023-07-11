import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { pizzaFilterSelector, toggleFilterItem, updateCatalogFilter } from "./catalogSlice";

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
      dispatch(updateCatalogFilter({ key: 'pizza', filterItemsIds: [] }));
    }
    if (isFiltered) {
      setFilterItemsIds(previousFilterItemsIds);
      dispatch(updateCatalogFilter({ key: 'pizza', filterItemsIds: previousFilterItemsIds }));
    }
    setIsOpenedFilter(val);
  };

  const onToggleFilterItem = useCallback((id, filterIndex) => {
    // Pizza is hardcode
    dispatch(toggleFilterItem({ key: 'pizza', filterIndex, itemId: id }))
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
    dispatch(updateCatalogFilter({ key: 'pizza', filterItemsIds }));
    setIsOpenedFilter(false);
  }

  const resetFilterChanges = () => {
    // Pizza is hardcode
    setFilterItemsIds([]);
    setIsFiltered(false);
    dispatch(updateCatalogFilter({ key: 'pizza', filterItemsIds: [] }));
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
