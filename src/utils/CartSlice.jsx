// utils/CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    k: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.k += 1;
    },
  },
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
