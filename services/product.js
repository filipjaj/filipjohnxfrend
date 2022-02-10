import { baseApi } from "./baseApi";

// Define a service using a base URL and expected endpoints

export const productApi = baseApi.injectEndpoints({
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
