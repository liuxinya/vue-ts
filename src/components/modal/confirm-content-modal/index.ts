import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import   * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({

})
export class UConfirmContentModalComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
  @Prop(
      {
          default: '300px'
      }
  ) width: string;
  @Prop({
      default: '200px'
  }) height: string;
  @Prop({
      default: '8px 10px'
  }) padding: string;
  @Prop() bg: string;
  @Prop({
    default: '#fff'
  }) background: string;
  @Prop() opacity: number;
  @Prop() title: string;
  @Prop({
      default: true
  }) active: boolean;
  @Prop() top: string;
  @Prop({default: true})showHeader : boolean;
  // 是否展示身体
  @Prop({default: true})showBody : boolean;
  // 是否展示脚部
  @Prop({default: true})showFooter : boolean;
  @Prop({
      default: true
  }) showFooterOperator: boolean;
  show: boolean = true;
  @Watch('active') activeChangeHandler(v) {
    this.show = v;
  }
  get headerStyle() {
      return {
        padding: this.padding,
        backgroundColor: this.background
      }
  }
  get footerStyle() {
      return {
        padding: this.padding,
        backgroundColor: this.background
      }
  }
  get contentStyle() {
    return {
        // height: this.height,
        padding: this.padding,
        backgroundColor: this.background,
        overflow: 'auto'
    }
  }
  closed() {
      this.$emit('closed');
  }
  cancel(e: MouseEvent) {
    this.$emit('cancel', {
      close: () => {
        this.show = false;
      },
      event
    })
  }
  confirm(e: MouseEvent) {
    this.$emit('confirm', {
      close: () => {
        this.show = false;
      },
      event
    })
  }
}