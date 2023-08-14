import { Component } from './core/component.js';
import { setA, setB, store } from './store/index.js';
import { $ } from './utils/dom.js';
export class App extends Component {
  template() {
    return `
        <p>a + b = ${store.getState().a + store.getState().b}</p>
        <input id="stateA" value="${store.getState().a}" size="5" />
        <input id="stateB" value="${store.getState().b}" size="5" />
    `;
  }

  setEvent() {
    const { $el } = this;
    $($el, '#stateA').addEventListener('change', ({ target }) => {
      store.dispatch(setA(Number(target.value)));
    });
    $($el, '#stateB').addEventListener('change', ({ target }) => {
      store.dispatch(setB(Number(target.value)));
    });
  }
}

new App(document.querySelector('#app'));
