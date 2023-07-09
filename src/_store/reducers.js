import { combineReducers } from "@reduxjs/toolkit";
import { catalogStore } from "../pages/Catalog/catalogSlice";
import { basketStore } from "../pages/Basket/basketSlice";

const reducers = {
  catalogStore,
  basketStore
};
const rootReducer = combineReducers(reducers);

export default rootReducer;