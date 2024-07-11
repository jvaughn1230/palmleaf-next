import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoriesStateType } from "@/types";

export const CATEGORIES_INITIAL_STATE: CategoriesStateType = {
  categories: [],
  name: "",
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setCategoryName(state, action) {
      state.name;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },

    initializeCategory(state, action) {
      const { name } = action.payload;
      state.name = name;
    },
  },
});

export const { setCategories, initializeCategory, setCategoryName } =
  categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
