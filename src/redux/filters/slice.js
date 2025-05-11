import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const { name, number } = action.payload;
      if (name !== undefined) {
        state.name = name;
      }
      if (number !== undefined) {
        state.number = number;
      }
    },
  },
});

export const { changeFilter } = slice.actions;

export const filtersReducer = slice.reducer;
