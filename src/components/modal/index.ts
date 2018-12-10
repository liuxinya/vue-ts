import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { DomHelper } from '../../helpers/Dom/index';

@WithRender
@Component({
    components: {},
    watch: {
        active: function(v) {
            this.show = v;
        }
    }
})
export class ModalComponent extends Vue {
    constructor() {
        super();
    }
    // Modal的北京色
    @Prop({default: 'white'})modalBackgroundColor : string;
    @Prop({default: .6}) modalOpacity: number;
    // 是否展示头部
    @Prop({default: true})showHeader : boolean;
    // 是否展示身体
    @Prop({default: true})showBody : boolean;
    // 是否展示脚部
    @Prop({default: true})showFooter : boolean;
    // 标题
    @Prop()title : string;
    // 内容
    @Prop()content : string;
    @Prop({default: true})active : boolean;
    @Prop() width: string;
    @Prop({
        default: 'auto'
    }) height: string;
    @Prop({
        default: '100px'
    }) top: string;
    @Prop({
        default: '0px'
    }) headerPadding: string;
    @Prop({
        default: '12px'
    }) headerFontSize: string;
    // 展示Modal
    show : boolean = false;
    // 点击Modal
    clickModal(e) {
        this.show = false;
    }
    mounted() {
        if (this.active) {
            this.show = true;
        }
    }
    animateEnd(e) {
        let ele : any = this.$refs.ele;
        let dom = new DomHelper(ele);
        dom.remove();
        this.$emit('closed', e);
    }

}