import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.color.foggyColor};
  .btns {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 10px;
    .btn {
      border-radius: 40px;
      padding: 8px 10px;
      font-weight: 600;
      color: ${(props) =>
        props.theme.isAlpha ? "#fff" : props.theme.text.infoColor};
      &:hover {
        background-color: ${(props) =>
          props.theme.isAlpha ? "rgba(255,255,255,0.1)" : "#f5f5f5"};
      }
    }
  }
  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    border: 1px solid #dddddd;
    padding: 2px 10px;
    background-color: #fff;
    ${(props) => props.theme.mixin.boxShow};
    position: relative;
    .dot {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: red;
      top: 2px;
      right: 10px;
    }
    .panel {
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      position: absolute;
      border-radius: 16px;
      right: 0;
      top: 40px;
      color: ${(props) => props.theme.text.infoColor};
      .top,
      .bottom {
        padding: 8px 0;
        .item {
          line-height: 40px;
          padding: 0px 16px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #dddddd;
      }
    }
  }
`;
