import * as actionTypes from "./constants";
import api from "@/api";

export const pageChangeAction = (payload) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  payload,
});

export const roomListAction = (payload) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  payload,
});

export const totalChangeAction = (payload) => ({
  type: actionTypes.CHANG_TOTAL_COUNT,
  payload,
});

export const loadingChangeAction = (payload) => ({
  type: actionTypes.CHANGE_LOADING,
  payload,
});

// 通过传参获取当前页码,这是一种获取当前页码的方式,另一种是通过getState获取当前页码
export const fetchRoomDataAction = (payload = 1) => {
  return async (dispatch, getState) => {
    // 修改当前页码
    dispatch(pageChangeAction(payload));
    // 修改加载状态
    dispatch(loadingChangeAction(true));
    // 获取最新的页码,通过getState获取redux中的数据,这是一种
    // 方式
    // const currentPage = getState().entire.currentPage - 1;
    // 获取房间列表数据
    const res = await api.entire.getRoomList((payload - 1) * 20);
    // 修改加载状态
    dispatch(loadingChangeAction(false));
    // 更新房间列表数据和总数信息
    dispatch(roomListAction(res.list));
    dispatch(totalChangeAction(res.totalCount));
  };
};
