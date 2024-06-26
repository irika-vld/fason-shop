import { createSlice } from "@reduxjs/toolkit";
import { getFavoritesFromLS } from "../../utils/getFavoritesFromLS";
import { IFavorites } from "../../interfaces/interfaces";

interface favoritesState {
  favorites: IFavorites[];
}

const initialState: favoritesState = {
  favorites: getFavoritesFromLS(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const productInFavorites = state.favorites.find(
        (product) => product.id === action.payload.id
      );
      if (!productInFavorites) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
