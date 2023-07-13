import { createSlice } from "@reduxjs/toolkit";
import { areProductsEqual, convertPizzaProduct, getPizzaKey } from "./functions";
import { PIZZA_SECTION } from "@/app/constants";

const IS_DEV = process.env.NODE_ENV === 'development';

const initialState = {
  products: [],
  totalPrice: 0,
  contact: {
    name: '',
    phone: '',
    email: '',
    street: '',
    houseNumber: undefined,
    entrance: undefined,
    floor: undefined,
    flat: undefined,
    intercomCode: '',
  },
  payment: {
    method: 'cash',
    change: 'no',
  },
  comment: ''
};

const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, { payload: { product, equal, productIdx } }) => {
      if (!equal) {
        state.products.push({ ...product, count: 1 });
      } else {
        state.products[productIdx].count++;
      }
      state.totalPrice += product.price;
    },
    updateProductCount: (state, { payload: { product: updatingProduct, count, type } }) => {
      const idx = state.products.findIndex((product) => {
        if (type === PIZZA_SECTION.id) {
          return getPizzaKey(product) === getPizzaKey(updatingProduct);
        }
        return product.id === updatingProduct.id && product.type === type;
      });
      if (state.products[idx].count > count) {
        state.totalPrice -= state.products[idx].price;
      } else {
        state.totalPrice += state.products[idx].price;
      }
      state.products[idx] = { ...state.products[idx], count };
    },
    removeProduct: (state, { payload: { product: updatingProduct, type } }) => {
      const removingIndex = state.products.findIndex((product) => {
        if (type === PIZZA_SECTION.id) {
          return getPizzaKey(product) === getPizzaKey(updatingProduct);
        }
        return product.id === updatingProduct.id && product.type === type;
      });
      state.totalPrice -= state.products[removingIndex].price;
      state.products.splice(removingIndex, 1);
    },
    resetBasket: (state) => {
      state.products = [];
    },
    updateContact: (state, { payload: { key, data } }) => {
      state.contact[key] = data;
    },
    setMainContact: (state, { payload: { name, phone } }) => {
      state.contact.name = name;
      state.contact.phone = phone;
    },
    updatePayment: (state, { payload: { key, data } }) => {
      state.payment[key] = data;
    },
    updateComment: (state, { payload }) => {
      state.comment = payload;
    },
  }
});

export const basketStore = BasketSlice.reducer;

export const {
  addProduct,
  updateProductCount,
  removeProduct,
  resetBasket,
  updateContact,
  setMainContact,
  updatePayment,
  updateComment,
} = BasketSlice.actions;

export const addProductToBasket = (product, type) => (dispatch, getState) => {
  try {
    const { products } = getState().basketStore;
    let myProduct = product;
    switch (type) {
      case PIZZA_SECTION.id:
        myProduct = convertPizzaProduct(product);
        break;
      default:
        break;
    }
    const { equal, productIdx } = areProductsEqual(myProduct, products);
    dispatch(addProduct({ product: myProduct, equal, productIdx }));
    } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const changeCountOfProductInBasket = ({ product, count, type }) => (dispatch) => {
  try {
    dispatch(updateProductCount({ product, count, type }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const removeProductFromBasket = ({ product, type }) => (dispatch) => {
  try {
    dispatch(removeProduct({ product, type }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const setDefaultContactData = () => (dispatch) => {
  try {
    const name = '';
    const phone = '';
    dispatch(setMainContact({ name, phone }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const updateContactData = (data) => (dispatch) => {
  try {
    dispatch(updateContact(data));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const updatePaymentData = (data) => (dispatch) => {
  try {
    dispatch(updatePayment(data));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const addComment = (comment) => (dispatch) => {
  try {
    dispatch(updateComment(comment));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const basketProductsSelector = ({ basketStore }) => basketStore.products;

export const totalPriceSelector = ({ basketStore }) => basketStore.totalPrice;
