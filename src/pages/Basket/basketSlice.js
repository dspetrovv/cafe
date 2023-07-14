import { createSlice } from "@reduxjs/toolkit";
import { areProductsEqual, convertPizzaProduct, getPizzaKey } from "./functions";
import { PIZZA_SECTION } from "@/app/constants";

const IS_DEV = process.env.NODE_ENV === 'development';

const initialState = {
  products: [],
  totalPrice: 0,
  contact: {
    name: '', // Обязательно
    phone: '', // Обязательно
    email: '',
    street: '', // Обязательно
    houseNumber: undefined, // Обязательно
    entrance: undefined,
    floor: undefined,
    flat: undefined,
    intercomCode: '',
  },
  payment: {
    method: 'cash',
    change: 'no',
    changeSum: 0,
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
    updateProductCount: (state, { payload: { product: updatingProduct, count } }) => {
      const idx = state.products.findIndex((product) => {
        if (updatingProduct.type === PIZZA_SECTION.id && product.type === PIZZA_SECTION.id) {
          return getPizzaKey(product) === getPizzaKey(updatingProduct);
        }
        return product.id === updatingProduct.id && product.type === updatingProduct.type;
      });
      console.log(state.products[idx].name);
      if (state.products[idx].count > count) {
        state.totalPrice -= state.products[idx].price;
      } else {
        state.totalPrice += state.products[idx].price;
      }
      state.products[idx].count = count;
    },
    removeProduct: (state, { payload: { product: updatingProduct } }) => {
      const removingIndex = state.products.findIndex((product) => {
        if (updatingProduct.type === PIZZA_SECTION.id && product.type === PIZZA_SECTION.id) {
          return getPizzaKey(product) === getPizzaKey(updatingProduct);
        }
        return product.id === updatingProduct.id && product.type === updatingProduct.type;
      });
      state.totalPrice -= state.products[removingIndex].price;
      state.products.splice(removingIndex, 1);
    },
    resetBasket: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
    updateContact: (state, { payload: { key, value } }) => {
      state.contact[key] = value;
    },
    setMainContact: (state, { payload: { name, phone } }) => {
      state.contact.name = name;
      state.contact.phone = phone;
    },
    updatePayment: (state, { payload: { key, value } }) => {
      state.payment[key] = value;
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

export const changeCountOfProductInBasket = ({ product, count }) => (dispatch) => {
  try {
    dispatch(updateProductCount({ product, count }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const removeProductFromBasket = ({ product }) => (dispatch) => {
  try {
    dispatch(removeProduct({ product }));
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

export const updateContactData = ({ value, key }) => (dispatch) => {
  try {
    dispatch(updateContact({ value, key }));
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const updatePaymentData = ({ value, key }) => (dispatch) => {
  try {
    dispatch(updatePayment({ value, key }));
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

export const makeOrder = (cb) => (dispatch, getState) => {
  try {
    const {
      contact,
      payment,
      comment,
      contact: {
        name,
        phone,
        street,
        houseNumber
      }
    } = getState().basketStore;
    if (!name.trim().length
      || phone.length < 16
      || !street.trim().length
      || !houseNumber.trim().length
    ) {
      throw new Error('Не все обязательные поля заполнены');
    }
    // Simulated server request
    // request({ ...contact, ...payment, comment });
    dispatch(resetBasket());
    cb();
    return true;
  } catch (err) {
    if (IS_DEV) {
      console.error(err);
    }
  }
};

export const basketProductsSelector = ({ basketStore }) => basketStore.products;

export const contactSelector = ({ basketStore }) => basketStore.contact;

export const paymentSelector = ({ basketStore }) => basketStore.payment;

export const commentSelector = ({ basketStore }) => basketStore.comment;

export const totalPriceSelector = ({ basketStore }) => basketStore.totalPrice;
