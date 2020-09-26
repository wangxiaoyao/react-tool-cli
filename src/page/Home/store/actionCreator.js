import actionType from "./actionType";
import { getAsyncDataRedux } from "../service";

export const addNumActionCreator = () => {
  return {
    type: actionType.addNum,
    payload: 1,
  };
};

export const getAsyncDataReduxActionCreator = () => {
  return async (dispatch, getState) => {
    const data = await getAsyncDataRedux();
    if (data.code === 0) {
      dispatch({
        type: actionType.getAsyncDataRedux,
        payload: data,
      });
    }
  };
};
