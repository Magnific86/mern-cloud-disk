import { IStateFile } from "../storeTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IStateFile = {
  file: {},
};

const slice = createSlice({
  name: "file",
  initialState,
  reducers: {},
});

export const fileReducer = slice.reducer;
export const {} = slice.actions;
