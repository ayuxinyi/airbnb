import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop() {
  const location = useLocation();
  // 每次路由变化时, 让页面滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}
