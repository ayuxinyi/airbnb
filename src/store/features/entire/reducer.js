import * as actions from "./constants";
const initialState = {
  currentPage: 1, // 当前页码
  pageSize: 10, // 每页显示多少条数据
  roomList: [], // 房间列表数据
  total: 0, // 数据总条数
  loading: false, // 是否正在加载数据
};

function reducer(state = initialState, { type, payload }) {
  // 根据action的类型返回新的状态对象
  switch (type) {
    case actions.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case actions.CHANGE_ROOM_LIST:
      return { ...state, roomList: payload };
    case actions.CHANG_TOTAL_COUNT:
      return { ...state, total: payload };
    case actions.CHANGE_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
}

export default reducer;
