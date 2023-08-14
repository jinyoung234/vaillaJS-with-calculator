import { observable, observe } from './observer.js';

export class Component {
  state;
  props;
  $el;
  constructor($el, props) {
    this.$el = $el;
    this.props = props;
    this.setup();
  }
  setup() {
    this.state = observable(this.initState()); // initState가 반환한 state를 관찰
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    }); // observe를 통해 해당 callback이 currentObserver를 참조 후 해당 명령어를 실행한다.
  }
  initState() {
    return {};
  }
  template() {
    return '';
  }
  render() {
    this.$el.innerHTML = this.template();
  }
  setEvent() {}
  mounted() {}
}
