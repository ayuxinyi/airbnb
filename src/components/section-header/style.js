import styled from "styled-components";

export const HeadWrapper = styled.div`
  color: ${(props) => props.theme.text.primaryColor};
  h2 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
