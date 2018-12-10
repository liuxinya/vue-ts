import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({})
export class DownLoadComponent extends Vue {
  @Prop() url: string;
  @Prop() value: any;
  ele: Element = null;
  isDestroy: boolean = true;
  mounted() {
    this.ele = this.$refs.download as any;
    this.ele['submit']();
  }
  click(e: MouseEvent) {
  }
  destroyed() {
  }
} 