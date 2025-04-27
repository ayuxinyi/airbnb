import apiCollection from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 异步Action,获取首页数据
export const fetchHomeDataAction = createAsyncThunk(
  "home/getHomeData",
  async (_, { dispatch }) => {
    apiCollection.home.getGoodPrice().then((res) => {
      dispatch(changeGoodPriceInfo(res));
    });
    apiCollection.home.getHighScore().then((res) => {
      dispatch(changeHighScoreInfo(res));
    });
    apiCollection.home.getDiscount().then((res) => {
      dispatch(changeDiscountInfo(res));
    });
    apiCollection.home.getHotRecommend().then((res) => {
      dispatch(changeHotRecommendInfo(res));
    });
    apiCollection.home.getLongfor().then((res) => {
      dispatch(changeLongForCityInfo(res));
    });
    apiCollection.home.getPlus().then((res) => {
      dispatch(changePlusInfo(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForCity: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendInfo(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changeLongForCityInfo(state, { payload }) {
      state.longForCity = payload;
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload;
  //   });
  // },
});

export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeHotRecommendInfo,
  changeLongForCityInfo,
  changePlusInfo,
} = homeSlice.actions;
export default homeSlice.reducer;
