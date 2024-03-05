import { createSlice } from "@reduxjs/toolkit";
import { getProductsFromLS } from "../../utils/getProductsFromLS";

interface ProductsState {
  products: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
    quantity: number;
  }[];
}

const initialState: ProductsState = {
  products: getProductsFromLS(),
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
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find((el) => el.id === action.payload);
      if (product) product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find((el) => el.id === action.payload);
      if (product && product.quantity > 1) product.quantity--;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = productsSlice.actions;
export default productsSlice.reducer;
