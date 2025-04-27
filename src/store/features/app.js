import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    headerConfig: {
      isFixed: true,
      topAlpha: false,
    },
  },
  reducers: {
    setHeaderConfig(state, { payload }) {
      state.headerConfig = payload;
    },
  },
});

export const { setHeaderConfig } = appSlice.actions;

export default appSlice.reducer;
