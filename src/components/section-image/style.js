import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  .inner {
    padding: 8px;
    .container {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
    }

    img {
      width: 100%;
    }
    .info {
      position: absolute;
      bottom: 0px;
      padding: 0 0px 32px;
      color: #fff;
      z-index: 100;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      .city {
        font-size: 18px;
        font-weight: 600;
      }

      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
    .bg-cover {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
    }
  }
`;
