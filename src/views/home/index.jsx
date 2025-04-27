import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./components/home-banner";
import { fetchHomeDataAction } from "@/store/features/home";
import HomeSection from "./components/home-section";
import HomeSectionDiscount from "./components/home-section-discount";
import { isEmpty } from "@/utils";
import HomeSectionCity from "./components/home-section-city";
import HomeSectionPlus from "./components/home-section-plus";
import { setHeaderConfig } from "@/store/features/app";

export default memo(function Home() {
  // 拿取store中的数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longForCity,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longForCity: state.home.longForCity,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );
  // 获取dispatch函数，用于分发action
  const dispatch = useDispatch();
  // 处理副作用逻辑,发送网络请求获取数据
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(setHeaderConfig({ isFixed: true, topAlpha: true }));
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {!isEmpty(goodPriceInfo) && <HomeSection sectionInfo={goodPriceInfo} />}
        {!isEmpty(highScoreInfo) && <HomeSection sectionInfo={highScoreInfo} />}
        {!isEmpty(longForCity) && <HomeSectionCity sectionInfo={longForCity} />}
        {/* 判断discountInfo是否为空，不为空才渲染组件,确保子组件中的数据不为空 */}
        {!isEmpty(discountInfo) && (
          <HomeSectionDiscount sectionInfo={discountInfo} />
        )}
        {!isEmpty(hotRecommendInfo) && (
          <HomeSectionDiscount sectionInfo={hotRecommendInfo} />
        )}
        {!isEmpty(plusInfo) && <HomeSectionPlus sectionInfo={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});
