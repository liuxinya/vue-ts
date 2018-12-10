import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import   * as WithRender from './index.html?style=./index.less';
import { ModalComponent } from '../../../components/modal';
import { Ref } from '../../../decorators/ref';
import { ButtonComponent } from '../../button/index';
import { BgDirective } from '../../../directives/bg';
import { UAlertEventDataObject } from '../alert';
import { InputComponent } from '../../input/input';
@WithRender
@Component({
  components: {
    modal: ModalComponent,
    uButton: ButtonComponent,
    uInput: InputComponent
  },
  directives: {
    bg: BgDirective
  }
})
export class UPromptComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
  @Prop({
    default: 'rgb(79, 99, 212)'
  }) headerBackgroundColor: string;
  @Prop() title: string;
  @Prop() content: string;
  @Prop() bg: string;
  @Prop() opacity: number;
  @Prop() theme: string;
  @Prop() placeholder: string;
  myvalue: string = '';
  active: boolean = true;
  @Watch('content') contentChangeHandler(v) {
    this.myvalue = v;
  }
  @Watch('myvalue') myvalueChangeHandler(v) {
    this.$emit('input', v);
  }
  created() {
    this.myvalue = this.content;
  }
  cancel(e: MouseEvent) {
    this.$emit('cancel', {
      close: () => {
        this.active = false;
      },
      event,
      value: this.myvalue
    })
  }
  confirm(e: MouseEvent) {
    this.$emit('confirm', {
      close: () => {
        this.active = false;
      },
      event,
      value: this.myvalue
    })
  }
  closed(e) {
    this.$emit('closed')
  }
}
export interface UPromptEventDataObject extends  UAlertEventDataObject{
  value: string;
}

