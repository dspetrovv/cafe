import { combineReducers } from "@reduxjs/toolkit";
import { catalogStore } from "../pages/Catalog/catalogSlice";

const reducers = {
  catalogStore
};
const rootReducer = combineReducers(reducers);

export default rootReducer;