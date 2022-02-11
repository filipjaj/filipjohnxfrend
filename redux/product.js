import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frend-ecom-api.azurewebsites.net/",
  }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `Product/${id}`,
    }),
    getAllProducts: builder.query({
      query: () => `Product`,
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByIdQuery, useGetAllProductsQuery } = productApi;
