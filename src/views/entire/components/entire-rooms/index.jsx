import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RoomWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { setDetailInfo } from "@/store/features/detail";

const EntireRooms = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { roomList, total, loading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      total: state.entire.total,
      loading: state.entire.loading,
    }),
    shallowEqual
  );
  const itemClick = useCallback(
    (item) => {
      // 方式一:使用动态路由参数传参
      // navigate(`/detail/${id}`);
      // 方式二:使用query参数传参
      // navigate(`/detail?id=${id}`);
      // 方式三:使用state参数传参
      // navigate("/detail", { state: { id } });
      // 方式四:对于那些需要在多个页面之间共享的数据,
      // 可以使用redux
      dispatch(setDetailInfo(item));
      navigate("/detail");
    },
    [dispatch, navigate]
  );

  return (
    <RoomWrapper>
      <h2>{total}处住所</h2>
      <div className="list">
        {roomList.map((item) => (
          <RoomItem
            itemClick={itemClick}
            roomInfo={item}
            roomWidth="20%"
            key={item._id}
          >
            {item.name}
          </RoomItem>
        ))}
      </div>
      {loading && <div className="cover"></div>}
    </RoomWrapper>
  );
});

export default EntireRooms;
