import styled from "styled-components";

export const HeadWrapper = styled.div`
  box-sizing: border-box;
  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
  }
  .header {
    position: relative;
    z-index: 101;
    background-color: ${(props) =>
      props.theme.isAlpha ? "transparent" : "#fff"};
    transition: all 250ms ease;
    border-bottom: 1px solid #eee;
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "#eee"};
    &-wrapper {
      display: flex;
      align-items: center;
      height: 80px;
      padding: 0 24px;
    }
    &-search {
      height: 100px;
    }
  }
  .shadow {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SearchWrapper = styled.div`
  height: ${(props) => (props.$isSearch ? "100px" : "0px")};
  transition: all 250ms ease;
`;
