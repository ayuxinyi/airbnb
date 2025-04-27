import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { Rating } from "@mui/material";

import { RoomWrapper } from "./style";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
// import { Rate, ConfigProvider } from "antd";

const RoomItem = memo((props) => {
  const { roomInfo, roomWidth = "25%", itemClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();
  const controlHandler = (e, direction = "prev") => {
    e.stopPropagation();
    const length = roomInfo.picture_urls.length;
    let newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;

    setCurrentIndex(newIndex);
    // 切换到上一个或下一个幻灯片
    sliderRef.current[direction]();
  };
  const getComputedStyle = (index) => {
    const length = roomInfo.picture_urls.length;
    if (currentIndex < 3 && index === 6) {
      return true;
    }
    if (
      currentIndex >= 3 &&
      currentIndex < length - 3 &&
      (index === currentIndex - 3 || index === currentIndex + 3)
    ) {
      return true;
    }
    if (currentIndex >= length - 3 && index === length - 7) {
      return true;
    }
  };

  const itemClickHandler = () => {
    itemClick && itemClick(roomInfo);
  };

  const pictureElement = () => (
    <div className="cover">
      <img src={roomInfo.picture_url} alt="" />
    </div>
  );

  const sliderElement = () => (
    <div className="swiper">
      <div className="controls">
        {currentIndex > 0 && (
          <button
            aria-label="上一张"
            className="prev"
            onClick={(e) => controlHandler(e)}
          >
            <IconArrowLeft />
          </button>
        )}
        {currentIndex < roomInfo.picture_urls.length - 1 && (
          <button
            aria-label="下一张"
            className="next"
            onClick={(e) => controlHandler(e, "next")}
          >
            <IconArrowRight />
          </button>
        )}
      </div>
      <Carousel ref={sliderRef} dots={false}>
        {roomInfo.picture_urls.map((item) => (
          <div key={item} className="cover">
            <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
      <div className="indicator-wrap">
        <Indicator currentIndex={currentIndex}>
          {roomInfo.picture_urls.map((_, index) => (
            <div key={index} className="dot">
              <span
                className={classNames(
                  "dot-wrap",
                  {
                    active: currentIndex === index,
                  },
                  {
                    little: getComputedStyle(index),
                  }
                )}
              ></span>
            </div>
          ))}
        </Indicator>
      </div>
    </div>
  );

  return (
    <RoomWrapper
      $color={roomInfo.verify_info.text_color}
      $contentcolor={roomInfo.bottom_info?.content_color}
      $contentsize={roomInfo.bottom_info?.font_size}
      $width={roomWidth}
      onClick={() => itemClickHandler(roomInfo.id)}
    >
      <div className="inner">
        {!roomInfo.picture_urls ? pictureElement() : sliderElement()}
        <div className="desc">{roomInfo.verify_info.messages.join(" · ")}</div>
        <div className="name">{roomInfo.name}</div>
        <div className="price">{roomInfo.price_format}/晚</div>
        {/* <ConfigProvider theme={{
          starColor: roomInfo.star_rating_color,
        }}>
          <Rate
            disabled
            allowHalf
            defaultValue={roomInfo.reviews_count}
          />
        </ConfigProvider> */}
        <div className="bottom">
          <Rating
            readOnly
            defaultValue={roomInfo.star_rating ?? 5}
            precision={0.1}
            sx={{ color: roomInfo.star_rating_color, fontSize: "12px" }}
          />
          <span className="count">{roomInfo.reviews_count}</span>
          {roomInfo.bottom_info && (
            <span className="extra">·{roomInfo?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  roomInfo: PropTypes.object.isRequired,
  roomWidth: PropTypes.string.isRequired,
  itemClick: PropTypes.func,
};

export default RoomItem;
