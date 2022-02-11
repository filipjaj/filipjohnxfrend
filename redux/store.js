import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { productApi } from "./product";
import { cartReducer } from "./cart.slice";

const reducer = {
  cart: cartReducer,
  [productApi.reducerPath]: productApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export default store;
