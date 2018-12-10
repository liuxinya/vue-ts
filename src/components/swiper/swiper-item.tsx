import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import * as WithRender from './swiper-item.html?style=./swiper-item.less';

@WithRender
@Component({components: {}})
export class SwiperItem extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
}