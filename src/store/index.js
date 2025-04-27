import { configureStore } from "@reduxjs/toolkit";
import features from "./features";

const store = configureStore({
  reducer: { ...features },
  devTools: true,
});
export default store;
