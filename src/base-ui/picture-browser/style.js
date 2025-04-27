import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  .header {
    height: 94px;
    padding: 40px 40px 20px;
    display: flex;
    box-sizing: border-box;
    position: relative;
    align-items: center;

    .close {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-weight: 700;
      padding: 8px 16px;
      border-radius: 8px;
      height: 18px;
      &:hover {
        background-color: #4a4a4a;
      }
    }
    .indexShow {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 16px;
    }
  }
  .slider {
    flex: 1;
    position: relative;
    .controls {
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 90%;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
      .btn {
        height: 45px;
        width: 45px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background-color: #4a4a4a;
        }
      }
    }
    &-wrapper {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      margin: 0 auto;
      img {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
      .picture-animate-enter {
        opacity: 0;
        transform: translateX(
          ${(props) => (props.direction === "prev" ? "-100%" : "100%")}
        );
      }
      .picture-animate-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }
      .picture-animate-exit {
        opacity: 1;
      }
      .picture-animate-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }
  .preview {
    height: 100px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    &-wrapper {
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      position: absolute;
      /* 相对于底部定位,使得高度变化时由下往上变化 */
      bottom: 10px;
      .desc {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .count {
          span:last-child {
            margin-left: 5px;
          }
        }
        .toggle {
          cursor: pointer;
        }
      }
      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? "67px" : "0")};
        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
            transition: opacity 300ms ease;
            &.active {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
