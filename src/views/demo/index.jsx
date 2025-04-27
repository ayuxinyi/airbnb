import Indicator from "@/base-ui/indicator";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo(() => {
  const names = [
    "张三",
    "李四",
    "王五",
    "赵六",
    "孙七",
    "周八",
    "吴九",
    "郑十",
    "王十一",
  ];
  const [selectIndex, setSelectIndex] = useState(0);
  const toggleClickHandler = (isNext = true) => {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) {
      newIndex = names.length - 1;
    }
    if (newIndex > names.length - 1) {
      newIndex = 0;
    }
    setSelectIndex(newIndex);
  };
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={() => toggleClickHandler(false)}>上一个</button>
        <button onClick={() => toggleClickHandler()}>下一个</button>
        <div className="list">
          <Indicator currentIndex={selectIndex}>
            {names.map((name) => {
              return <button key={name}>{name}</button>;
            })}
          </Indicator>
        </div>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
