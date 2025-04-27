import styled from "styled-components";
export const LeftWrapper = styled.div.attrs((props) => ({
  $color: props.$color || props.theme.color.primaryColor,
}))`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  svg {
    /* 第一种方式,使用 css变量 */
    /* color: var(--primary-color); */
    /* 第二种方式,使用 styled-components的ThemeProvider注入 theme */
    color: ${(props) => (props.theme.isAlpha ? "#fff" : props.$color)};
  }
`;
