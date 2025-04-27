import styled from "styled-components";

export const FooterWrapper = styled.div.attrs((props) => ({
  $color: props.$color || props.theme.color.secondaryColor,
}))`
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    color: ${(props) => props.$color};
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
    span {
      margin-right: 6px;
    }
  }
`;
