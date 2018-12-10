import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
    name: 'u-ratio'
})
export class RatioComponent extends Vue {
    constructor() {
        super();
    }
    @Prop() name: string;
    @Prop() title: string;
    @Prop({
        default: false
    })checked: boolean;
    @Prop() value: any;
    clickLabel(e: MouseEvent) {
        this.choose();
    }
    choose() {
        (this.$refs.input as any).click();
    }
    changeHandler(e) {
        this.emitChanged();
    }
    mounted() {
        if(this.checked) {
            this.emitChanged();
        }
    }
    emitChanged() {
        this.$emit('changed', this.value);
    }
}