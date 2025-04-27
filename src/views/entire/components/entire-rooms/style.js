import styled from "styled-components";

export const RoomWrapper = styled.div`
  position: relative;
  padding: 40px 20px;
  margin-top: 128px;
  h2 {
    margin: 0 0 10px 8px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
