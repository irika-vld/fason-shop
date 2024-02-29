// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");

//       if (!response.ok) {
//         throw new Error("Server Error");
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
