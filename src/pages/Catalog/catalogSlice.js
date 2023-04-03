import { createSlice } from "@reduxjs/toolkit";
import pizza from '../../mock/pizza.json'
import pizzaFilter from '../../mock/pizza_ingredients.json'

const initialState = {
  pizza: {
    list: [],
    filter: []
  }
};

const CatalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setPizza: (state, { payload: { key, values } }) => {
      state.pizza[key] = values;
    },
    updatePizza: (state, { payload: { key, pizzaIdx, updatingPizza } }) => {
      state.pizza[key] = [
        ...state.pizza[key].slice(0, pizzaIdx),
        updatingPizza,
        ...state.pizza[key].slice(pizzaIdx + 1, state.pizza[key].length)
      ];
    },
  }
});

export const catalogStore = CatalogSlice.reducer;

export const {
  setPizza,
  updatePizza,
} = CatalogSlice.actions;

export const getPizza = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(setPizza({
      key: 'list',
      values: pizza.map((onePizza) => ({
        ...onePizza,
        ingredients: onePizza.ingredients.map((ingredient) => ({ ...ingredient, selected: false }))
      }))
    }));
  } catch (err) {
    //Simulating error
  }
};

export const getPizzaFilter = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(setPizza({
      key: 'filter',
      values: pizzaFilter.map((filterEl) => ({
        ...filterEl,
        items: filterEl.items.map((item) => ({ ...item, selected: false }))
      }))
    }));
  } catch (err) {
    //Simulating error
  }
};

export const updatePizzaIngredient = ({ pizzaIdx, ingredientId }) => (dispatch, getState) => {
  try {
    console.log(1);
    const { pizza: { list: pizza } } = getState().catalogStore;
    const updatingPizza = pizza[pizzaIdx];
    const updatingIngredientIdx = updatingPizza.ingredients.findIndex((ingredient) => ingredient.id === ingredientId);
    updatingPizza.ingredient[updatingIngredientIdx].selected = !updatingPizza.ingredient[updatingIngredientIdx].selected;
    dispatch(updatePizza({
      key: 'list',
      pizzaIdx,
      updatingPizza,
    }));
  } catch (err) {
    //Simulating error
  }
};

export const updatePizzaFilter = ({ pizzaIdx, ingredientId }) => (dispatch, getState) => {
  try {
    const { pizza: { filter } } = getState().catalogStore;
    const updatingFilter = filter[pizzaIdx];
    const updatingItemIdx = updatingFilter.items.findIndex((item) => item.id === ingredientId);
    updatingFilter.items[updatingItemIdx].selected = !updatingFilter.items[updatingItemIdx].selected;
    dispatch(updatePizza({
      key: 'filter',
      pizzaIdx,
      updatingFilter,
    }));
  } catch (err) {
    //Simulating error
  }
};

export const pizzaSelector = ({ catalogStore }) => catalogStore.pizza.list;

export const pizzaFilterSelector = ({ catalogStore }) => catalogStore.pizza.filter;
