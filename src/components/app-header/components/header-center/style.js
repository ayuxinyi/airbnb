import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    cursor: pointer;
    /* 脱离标准流,使元素在动画时，不会产生挤压 */
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    padding: 0 12px;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    border-radius: 24px;
    cursor: pointer;
    will-change: transform, opacity;
    /* transition: all 250ms ease; */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    .text {
      padding: 0 16px;
      color: ${(props) => props.theme.text.primaryColor};
      font-weight: 600;
    }
    .search {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: #fff;
      }
    }
    ${(props) => props.theme.mixin.boxShow}
  }
  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;
    &-info {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-exit {
    opacity: 0;
  }
  .bar-exit-active {
    opacity: 0;
    transition: opacity 250ms ease;
  }
`;
