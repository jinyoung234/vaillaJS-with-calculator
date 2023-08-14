import { observable } from '../core/observer.js';

export const store = {
  state: observable({
    a: 10,
    b: 20,
  }),

  setState(newState) {
    Object.entries(newState).forEach(([key, value]) => {
      if (!this.state[key]) return;
      this.state[key] = value;
    });
  },
};
