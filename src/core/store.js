import { observable } from './observer.js';

export const createStore = (reducer) => {
  // reducer가 실행 후 반환하는 객체를 observable을 통해 관찰하도록 한다.
  const state = observable(reducer());

  // getState가 실제 state가 아닌 frozenState(getter만 있는)를 반환하도록 하기 위해서 생성
  const frozenState = {};
  Object.keys(state).forEach((key) => {
    Object.defineProperty(frozenState, key, {
      get: () => state[key],
    });
  });

  // dispatch로만 state의 값을 변경하도록 한다.
  const dispatch = (action) => {
    const newState = reducer(state, action);
    Object.entries(newState).forEach(([key, value]) => {
      // store의 key가 아니라면 변경을 생략
      if (!state[key]) return;
      state[key] = value;
    });
  };

  const getState = () => frozenState;

  return { dispatch, getState };
};
