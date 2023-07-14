import { createSlice } from '@reduxjs/toolkit';
import pizza from '@/mock/pizza.json';
import pizzaFilter from '@/mock/pizza_ingredients.json';
import snack from '@/mock/snacks.json';
import sauce from '@/mock/sauces.json';
import dessert from '@/mock/desserts.json';
import drink from '@/mock/drinks.json';

const IS_DEV = process.env.NODE_ENV === 'development';

const initialState = {
  products: {
    pizza: {
      list: [],
      filter: [],
    },
    // Быть может в будущем фильтры подъедут и для них
    snack: {
      list: [],
    },
    sauce: {
      list: [],
    },
    dessert: {
      list: [],
    },
    drink: {
      list: [],
    },
  },
  scrolling: '',
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
        ...state.products.pizza[key].slice(
          pizzaIdx + 1,
          state.pizza[key].length,
        ),
      ];
    },
    togglePizzaIngredientSelected: (
      state,
      { payload: { key, pizzaIdx, ingredientId } },
    ) => {
      const pizzaList = state.products.pizza.list;
      const pizza = pizzaList[pizzaIdx];

      const ingredientIdx = pizza[key].findIndex((i) => i.id === ingredientId);
      if (ingredientIdx !== -1) {
        const ingredient =
          state.products.pizza.list[pizzaIdx][key][ingredientIdx];
        if (ingredient?.selected === undefined) {
          ingredient.selected = false;
        } else {
          ingredient.selected = !ingredient?.selected;
        }
      }
    },
    togglePizzaParametersSelected: (
      state,
      { payload: { key, pizzaIdx, parameterId } },
    ) => {
      const pizzaList = state.products.pizza.list;
      let pizza = pizzaList[pizzaIdx];
      pizza[key] = pizza[key].map((p) => ({
        ...p,
        selected: p.id === parameterId,
      }));
    },
    toggleFilterItemSelect: (
      state,
      { payload: { key, filterIndex, itemId } },
    ) => {
      const filterItem = state.products[key].filter[filterIndex].items.find(
        (product) => product.id === itemId,
      );
      filterItem.selected = !filterItem.selected;
    },
    acceptFilter: (state, { payload: { key, filterItemsIds } }) => {
      state.products[key].filter = state.products[key].filter.map((f) => ({
        ...f,
        items: f.items.map((item) => ({
          ...item,
          selected: filterItemsIds.includes(item.id),
        })),
      }));

      const filteringProductList = state.products[key].list;

      state.products[key].list = filteringProductList.map((product) => ({
        ...product,
        show:
          product.ingredients.filter(
            (ingredient) => !filterItemsIds.includes(ingredient.id),
          ).length === product.ingredients.length,
      }));
    },
    resetFilter: (state, { payload: { key } }) => {
      state.products[key].filter = state.products[key].filter.map((f) => ({
        ...f,
        items: f.items.map((item) => ({
          ...item,
          selected: false,
        })),
      }));

      const filteringProductList = state.products[key].list;

      state.products[key].list = filteringProductList.map((product) => ({
        ...product,
        show: true,
      }));
    },
    setScrolling: (state, { payload: { id } }) => {
      state.scrolling = id;
    },
  },
});

export const catalogStore = CatalogSlice.reducer;

export const {
  setProduct,
  updatePizza,
  togglePizzaIngredientSelected,
  togglePizzaParametersSelected,
  toggleFilterItemSelect,
  acceptFilter,
  resetFilter,
  setScrolling,
} = CatalogSlice.actions;

