import { Component } from './core/component.js';
import { $ } from './utils/dom.js';

export class App extends Component {
  initState() {
    return {
      a: 10,
      b: 20,
    };
  }

  template() {
    return `
        <p>a + b = ${this.state.a + this.state.b}</p>
        <input id="stateA" value="${this.state.a}" size="5" />
        <input id="stateB" value="${this.state.b}" size="5" />
    `;
  }

  setEvent() {
    const { $el, state } = this;
    $($el, '#stateA').addEventListener('change', ({ target }) => {
      state.a = Number(target.value);
    });
    $($el, '#stateB').addEventListener('change', ({ target }) => {
      state.b = Number(target.value);
    });
  }
}

new App(document.querySelector('#app'));
