import styled from "styled-components";

export const TabWrapper = styled.div`
  span {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShow}
    &:last-child {
      margin-right: 0;
    }
    &.active {
      background-color: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`;
