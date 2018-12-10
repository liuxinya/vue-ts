import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import   * as WithRender from './index.html?style=./index.less';
import { ModalComponent } from '../../../components/modal';
import { Ref } from '../../../decorators/ref';
import { ButtonComponent } from '../../button/index';
import { BgDirective } from '../../../directives/bg';
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
export class UAlertComponent extends Vue {
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
  active: boolean = true;
  close(e: MouseEvent) {
    this.$emit('close', {
      close: () => {
        this.active = false;
      },
      event
    })
  }
  closed(e) {
    this.$emit('closed', {
      close: () => {
        this.active = false;
      },
      event
    })
  }
}
export interface UAlertEventDataObject {
  close: Function,
  event: MouseEvent
}

