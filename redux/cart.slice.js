import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(
        (item) => item.cartId === action.payload.cartId
      );
      if (itemExists) {
        if (itemExists.variants.stock > 0) {
          itemExists.quantity++;
          itemExists.variants.stock--;
        }
      } else {
        if (action.payload.variants.stock > 0) {
          state.push({
            ...action.payload,
            quantity: 1,
            variants: {
              ...action.payload.variants,
              stock: action.payload.variants.stock - 1,
            },
          });
        }
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.cartId === action.payload);
      item.quantity++, item.variants.stock--;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.cartId === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.cartId === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
      item.variants.stock++;
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.cartId === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
