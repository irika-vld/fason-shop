import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../interfaces/interfaces";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProducts[], null>({
      query: () => ({
        url: "/products",
      }),
    }),
  }),
});

export const { useGetProductQuery } = productsApi;
