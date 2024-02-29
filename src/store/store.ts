import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSlice";
import { productsApi } from "../services/productsService";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
