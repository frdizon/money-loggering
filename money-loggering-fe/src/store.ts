import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./redux/loginApi";
import authTokenReducer from "./redux/authTokenSlice";
import { activityApi } from "./redux/activityApi";
import { categoryApi } from "./redux/categoryApi";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    authToken: authTokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      loginApi.middleware,
      activityApi.middleware,
      categoryApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
