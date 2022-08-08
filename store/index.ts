import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songReducer";

export const reduxStore = configureStore({
  reducer: {
    song: songReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
