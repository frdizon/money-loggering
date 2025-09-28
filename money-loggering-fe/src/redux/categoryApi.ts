import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface TCategory {
  id: number;
  name: string;
}

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  tagTypes: ["category"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/category`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authToken.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<TCategory[], void>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    postCategory: builder.mutation<void, Omit<TCategory, "id">>({
      query: (requestBody) => ({
        url: "",
        method: "POST",
        body: requestBody,
      }),
      invalidatesTags: ["category"],
    }),
    putCategory: builder.mutation<void, TCategory>({
      query: (requestBody) => ({
        url: `${requestBody.id}`,
        method: "PUT",
        body: { name: requestBody.name },
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  usePostCategoryMutation,
  usePutCategoryMutation,
} = categoryApi;
