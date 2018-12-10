import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';

@WithRender
@Component({components: {}})
export class ContentComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  constructor() {
    super();
  }
  @Prop({
    default: 44
  })offset : number;
  @Prop(
    {
      default: function(done) {
        done();
      }
    }
  )onRefresh : Function;
  @Prop()onInfinite : Function;
  @Prop({
    default: true
  }) showFresh: boolean;
  pullRefreshHeight: number = 40;
  infiniteHeight: number = 50;
  top : number = 0;
  state : number = 0; // 0:down, 1: up, 2: refreshing
  startY : number = 0;
  touching : boolean = false;
  infiniteLoading : boolean = false;
  touchStart(e) {
    this.startY = e.targetTouches[0].pageY
    this.touching = true
  }
  mouseDown(e) {
    this.startY = e.pageY
    this.touching = true
  }
  touchMove(e) {
    if (this.$el.scrollTop > 0 || !this.touching) {
      return
    }
    let diff = e.targetTouches[0].pageY - this.startY
    if (diff > 0) 
      e.preventDefault()
    this.top = Math.pow(diff, 0.8) + (this.state === 2
      ? this.offset
      : 0)
    if (this.state === 2) { // in refreshing
      return
    }
    if (this.top >= this.offset) {
      this.state = 1
    } else {
      this.state = 0
    }
  }
  mouseMove(e) {
    if (this.$el.scrollTop > 0 || !this.touching) {
      return
    }
    let diff = e.pageY - this.startY
    if (diff > 0) 
      e.preventDefault()
    this.top = Math.pow(diff, 0.8) + (this.state === 2
      ? this.offset
      : 0)
    if (this.state === 2) { // in refreshing
      return
    }
    if (this.top >= this.offset) {
      this.state = 1
    } else {
      this.state = 0
    }
  }
  touchEnd(e) {
    this.touching = false
    if (this.state === 2) { // in refreshing
      this.state = 2
      this.top = this.offset
      return
    }
    if (this.top >= this.offset) { // do refresh
      this.refresh()
    } else { // cancel refresh
      this.state = 0
      this.top = 0
    }
  }
  mouseUp(e) {
    this.touching = false
    if (this.state === 2) { // in refreshing
      this.state = 2
      this.top = this.offset
      return
    }
    if (this.top >= this.offset) { // do refresh
      this.refresh()
    } else { // cancel refresh
      this.state = 0
      this.top = 0
    }
  }
  refresh() {
    this.state = 2
    this.top = this.offset
    this.onRefresh(this.refreshDone)
  }
  refreshDone() {
    this.state = 0
    this.top = 0
  }
  infinite() {
    this.infiniteLoading = true
    this.onInfinite(this.infiniteDone)
  }
  infiniteDone() {
    this.infiniteLoading = false
  }
  onScroll(e) {
    if (this.infiniteLoading) {
      return
    }
    let outerHeight = this.$el.clientHeight
    let innerHeight = this
      .$el
      .querySelector('.scroll-inner')
      .clientHeight
    let scrollTop = this.$el.scrollTop
    let ptrHeight = this.onRefresh
      ? this
        .$el
        .querySelector('.pull-to-refresh-layer')
        .clientHeight
      : 0
    let infiniteHeight = this
      .$el
      .querySelector('.infinite-layer')
      .clientHeight
    let bottom = innerHeight - outerHeight - scrollTop - ptrHeight
    if (bottom < infiniteHeight) 
      this.infinite()
  }
}