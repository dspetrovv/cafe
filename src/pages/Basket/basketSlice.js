import { createSlice } from "@reduxjs/toolkit";

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
    addProduct: (state, { payload }) => {
      state.products.push(payload);
      state.totalPrice += payload.price;
    },
    updateProductCount: (state, { payload: { productId, count } }) => {
      const idx = state.products.findIndex((product) => product.id === productId);
      if (state.products[idx].count > count) {
        state.totalPrice -= state.products[idx].price;
      } else {
        state.totalPrice += state.products[idx].price;
      }
      state.products[idx] = { ...state.products[idx], count };
    },
    removeProduct: (state, { payload: { productId } }) => {
      state.totalPrice -= state.products.find((product) => product.id === productId).price;
      state.products.splice(productId, 1);
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
  updateProductData,
  removeProduct,
  resetBasket,
  updateContact,
  setMainContact,
  updatePayment,
  updateComment,
} = BasketSlice.actions;

export const addProductToBasket = (product) => (dispatch) => {
  try {
    dispatch(addProduct(product));
  } catch (err) {
    //Simulating error
  }
};

export const changeCountOfProductInBasket = ({ productId, count }) => (dispatch) => {
  try {
    dispatch(updateProductData({ productId, count }));
  } catch (err) {
    //Simulating error
  }
};

export const removeProductFromBasket = ({ productId }) => (dispatch) => {
  try {
    dispatch(removeProduct({ productId }));
  } catch (err) {
    //Simulating error
  }
};

export const setDefaultContactData = () => (dispatch) => {
  try {
    const name = '';
    const phone = '';
    dispatch(setMainContact({ name, phone }));
  } catch (err) {
    //Simulating error
  }
};

export const updateContactData = (data) => (dispatch) => {
  try {
    dispatch(updateContact(data));
  } catch (err) {
    //Simulating error
  }
};

export const updatePaymentData = (data) => (dispatch) => {
  try {
    dispatch(updatePayment(data));
  } catch (err) {
    //Simulating error
  }
};

export const addComment = (comment) => (dispatch) => {
  try {
    dispatch(updateComment(comment));
  } catch (err) {
    //Simulating error
  }
};