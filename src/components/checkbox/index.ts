import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
    name: 'u-checkbox'
})
export class CheckboxComponent extends Vue {
    constructor() {
        super();
    }
    @Prop() name: string;
    @Prop() title: string;
    @Prop() value: boolean;
    @Prop() disabled: boolean;
    get checked() {
        return this.value;
    }
    checkedState: boolean;
    clickLabel(e: MouseEvent) {
        this.choose();
    }
    clicHandler(e: MouseEvent) {
        e.stopPropagation();
        this.choose();
        this.$emit('check')
    }
    choose() {
        (this.$refs.input as any).click();
    }
    changeHandler(e: MouseEvent) {
        this.emitChanged();
    }
    mounted() {
        if(this.checked) {
            this.emitChanged();
        }
    }
    emitChanged() {
        this.$emit('input', (this.$refs.input as any).checked)
        this.$emit('changed', {
            checked: (this.$refs.input as any).checked,
            value: this.value
        });
        
    }
}