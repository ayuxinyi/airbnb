import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  .indicator {
    position: relative;
    display: flex;
    transition: all 0.3s ease;
    > * {
      flex-shrink: 0;
    }
  }
`;
