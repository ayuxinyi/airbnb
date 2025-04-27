import React from "react";
import ReactDOM from "react-dom/client";
// 引入路由
import { BrowserRouter } from "react-router-dom";
// 引入redux的Provider组件
import { Provider } from "react-redux";
// 引入styled-components的ThemeProvider组件
import { ThemeProvider } from "styled-components";
// 引入mui的主题配置组件
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
// 引入redux
import store from "./store";
import App from "./App";
// 引入normalize.css重置样式
import "normalize.css";
import "@/assets/css/index.less";
import theme from "./assets/theme";

// 创建mui主题
const muiTheme = createTheme(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // {/* 注入store */}
  <Provider store={store}>
    {/* // 包裹Suspense组件，解决懒加载组件的loading问题 */}
    {/* 放在这里容易出现组件多次渲染的问题,我们可以在App组件中处理 */}
    {/* <Suspense fallback={<div>loading...</div>}> */}
    {/* 注入路由 */}
    <BrowserRouter>
      {/* 注入主题 */}
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
    {/* </Suspense> */}
  </Provider>
);
