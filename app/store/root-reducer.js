import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "../../lib/features/user/user.reducer";
import { categoriesReducer } from "../../lib/features/categories/categorySlice";
import { cartReducer } from "../../lib/features/cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
