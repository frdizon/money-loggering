import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Cookies from "js-cookie";

export interface AuthTokenState {
  token: string;
}

const initialState: AuthTokenState = {
  token: Cookies.get("authToken") ?? "",
};

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("authToken", action.payload, {
        expires: 1,
      });
    },
    clear: (state) => {
      state.token = "";
      Cookies.remove("authToken");
    },
  },
});

export const { set, clear } = authTokenSlice.actions;

export const selectAuthToken = (state: RootState) => state.authToken.token;

export default authTokenSlice.reducer;
