import { baseApi } from "./baseApi";

// Define a service using a base URL and expected endpoints

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryById: builder.query({
      query: (id) => `Category/${id}`,
    }),
    getAllCategories: builder.query({
      query: () => `Category`,
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoryByIdQuery, useGetAllCategoriesQuery } =
  categoryApi;
