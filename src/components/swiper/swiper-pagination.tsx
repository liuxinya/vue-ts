import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
import * as WithRender from './swiper-pagination.html?style=./swiper-pagination.less';
const re_color = /^#([0-9A-Fa-f]{3})|([0-9A-Fa-f]{6})$/;

@WithRender
@Component({components: {}})
export class SwiperPagination extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
  @Prop({
      default: 0
  }) size: number;
  @Prop({
      required: true,
      validator(v) {
        return re_color.test(v)
      }
  }) pagerColor: string;
  @Prop({
      required: true,
      validator(v) {
        return re_color.test(v)
      }
  }) pagerBgColor: string;
  circles: any[] = [];
  activeIndex: number = 0;
  init() {
    let circles = []
    for (let i = 0; i < this.size; i++) {
      circles.push(i)
    }
    this.circles = circles;
  }
  activate(index) {
    this.activeIndex = index
  }
}