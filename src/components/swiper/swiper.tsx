import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator';
import * as WithRender from './swiper.html?style=./swiper.less';
import {Swiper} from './core';
import {SwiperPagination} from './swiper-pagination';
import {Ref} from '../../decorators/ref';

const re = /^[\d]+(\%)?$/
const widthAndHeightValidator = (v) => {
    return re.test(v)
}
const widthAndHeightCoerce = (v) => {
    if (v[v.length - 1] != '%') 
        return v + 'px'
    return v
}

@WithRender
@Component({
    components: {
        pagination: SwiperPagination
    }
})
export class SwipeComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    constructor() {
        super();
    }
    @Prop({type: String, default: 'vertical'})direction : string;
    @Prop({default: '100%', validator: widthAndHeightValidator})width : string;
    @Prop({default: '100%', validator: widthAndHeightValidator})height : string;
    @Prop({default: '#333'})pagerColor : string;
    @Prop({default: '#333'})pagerBgColor : string;
    @Prop({
        default: 'false',
        validator: (v) => {
            return v === 'true' || v === 'false'
        }
    })hidePager : string;
    @Prop()callback : Function;
    get w() {
        return widthAndHeightCoerce(this.width)
    }
    get h() {
        return widthAndHeightCoerce(this.height)
    }
    swiper : Swiper;
    itemCount : number = 0;
    activeIndex : number = 0;
    mounted() {
        Vue.nextTick(() => {
            let container = this
                .$el
                .querySelector('.swiper');
            this.swiper = new Swiper(container, {
                direction: this.direction,
                transitionEnd: (prev, current) => {
                    this.activeIndex = current
                    if (this.$refs.pagination) {
                        (this.$refs.pagination as any).activate(current)
                    }
                    // add callback
                    if (this.callback) {
                        this.callback(prev, current)
                    }
                }
            });
            this.itemCount = this.swiper.count;
            Vue.nextTick(() => {
                if (this.$refs.pagination) {
                    (this.$refs.pagination as any).init()
                }
            })
        })
    }
    destroyed() {
        if (this.swiper) 
            this.swiper.destroy()
    }
    go(index) {
        this
            .swiper
            .$go(index)
    }
    next() {
        this
            .swiper
            .$next()
    }
    prev() {
        this
            .swiper
            .$prev()
    }
    resize() {
        this
            .swiper
            .resize()
    }
}