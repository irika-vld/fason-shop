import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_PRODUCTS_BASE_URL_API;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProducts[], null>({
      query: () => ({
        url: "/products",
      }),
    }),
    getProductbyId: builder.query<IProducts, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getCategories: builder.query<string[], null>({
      query: () => ({
        url: "/products/categories",
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductbyIdQuery, useGetCategoriesQuery } = productsApi;
