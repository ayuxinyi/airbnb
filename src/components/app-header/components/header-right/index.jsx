import React, { memo, useEffect, useState } from "react";

import { RightWrapper } from "./style";
import IconLanguage from "@/assets/svg/icon_language";
import IconMenu from "@/assets/svg/icon_menu";
import IconUser from "@/assets/svg/icon_user";

export default memo(function HeaderRight() {
  // 定义组件内部状态
  const [showPanel, setShowPanel] = useState(false);
  // 编写副作用代码
  useEffect(() => {
    const handler = () => {
      setShowPanel(false);
    };
    // 添加事件监听器
    // 点击空白区域隐藏下拉面板
    window.addEventListener("click", handler);
    // 窗口失去焦点隐藏下拉面板
    window.addEventListener("blur", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("blur", handler);
    };
  }, [showPanel]);
  // 事件处理函数
  const profileClick = (e) => {
    e.stopPropagation();
    setShowPanel(!showPanel);
  };
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconLanguage />
        </span>
      </div>
      <div className="profile" onClick={profileClick}>
        <IconMenu />
        <IconUser />
        <span className="dot"></span>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租方源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});
