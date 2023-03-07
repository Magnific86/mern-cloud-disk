import { IStateUser } from "../storeTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IStateUser = {
  currentUser: "",
  isAuth: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = slice.reducer;
export const {} = slice.actions;
