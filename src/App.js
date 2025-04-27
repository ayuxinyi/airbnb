import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import useScrollTop from "./hooks/useScrollTop";
export default memo(function App() {
  useScrollTop();
  return (
    <div className="app">
      <AppHeader />
      {/* 防止懒加载时的页面闪动 */}
      <Suspense fallback={<div>loading...</div>}>
        <div className="page">
          {/* 配置路由 */}
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  );
});
