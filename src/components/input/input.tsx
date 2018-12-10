import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';

@WithRender
@Component({})
export class InputComponent extends Vue {
    @Prop() icon: string;
    @Prop() iconRight: string;
    @Prop({default: '请输入'}) placeholder: string;
    @Prop({
        default: '#e3e3e3'
    }) borderColor: string;
    @Prop({
        default: false
    }) focus: boolean;
    myvalue: string = '';
    @Prop() value: string;
    @Prop({
        default: false
    }) disabled: boolean;
    @Prop() maxlength: number;
    @Watch('value') valueChangeHandler(v) {
        this.myvalue = v;
    }
    @Watch('myvalue') _valueChangeHandler(v) {
        this.$emit('input', v);
        this.$emit('change', v);
    }
    mounted() {
        if(this.focus) {
            (this.$refs.input as any).focus();
        }
    }
    clickRightIcon(e: MouseEvent) {
        this.$emit('click-right-icon', e);
    }
    clickLeftIcon(e: MouseEvent) {
        this.$emit('click-left-icon', e);
    }
    onFocus(e: MouseEvent) {
        this.$emit('focus', e);
    }
    onBlur(e: MouseEvent) {
        this.$emit('blur', e);
    }
    onClick(e:MouseEvent) {
        this.$emit('click', e);
    }
    created() {
        this.myvalue = this.value;
    }
    keyupHandler(e: MouseEvent) {
        this.$emit('keyup-enter', e);
    }
}
