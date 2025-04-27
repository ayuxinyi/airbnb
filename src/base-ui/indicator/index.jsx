import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";

import { IndicatorWrapper } from "./style";
const Indicator = memo((props) => {
  const { currentIndex = 0 } = props;
  const indicatorRef = useRef();

  useEffect(() => {
    const indicator = indicatorRef.current;
    // 获取当前激活的子元素
    const childItem = indicator.children[currentIndex];
    // 获取父元素的宽度
    const clientWidth = indicator.clientWidth;
    // 获取父元素的滚动宽度
    const scrollWidth = indicator.scrollWidth;
    // 获取当前激活的子元素的偏移量以及自身的宽度
    const offsetWidth = childItem.offsetLeft;
    const childClientWidth = childItem.clientWidth;
    // 计算偏移量: 当前激活的子元素的偏移量 + 自身宽度的一半 - 父元素宽度的一半
    let distance = offsetWidth + childClientWidth * 0.5 - clientWidth * 0.5;
    // 计算最大偏移量: 滚动宽度 - 父元素宽度
    let totalDistance = scrollWidth - clientWidth;
    // 如果计算出来的偏移量小于0，则设置为0
    // (左边特殊处理，因为左边可能有空白区域)
    if (distance < 0) distance = 0;
    // 如果计算出来的偏移量大于最大偏移量，则设置为最大偏移量
    // (右边特殊处理，因为右边可能有空白区域)
    if (distance > totalDistance) distance = totalDistance;

    // 设置偏移量
    indicatorRef.current.style.transform = `translateX(${-distance}px)`;
  }, [currentIndex]);

  return (
    <IndicatorWrapper>
      <div ref={indicatorRef} className="indicator">
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};

export default Indicator;
