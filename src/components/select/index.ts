
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';
@WithRender
@Component({
  components: {
  }
})
export class SelectComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
  show: boolean = false;
  isClick: boolean = false;
  preActiveIndex: number = -1;
  activeItem: SelectorDataObject = null;
  target: any = null;
  @Prop({
      default: '请选择'
  }) placeholder: string;
  showVal: string = '';
  @Prop() disabled: boolean;
  @Prop() data: Array<SelectorDataObject>; 
  // 由于外界可能是mounted之后才传入具体数据， 这个时候dom其实已经渲染过了
  //   所以 用watch监视一下数据变化

  @Watch('data') change(v: Array<SelectorDataObject>) {
      // 初始化数据
    this.data = v;
    setTimeout(() => {
        this.initData(v);
    })
    // this.$nextTick(() => {
    // })
  }
  // 由于blur事件是mousedown就触发了 为了让选择下拉的时候先触发选择再触发失去焦点  这里的select是也是mousedown触发
  async select(item, index) {
      if(item.noSelect) return
      this.$emit('select', item)
      this.isClick = false;
      if(index !== this.preActiveIndex) {
          if(this.preActiveIndex == -1) this.preActiveIndex = 0;
          if(this.data[this.preActiveIndex]) this.data[this.preActiveIndex].active = false;
          item.active = true;
          this.activeItem = item;
          this.preActiveIndex = index
        }
  }
  blueEvent(e) {
    setTimeout(() => {
        this.clickHandle();
    })
  }
  // 如果点击的是arrow  就手动触发foucs事件 以保证 input绝对获取焦点
  clickArrow() {
    this.$refs.input['focus']();
  }
  clickSel(e?) {
    if(this.disabled) return;
    this.isClick = !this.isClick;
  }
  // clickHandle 就是控制下拉展开或者关闭的一个状态
  async clickHandle() {
      this.isClick = false;
  }
  created() {
      if(this.data) this.initData(this.data);
      window.addEventListener('click', this.clickHandle)
  }
  mounted() {
  }
  updated() {
  }
  initData(data) {
    this.activeItem = null;
    this.preActiveIndex = -1;
    if(!data) data = [];
    data.forEach((item, index) => {
        if(!item.active) {
            Vue.set(item, 'active', false);
        } else {
            // this.preActiveIndex = index;
            // 触发一次select 事件
            this.select(item, index);
            // this.activeItem = item;
        }
    })
  }
  destroyed() {
      window.removeEventListener('click', this.clickHandle)
  }
}
export interface SelectorDataObject {
    title: string;
    key?: string;
    active?: boolean;
    noSelect?: boolean
    [prop:string]: any;
}