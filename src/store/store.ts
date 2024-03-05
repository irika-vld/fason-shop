import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import { productsApi } from "../services/productsService";
import favoritesSlice from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    favorites: favoritesSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
