import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
})
export class StepComponent extends Vue {
    // @Prop() data: UnionStepObject[];
    @Prop() data: StepObject[];
    @Prop({
        default: 1
    }) active: number ;
    getWidth(i) {
        let length = this.data.length;
        if (i === length - 1) {
            return '';
        } else {
            return (100 / (length - 1)).toFixed(2) + '%';
        }
    }
    getMargin(i) {
        let length = this.data.length;
        if (i === length - 1) {
            return '';
        } else {
            return '-46px';
        }
    }
    hasComplete(i) {
        return i < this.active;
    }
    clickCurrStep(step, i ) {
        this.$emit('clickCurrStep', {step, i});
    }
}
export interface StepObject {
    title: string;
    desc: string;
    [prop: string]: any;
}