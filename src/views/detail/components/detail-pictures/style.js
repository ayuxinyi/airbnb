import styled from "styled-components";

export const PictureWrapper = styled.div`
  .pictures {
    display: flex;
    align-items: center;
    height: 600px;
    gap: 10px;
    &-left,
    &-right {
      width: 50%;
      height: 100%;
      .item {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-in;
        }
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 200ms ease;
        }
        &:hover {
          .cover {
            opacity: 1;
          }
          img {
            transform: scale(1.05);
          }
        }
      }
    }
    &-right {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      .item {
        width: calc(50% - 5px);
        height: calc(50% - 5px);
      }
    }
  }
`;
