import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import   * as WithRender from './index.html?style=./index.less';
import { BreadContentAction } from './action';
import { BreadContentModel } from './model';
import { BreadContentHelper } from './helper';
import { BroadCrumbObject } from '../../../components/broadcrumbs';
@WithRender
@Component({
  components: {

  }
})
export class  BreadContentComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
  action: BreadContentAction = null;
  model: BreadContentModel = null;
  helper: BreadContentHelper = null;
  @Prop() crumbs: BroadCrumbObject[];
  @Prop() value: number;
  activeCrumbIndex: number = 0;
  created() {
    this.activeCrumbIndex = this.value;
    this.action = new BreadContentAction(this);
    this.helper = new BreadContentHelper(this);
    this.model = new BreadContentModel(this);
  }
  @Watch('activeCrumbIndex') activeCrumbIndexChangeHandler(v) {
    this.$emit('input', v);
  }
  @Watch('value') valueChangeHandler(v: number) {
    this.activeCrumbIndex = v;
  }
  mounted() {

  }
  destroyed() {

  }
}

