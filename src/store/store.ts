import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import { productsApi } from "../services/productsService";
import favoritesSlice from "./slices/favoritesSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    favorites: favoritesSlice,
    user: userSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
