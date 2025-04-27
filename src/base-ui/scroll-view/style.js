import styled from "styled-components";

export const ScrollWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .scroll {
    overflow: hidden;
  }
  .scroll-content {
    display: flex;
    align-items: center;
    transition: all 0.3s;
  }
  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    background-clip: padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.08);
    color: ${(props) => props.theme.text.primaryColor};
    box-shadow: 0 0 0 1px transparent, 0 0 0 4px transparent,
      0 2px 4px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    position: absolute;
    z-index: 9;
    top: 50%;
    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }
    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }
    ${(props) => props.theme.mixin.boxShow}
  }
`;
