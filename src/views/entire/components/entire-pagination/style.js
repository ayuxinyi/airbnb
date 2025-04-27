import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .MuiPaginationItem-page {
      margin: 0 10px;
      &.Mui-selected {
        background-color: #222;
        color: #fff;
      }
      &:hover {
        text-decoration: underline;
      }
    }

    .desc {
      margin-top: 16px;
      color: #222;
      font-size: 13px;
    }
  }
`;
