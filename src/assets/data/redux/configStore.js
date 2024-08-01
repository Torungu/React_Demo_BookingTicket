import { configureStore } from "@reduxjs/toolkit";
import chairSlice from "./slices/chairSlice";

export const store = configureStore({
  reducer: {
    dataChairs: chairSlice,
  },
});
