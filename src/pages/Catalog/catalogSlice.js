import { createSlice } from "@reduxjs/toolkit";
import pizza from '@/mock/pizza.json';
import pizzaFilter from '@/mock/pizza_ingredients.json';
import produce from 'immer';

const initialState = {
  products: {
    pizza: {
      list: [],
      filter: []
    }
  },
};

const CatalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setProduct: (state, { payload: { product, key, values } }) => {
      console.log({ product, key, values });
      state.products[product][key] = values;
    },
    updatePizza: (state, { payload: { key, pizzaIdx, updatingPizza } }) => {
      state.products.pizza[key] = [
        ...state.products.pizza[key].slice(0, pizzaIdx),
        updatingPizza,
        ...state.products.pizza[key].slice(pizzaIdx + 1, state.pizza[key].length)
      ];
    },
    togglePizzaIngredientSelected: (state, { payload: { pizzaIdx, ingredientId, isOptional } }) => {
      const pizzaList = state.products.pizza.list;
      const pizza = pizzaList[pizzaIdx];
      const key = isOptional ? 'optionalIngredients' : 'ingredients';
  

      const ingredientIdx = pizza[key].findIndex(i => i.id === ingredientId);
      if (ingredientIdx !== -1) {
        const ingredient = state.products.pizza.list[pizzaIdx][key][ingredientIdx];
        if (ingredient?.selected === undefined) {
          ingredient.selected = false;
        } else {
          ingredient.selected = !ingredient?.selected;
        }
      }
    },
  }
});

export const catalogStore = CatalogSlice.reducer;

export const {
  setProduct,
  updatePizza,
  togglePizzaIngredientSelected,
} = CatalogSlice.actions;

export const getPizza = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(setProduct({
      product: 'pizza',
      key: 'list',
      values: pizza.map((onePizza) => ({
        ...onePizza,
        ingredients: onePizza.ingredients.map((ingredient) => ({ ...ingredient, selected: true }))
      }))
    }));
  } catch (err) {
    //Simulating error
  }
};

export const getPizzaFilter = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(setProduct({
      product: 'pizza',
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

export const updatePizzaIngredient = ({ pizzaIdx, ingredientId, isOptional }) => (dispatch) => {
  try {
    dispatch(togglePizzaIngredientSelected({ pizzaIdx, ingredientId, isOptional }));
  } catch (err) {
    console.log(err.message);
    //Simulating error
  }
};

export const updatePizzaFilter = ({ pizzaIdx, ingredientId }) => (dispatch, getState) => {
  try {
    const pizzaList = getState().catalogStore.products.pizza.filter;
    const pizza = pizzaList[pizzaIdx];

    const updatedPizza = produce(pizza, draftPizza => {
      const ingredient = draftPizza.items.find(i => i.id === ingredientId);
      if (ingredient) {
        ingredient.selected = !ingredient.selected;
      }
    });

    const updatedList = produce(pizzaList, draftList => {
      draftList[pizzaIdx] = updatedPizza;
    });

    dispatch(setProduct({ product: 'pizza', key: 'filter', values: updatedList }));
  } catch (err) {
    //Simulating error
  }
};

export const pizzaSelector = ({ catalogStore }) => catalogStore.products.pizza.list;

export const pizzaFilterSelector = ({ catalogStore }) => catalogStore.products.pizza.filter;
