import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

import { HeadWrapper, SearchWrapper } from "./style";
import HeaderLeft from "./components/header-left";
import HeaderCenter from "./components/header-center";
import HeaderRight from "./components/header-right";
import useScrollPosition from "@/hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";

// 封装顶部Header组件
export default memo(function AppHeader() {
  // 定义组件内部的状态,是否为搜索状态
  const [isSearch, setIsSearch] = useState(false);
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.app.headerConfig,
    }),
    shallowEqual
  );
  // 监听滚动
  const { scrollY } = useScrollPosition();
  // 记录滚动位置
  const scrollPosition = useRef(0);
  console.log(isSearch);
  // 只要搜索框没有打开,根据滚动来记录当前位置
  if (!isSearch) scrollPosition.current = scrollY;
  // 在搜索快打开时,只要在原先的基础上滚动了,就关闭搜索框
  if (isSearch && Math.abs(scrollY - scrollPosition.current) > 0)
    setIsSearch(false);
  // 透明度的逻辑
  const isAlpha = headerConfig.topAlpha && scrollY === 0;
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeadWrapper
        $isAlpha={isAlpha}
        className={classNames({ fixed: headerConfig.isFixed })}
      >
        <div className="header">
          <div className="header-wrapper">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              setIsSearch={setIsSearch}
            />
            <HeaderRight />
          </div>
          <SearchWrapper $isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && (
          <div className="shadow" onClick={() => setIsSearch(false)}></div>
        )}
      </HeadWrapper>
    </ThemeProvider>
  );
});
