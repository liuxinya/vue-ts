import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import   * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
  components: {
  }
})
export class  MainComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
  created() {
    
  }
}