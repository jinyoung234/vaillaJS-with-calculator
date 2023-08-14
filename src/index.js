import { Component } from './core/component.js';
import { store } from './store/index.js';
import { $ } from './utils/dom.js';
export class App extends Component {
  template() {
    return `
        <p>a + b = ${store.state.a + store.state.b}</p>
        <input id="stateA" value="${store.state.a}" size="5" />
        <input id="stateB" value="${store.state.b}" size="5" />
    `;
  }

  setEvent() {
    const { $el } = this;
    $($el, '#stateA').addEventListener('change', ({ target }) => {
      store.setState({ a: Number(target.value) });
    });
    $($el, '#stateB').addEventListener('change', ({ target }) => {
      store.setState({ b: Number(target.value) });
    });
  }
}

new App(document.querySelector('#app'));
