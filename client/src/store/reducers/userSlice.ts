import { ICurrUser, IStateUser } from "../storeTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IStateUser = {
  currentUser: {
    email: "",
    password: "",
  },
  isAuth: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser(state, action: PayloadAction<ICurrUser>) {
      state.currentUser = action.payload;
    },
    toggleAuth(state) {
      state.isAuth = !state.isAuth;
    },
  },
});

export const userReducer = slice.reducer;
export const { saveUser, toggleAuth } = slice.actions;
