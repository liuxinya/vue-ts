import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
    directives: {

    }
})
export class MessageComponent extends Vue {
    constructor() {
        super();
    }
    @Prop({
        default: 0
    }) index: number;
    @Prop() message: string;
    @Prop({
        default: 2000
    }) timeout: number;
    @Prop() img: string;
    show: boolean = false;
    settimeout: any;
    beginDate: Date;
    gap: number = 0;
    get top() {
        return (this.index) * 40 + 20 + 'px';
    }
    animateEnd() {
        this.$emit('animate-end')
    }
    mounted() {
        this.show = true;
        this.run();
    }
    run(timeout: number = this.timeout) {
        this.beginDate = new Date();
        this.settimeout = setTimeout(() => {
            this.show = false;
        }, timeout);
    }
    pause() {
        if(this.settimeout) {
            // 清空计时器
            clearTimeout(this.settimeout);
            let now = new Date();
            this.gap += now.getTime() - this.beginDate.getTime();
        }
    }
    continue() {
        if(this.beginDate) {
            this.run(this.timeout - this.gap);
        }
    }
    mouseleaveHandler() {
        this.$emit('mouseleave');
    }
    mouseenterHandler() {
        this.$emit('mouseenter');
    }
}