import { createSlice } from "@reduxjs/toolkit";
import pizza from '@/mock/pizza.json';
import pizzaFilter from '@/mock/pizza_ingredients.json';
import snack from '@/mock/snacks.json';
import sauce from '@/mock/sauces.json';
import produce from 'immer';

const IS_DEV = process.env.NODE_ENV === 'development';

const initialState = {
  products: {
    pizza: {
      list: [],
      filter: []
    },
    snack: {
      list: []
    },
    sauce: {
      list: []
    }
  },
};

const CatalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setProduct: (state, { payload: { product, key, values } }) => {
      state.products[product][key] = values;
    },
    updatePizza: (state, { payload: { key, pizzaIdx, updatingPizza } }) => {
      state.products.pizza[key] = [
        ...state.products.pizza[key].slice(0, pizzaIdx),
        updatingPizza,
        ...state.products.pizza[key].slice(pizzaIdx + 1, state.pizza[key].length)
      ];
    },
    togglePizzaIngredientSelected: (state, { payload: { key, pizzaIdx, ingredientId } }) => {
      const pizzaList = state.products.pizza.list;
      const pizza = pizzaList[pizzaIdx];

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
    togglePizzaParametersSelected: (state, { payload: { key, pizzaIdx, parameterId } }) => {
      const pizzaList = state.products.pizza.list;
      let pizza = pizzaList[pizzaIdx];
      pizza[key] = pizza[key].map((p) => ({ ...p, selected: p.id === parameterId }))
    },
  }
});

export const catalogStore = CatalogSlice.reducer;

export const {
  setProduct,
  updatePizza,
  togglePizzaIngredientSelected,
  togglePizzaParametersSelected,
} = CatalogSlice.actions;

export const getPizza = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(setProduct({
      product: 'pizza',
      key: 'list',
      values: pizza.map((onePizza) => ({
        ...onePizza,
        ingredients: onePizza.ingredients.map((ingredient) => ({ ...ingredient, selected: true })),
        optionalIngredients: onePizza.optionalIngredients.map((ingredient) => ({ ...ingredient, selected: false })),
        dough: onePizza.dough.map((d, idx) => ({ ...d, selected: idx === 0 })),
        diameters: onePizza.diameters.map((diameter, idx) => ({ ...diameter, selected: idx === 0 })),
      }))
    }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
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
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const updatePizzaIngredient = ({ pizzaIdx, ingredientId, isOptional }) => (dispatch) => {
  try {
    const key = isOptional ? 'optionalIngredients' : 'ingredients';
    dispatch(togglePizzaIngredientSelected({ key, pizzaIdx, ingredientId }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const updatePizzaDough = ({ pizzaIdx, doughId }) => (dispatch) => {
  try {
    dispatch(togglePizzaParametersSelected({ key: 'dough', pizzaIdx, parameterId: doughId }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const updatePizzaDiameters = ({ pizzaIdx, diameterId }) => (dispatch) => {
  try {
    dispatch(togglePizzaParametersSelected({ key: 'diameters', pizzaIdx, parameterId: diameterId }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
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
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const getSnack = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(setProduct({
      product: 'snack',
      key: 'list',
      values: snack
    }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const getSauce = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(setProduct({
      product: 'sauce',
      key: 'list',
      values: sauce
    }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const pizzaSelector = ({ catalogStore }) => catalogStore.products.pizza.list;

export const pizzaFilterSelector = ({ catalogStore }) => catalogStore.products.pizza.filter;

export const snackSelector = ({ catalogStore }) => catalogStore.products.snack.list;

export const sauceSelector = ({ catalogStore }) => catalogStore.products.sauce.list;
