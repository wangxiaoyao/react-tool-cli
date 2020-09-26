import actionType from "./actionType";

const defaultVal = {
  num: 0,
  asyncDataRedux: "",
};

export default (state = defaultVal, action) => {
  switch (action.type) {
    case actionType.addNum:
      const numTemp = state.num;
      return { ...state, num: numTemp + action.payload };
    case actionType.getAsyncDataRedux:
      return { ...state, asyncDataRedux: action.payload.data };
    default:
      return state;
  }
};
