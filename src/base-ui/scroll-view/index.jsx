import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";

const ScrollView = memo((props) => {
  // 定义内部状态,数据变化需要重新渲染组件,所以使用useState来保存数据
  const [showNext, setshowNext] = useState(false);
  const [showPrev, setshowPrev] = useState(false);
  // 这些数据的变化不会导致组件重新渲染,所以使用useRef来保存数据
  const scrollIndex = useRef(0);
  const scrollRef = useRef(null);
  const distance = useRef(0);

  // 定义副作用函数,组件渲染完毕判断是否显示右边按钮
  useEffect(() => {
    // 可以滚动的区域
    const scrollWidth = scrollRef.current.scrollWidth;
    // 展示的宽度
    const clientWidth = scrollRef.current.clientWidth;
    // 可滚动距离
    distance.current = scrollWidth - clientWidth;
    // 通过判断可滚动距离是否大于0来判断是否显示右边按钮
    setshowNext(distance.current > 0);
  }, [props.children]);

  // 按钮点击事件,滚动到上一个元素位置
  const scrollHandler = (isRight = true) => {
    // 根据当前元素的下标获取到下一个元素的下标
    const newScrollIndex = isRight
      ? scrollIndex.current + 1
      : scrollIndex.current - 1;
    // 获取到下一个元素相对于最近的定位父元素的偏移量
    const offsetLeft = scrollRef.current.children[newScrollIndex].offsetLeft;
    // offsetLeft是相对于最近的定位父元素的偏移量,如果没有定位祖先元素,则为
    // 相对于body元素的偏移量
    scrollRef.current.style = `transform: translateX(-${offsetLeft}px)`;
    // 更新当前元素的下标
    scrollIndex.current = newScrollIndex;
    // 更新右边按钮的显示状态
    setshowNext(distance.current > offsetLeft);
    setshowPrev(offsetLeft > 0);
  };
  return (
    <ScrollWrapper>
      {showPrev && (
        <button
          className="left"
          onClick={() => {
            scrollHandler(false);
          }}
        >
          <IconArrowLeft />
        </button>
      )}
      {showNext && (
        <button className="right" onClick={scrollHandler}>
          <IconArrowRight />
        </button>
      )}
      <div className="scroll">
        <div ref={scrollRef} className="scroll-content">
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  );
});

export default ScrollView;