export const getPizza = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(
      setProduct({
        product: 'pizza',
        key: 'list',
        values: pizza.map((onePizza) => ({
          ...onePizza,
          ingredients: onePizza.ingredients.map((ingredient) => ({
            ...ingredient,
            selected: true,
          })),
          optionalIngredients: onePizza.optionalIngredients.map(
            (ingredient) => ({ ...ingredient, selected: false }),
          ),
          dough: onePizza.dough.map((d, idx) => ({
            ...d,
            selected: idx === 0,
          })),
          diameters: onePizza.diameters.map((diameter, idx) => ({
            ...diameter,
            selected: idx === 0,
          })),
          show: true,
        })),
      }),
    );
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const getPizzaFilter = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(
      setProduct({
        product: 'pizza',
        key: 'filter',
        values: pizzaFilter.map((filterEl) => ({
          ...filterEl,
          items: filterEl.items.map((item) => ({ ...item, selected: false })),
        })),
      }),
    );
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const updateCatalogFilter =
  ({ key, filterItemsIds }) =>
  (dispatch) => {
    try {
      if (filterItemsIds.length) {
        dispatch(acceptFilter({ key, filterItemsIds }));
      } else {
        dispatch(resetFilter({ key }));
      }
    } catch (err) {
      if (IS_DEV) {
        console.error(err);
      }
    }
  };

export const toggleFilterItem =
  ({ key, filterIndex, itemId }) =>
  (dispatch) => {
    try {
      dispatch(toggleFilterItemSelect({ key, filterIndex, itemId }));
    } catch (err) {
      if (IS_DEV) {
        console.error(err);
      }
    }
  };

export const updatePizzaIngredient =
  ({ pizzaIdx, ingredientId, isOptional }) =>
  (dispatch) => {
    try {
      const key = isOptional ? 'optionalIngredients' : 'ingredients';
      dispatch(togglePizzaIngredientSelected({ key, pizzaIdx, ingredientId }));
    } catch (err) {
      if (IS_DEV) {
        console.error(err);
      }
    }
  };

export const updatePizzaDough =
  ({ pizzaIdx, doughId }) =>
  (dispatch) => {
    try {
      dispatch(
        togglePizzaParametersSelected({
          key: 'dough',
          pizzaIdx,
          parameterId: doughId,
        }),
      );
    } catch (err) {
      if (IS_DEV) {
        console.error(err);
      }
    }
  };

export const updatePizzaDiameters =
  ({ pizzaIdx, diameterId }) =>
  (dispatch) => {
    try {
      dispatch(
        togglePizzaParametersSelected({
          key: 'diameters',
          pizzaIdx,
          parameterId: diameterId,
        }),
      );
    } catch (err) {
      if (IS_DEV) {
        console.error(err);
      }
    }
  };

export const getSnack = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(
      setProduct({
        product: 'snack',
        key: 'list',
        values: snack.map((s) => ({ ...s, show: true })),
      }),
    );
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const getSauce = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(
      setProduct({
        product: 'sauce',
        key: 'list',
        values: sauce.map((s) => ({ ...s, show: true })),
      }),
    );
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const getDessert = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(
      setProduct({
        product: 'dessert',
        key: 'list',
        values: dessert.map((d) => ({ ...d, show: true })),
      }),
    );
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const getDrinks = () => (dispatch) => {
  try {
    //Simulated server request
    dispatch(
      setProduct({
        product: 'drink',
        key: 'list',
        values: drink.map((d) => ({ ...d, show: true })),
      }),
    );
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const scrollPage = (id) => (dispatch) => {
  try {
    //Simulated server request
    dispatch(setScrolling({ id }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const pizzaSelector = ({ catalogStore }) =>
  catalogStore.products.pizza.list;

export const pizzaFilterSelector = ({ catalogStore }) =>
  catalogStore.products.pizza.filter;

export const snackSelector = ({ catalogStore }) =>
  catalogStore.products.snack.list;

export const sauceSelector = ({ catalogStore }) =>
  catalogStore.products.sauce.list;

export const dessertSelector = ({ catalogStore }) =>
  catalogStore.products.dessert.list;

export const drinkSelector = ({ catalogStore }) =>
  catalogStore.products.drink.list;

export const scrollingCatalogSelector = ({ catalogStore }) =>
  catalogStore.scrolling;
