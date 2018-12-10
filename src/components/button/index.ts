import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { AutoBgDirective } from '../../directives/auto-bg';
@WithRender
@Component({
    directives: {
        autoBg: AutoBgDirective,
    }
})
export class ButtonComponent extends Vue {
    constructor() {
        super();
    }
    @Prop({
        default: 'default'
    }) bg: string;

    @Prop({
        default: 'white'
    }) color: string;
    @Prop() disabled: boolean;
    @Prop({
        default: '6px 15px'
    }) padding: string;
    @Watch('bg') watchBg(value: string) {
        
    }
    mounted() {

    }
    clickHandler(e) {
        this.$emit('click', e);
    }
}