import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EntireWrapper } from "./style";
import EntireFilter from "./components/entire-filter";
import EntireRooms from "./components/entire-rooms";
import EntirePagination from "./components/entire-pagination";
import * as actionTypes from "@/store/features/entire/actionCreator";
import { setHeaderConfig } from "@/store/features/app";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionTypes.fetchRoomDataAction());
    dispatch(setHeaderConfig({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
