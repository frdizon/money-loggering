import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import dayjs from "dayjs";

export interface TActivity {
  id: number;
  timestamp: string;
  category: string;
  name: string;
  amount: number;
  categoryid: number;
}

export const activityApi = createApi({
  reducerPath: "activityApi",
  tagTypes: ["activity"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/activity`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authToken.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getActivities: builder.query<TActivity[], void>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["activity"],
      transformResponse: (response: Record<string, string>[]) => {
        return response.map(
          (rawActivity) =>
            ({
              ...rawActivity,
              timestamp: dayjs(rawActivity["timestamp"]).toISOString(),
            } as TActivity)
        );
      },
    }),
    postActivity: builder.mutation<void, Omit<TActivity, "id">>({
      query: (requestBody) => ({
        url: "",
        method: "POST",
        body: {
          timestamp: requestBody.timestamp,
          activity: requestBody.name,
          categoryId: requestBody.category,
          amount: requestBody.amount,
        },
      }),
      invalidatesTags: ["activity"],
    }),
    putActivity: builder.mutation<void, TActivity>({
      query: (requestBody) => ({
        url: `${requestBody.id}`,
        method: "PUT",
        body: {
          timestamp: requestBody.timestamp,
          activity: requestBody.name,
          categoryId: requestBody.categoryid,
          amount: requestBody.amount,
        },
      }),
      invalidatesTags: ["activity"],
    }),
    deleteActivity: builder.mutation<void, number>({
      query: (activityId) => ({
        url: `${activityId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["activity"],
    }),
  }),
});

export const {
  useGetActivitiesQuery,
  usePostActivityMutation,
  usePutActivityMutation,
  useDeleteActivityMutation,
} = activityApi;
