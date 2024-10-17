import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    AddToBag: (state, action) => {
      state.push(action.payload);
    },
    remveFromBag:(state, action) => {
      return state.filter(itemId => itemId !== action.payload);
    },
  },
});

export const BagAction = BagSlice.actions;
export default BagSlice;
