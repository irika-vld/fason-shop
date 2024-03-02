import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/interfaces";

interface ProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
