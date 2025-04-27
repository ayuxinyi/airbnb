import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    info: {},
  },
  reducers: {
    setDetailInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export const { setDetailInfo } = detailSlice.actions;

export default detailSlice.reducer;
