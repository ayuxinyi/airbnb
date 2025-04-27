import styled from "styled-components";

export const RoomWrapper = styled.div.attrs((props) => ({
  $color: props.$color || props.theme.color.secondaryColor,
  $contentcolor: props.$contentcolor || props.theme.color.secondaryColor,
  $contentsize: props.$contentsize || "12",
}))`
  width: ${(props) => props.$width};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  cursor: pointer;
  .inner {
    width: 100%;
    color: ${(props) => props.theme.text.primaryColor};
    .swiper {
      position: relative;
      &:hover {
        .indicator-wrap {
          display: block;
        }
        .controls {
          opacity: 1;
        }
      }
      .controls {
        position: absolute;
        left: 0px;
        top: 0;
        bottom: 0;
        right: 0px;
        display: block;
        z-index: 1;
        opacity: 0;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: ${(props) => props.theme.text.primaryColor};
          box-shadow: 0 0 0 1px transparent, 0 0 0 4px transparent,
            0 2px 4px rgba(0, 0, 0, 0.18);
          ${(props) => props.theme.mixin.boxShow}
          &.next {
            right: 15px;
          }
          &.prev {
            left: 15px;
          }
        }
      }
      .indicator-wrap {
        position: absolute;
        bottom: 10px;
        width: 30%;
        left: 0;
        right: 0;
        margin: 0 auto;
        overflow: hidden;
        display: none;
        .dot {
          width: 14.29%;
          display: flex;
          align-items: center;
          justify-content: center;
          &-wrap {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;
            transition: all 0.3s;
            &.little {
              width: 4px;
              height: 4px;
            }
            &.active {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }
    .cover {
      position: relative;
      box-sizing: border-box;
      /* 使用padding固定高度，避免图片大小变化时，
      导致容器高度变化。padding设置为百分比,是相对于
      父元素宽度的百分比 
      */
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* 设置图片的缩放方式，cover表示填充整个容器 */
        object-fit: cover;
      }
    }
    .desc {
      font-size: 12px;
      font-weight: 700;
      margin: 10px 0 5px;
      color: ${(props) => props.$color};
    }
    .name {
      font-size: 15px;
      font-weight: 500;
      word-wrap: break-word;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .price {
      margin: 8px 0;
    }
    .bottom {
      display: flex;
      align-items: center;
      font-size: ${(props) => props.$contentsize}px;
      color: ${(props) => props.$contentcolor};
      font-weight: 600;
      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`;
