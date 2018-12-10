
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import   * as WithRender from './index.html?style=./index.less';

@WithRender
@Component({
  components: {
  }
})
export class  UBasicSearchComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
  search: string = '';
  @Prop() value: string;
  @Prop() placeholder: string;
  @Watch('value') valueChangeHandler(v) {
    this.search = v;
  }
  @Watch('search') watchSearchHandler(v) {
    this.$emit('input', v);
  }
  clickHandler(e: MouseEvent) {
    this.$emit('click', {
      e: MouseEvent,
      value: this.search
    })
  }
  keyup(e: MouseEvent) {
    this.$emit('keyup-enter', {
      e: MouseEvent,
      value: this.search
    })
  }
}
export interface USearchClickObject {
  e: MouseEvent;
  value: string;
}