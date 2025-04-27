import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  position: fixed;
  top: 80px;
  z-index: 100;
  background-color: #fff;
  width: 100%;

  .item {
    margin: 0 4px 0 8px;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    color: ${(props) => props.theme.text.infoColor};
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShow}
    &.active {
      background: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`;
