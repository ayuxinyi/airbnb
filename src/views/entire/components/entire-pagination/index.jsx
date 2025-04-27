import React, { memo } from "react";
import { Pagination } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { PaginationWrapper } from "./style";
import * as actionTypes from "@/store/features/entire/actionCreator";

const EntirePagination = memo(() => {
  const { total, currentPage, roomList } = useSelector(
    (state) => ({
      total: state.entire.total,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const handleChange = (_, page) => {
    // 更新当前页码,我们将更新页码的派发放到fetchRoomDataAction
    // 中,这样逻辑会更加清晰。
    // dispatch(actionTypes.pageChangeAction(page));
    // 重新获取房源数据
    // 滚动到顶部,这样用户体验更好。
    window.scrollTo(0, 0);
    dispatch(actionTypes.fetchRoomDataAction(page));
  };
  const pageRange = () => {
    const startCount = (currentPage - 1) * 20 + 1;
    const endCount = currentPage * 20;
    return `${startCount}-${endCount}`;
  };
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="pagination">
          <Pagination
            onChange={handleChange}
            page={currentPage}
            count={Math.ceil(total / 20)}
          />
          <div className="desc">
            第{pageRange()}个房源,共超过{total}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
