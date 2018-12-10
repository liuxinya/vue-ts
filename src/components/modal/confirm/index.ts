import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import   * as WithRender from './index.html?style=./index.less';
import { ModalComponent } from '../../../components/modal';
import { Ref } from '../../../decorators/ref';
import { ButtonComponent } from '../../button/index';
import { BgDirective } from '../../../directives/bg';
import { UAlertEventDataObject } from '../alert';
@WithRender
@Component({
  components: {
    modal: ModalComponent,
    uButton: ButtonComponent,
  },
  directives: {
    bg: BgDirective
  }
})
export class UConfirmComponent extends Vue {
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
  @Prop({
      default: true
  }) showCancelBtn: boolean;
  @Prop({
    default: true
  }) showConfirmBtn: boolean;
  active: boolean = true;
  cancel(e: MouseEvent) {
    this.active = false;
    this.$emit('cancel', {
      close: () => {
        this.active = false;
      },
      event
    })
  }
  confirm(e: MouseEvent) {
    this.$emit('confirm', {
      close: () => {
        this.active = false;
      },
      event
    })
  }
  closed(e) {
    this.$emit('closed')
  }
}
export interface UConfirmEventDataObject extends  UAlertEventDataObject{
  close: Function,
  event: MouseEvent
}

