import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_PRODUCTS_BASE_URL_API;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct[], null>({
      query: () => ({
        url: "/products",
      }),
    }),
    getProductbyId: builder.query<IProduct, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getCategories: builder.query<string[], null>({
      query: () => ({
        url: "/products/categories",
      }),
    }),
    getCategoryByTitle: builder.query<IProduct[], string>({
      query: (title) => ({
        url: `/products/category/${title}`,
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductbyIdQuery, useGetCategoriesQuery, useGetCategoryByTitleQuery } = productsApi;
