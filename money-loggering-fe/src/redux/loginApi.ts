// features/api/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { clear, set } from "./authTokenSlice";

interface TLoginRequestBody {
  username: string;
  password: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    login: builder.query<string, TLoginRequestBody>({
      query: (credentials) => ({
        url: "account/login",
        method: "POST",
        body: credentials,
        responseHandler: "text",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: authToken } = await queryFulfilled;
          console.log(authToken);
          dispatch(set(authToken));
        } catch (error) {
          console.log(error, error);
          dispatch(clear());
        }
      },
    }),
  }),
});

export const { useLazyLoginQuery } = loginApi;
