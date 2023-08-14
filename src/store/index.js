import { DISPATCH_TABLE } from '../constants/store.js';
import { createStore } from '../core/store.js';

const initState = {
  a: 10,
  b: 20,
};

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case DISPATCH_TABLE.SET_A:
      return { ...state, a: action.payload };
    case DISPATCH_TABLE.SET_B:
      return { ...state, b: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);

export const setA = (payload) => {
  return { type: DISPATCH_TABLE.SET_A, payload };
};

export const setB = (payload) => {
  return { type: DISPATCH_TABLE.SET_B, payload };
};
