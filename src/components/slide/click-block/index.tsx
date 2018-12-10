import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./style.less';
import channel from '../channel';
@WithRender
@Component({components: {}})
export class ClickBlock extends Vue {
    // 初始数据可以直接声明为实例的属性
    constructor() {
        super();
    }
    state : number = 0;
    mounted() {
        channel.$on('ModalSlideUpStart', () => {
            this.show()
        })
        channel.$on('ModalSlideUpEnd', () => {
            this.hide()
        })
        channel.$on('RemoveClickBlock', () => {
            this.$destroy()
        })
    }
    destroyed() {
        this
            .$el
            .parentNode
            .removeChild(this.$el)
    }
    show() {
        this.state = 1
    }
    hide() {
        this.state = 0
    }
}