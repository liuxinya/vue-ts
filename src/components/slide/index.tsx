import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./style.less';
import channel from './channel';
const show_modal_animate_dur = 400
const hide_modal_animate_dur = 250
@WithRender
@Component({components: {}})
export class Modal extends Vue {
    // 初始数据可以直接声明为实例的属性
    constructor() {
        super();
    }
    @Prop()title : string;
    @Prop()theme : string;
    @Prop()destroyOnHide : Boolean;
    @Prop()onHide : Function;
    state : number = 0;
    show() {
        this.state = 1
        setTimeout(() => {
            this.state = 2
            channel.$emit('ModalSlideUpStart')
            setTimeout(() => {
                channel.$emit('ModalSlideUpEnd')
            }, show_modal_animate_dur)
        }, 50)
        document
            .body
            .classList
            .add('modal-open')
    }
    hide() {
        if (this.onHide) {
            this.onHide()
        }
        this.state = 3
        setTimeout(() => {
            this.state = 0
            if (this.destroyOnHide) {
                this.$destroy()
            }
        }, hide_modal_animate_dur)
        document
            .body
            .classList
            .remove('modal-open')
    }
    destroyed() {
        this
            .$el
            .parentNode
            .removeChild(this.$el);
    }
}