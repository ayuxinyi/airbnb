import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { BrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon_close";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indicator from "../indicator";
import classNames from "classnames";

const PictureBrowser = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showList, setShowList] = useState(true);

  const directionRef = useRef("prev");
  const nodeRef = useRef(null);
  // 当图片浏览器展示出来时,应该禁止滚动
  useEffect(() => {
    // 渲染完成后,禁止滚动
    document.body.style.overflow = "hidden";
    return () => {
      // 组件卸载时,恢复滚动
      document.body.style.overflow = "auto";
    };
  }, []);
  const { pictures, close } = props;
  const length = pictures.length;
  const closeHandler = () => {
    close && close();
  };
  const clickHandler = (direction = "prev") => {
    if (direction === "prev" && currentIndex === 0) return;
    if (direction === "next" && currentIndex === length - 1) return;
    directionRef.current = direction;
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const imgClickHandler = (index) => {
    if (index === currentIndex) return;
    directionRef.current = index > currentIndex ? "next" : "prev";
    setCurrentIndex(index);
  };
  return (
    <BrowserWrapper direction={directionRef.current} showList={showList}>
      <div className="header">
        <div className="close" onClick={closeHandler}>
          <IconClose onClick={close} />
          <span>关闭</span>
        </div>
        <div className="indexShow">
          <span>
            {currentIndex + 1}/{length}
          </span>
        </div>
      </div>
      <div className="slider">
        <div className="controls">
          <div
            className="btn"
            style={{ opacity: currentIndex === 0 ? 0 : 1 }}
            onClick={() => clickHandler()}
          >
            <IconArrowLeft />
          </div>
          <div
            className="btn"
            style={{ opacity: currentIndex === length - 1 ? 0 : 1 }}
            onClick={() => clickHandler("next")}
          >
            <IconArrowRight />
          </div>
        </div>
        <div className="slider-wrapper">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictures[currentIndex]}
              timeout={200}
              nodeRef={nodeRef}
              classNames="picture-animate"
            >
              <img ref={nodeRef} src={pictures[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="preview-wrapper">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{length}
              </span>
              <span>图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              隐藏照片列表
            </div>
          </div>
          <div className="list" style={{ height: showList ? "67px" : "0" }}>
            <Indicator currentIndex={currentIndex}>
              {pictures.map((item, index) => (
                <div
                  key={item}
                  className="item"
                  onClick={() => imgClickHandler(index)}
                >
                  <img
                    className={classNames({ active: index === currentIndex })}
                    src={item}
                    alt=""
                  />
                </div>
              ))}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictures: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
};

export default PictureBrowser;
