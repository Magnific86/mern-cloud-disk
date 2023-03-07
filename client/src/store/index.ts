import { configureStore } from "@reduxjs/toolkit";
import { fileReducer } from "./reducers/fileSlice";
import { userReducer } from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    file: fileReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
