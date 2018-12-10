import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { isNill } from '../../helpers/Type/basic';
let key = 1;
@WithRender
@Component({
    directives: {
        init: {
            inserted(el, binding, value) {
                let crumb: BroadCrumbObject = binding.value;
                if(isNill(crumb.key)) {
                    Vue.set(crumb, 'key', key++);
                }
            }
        }
    }
})
export class BroadCrumbsComponent extends Vue {
    constructor() {
        super();
    }
    @Prop() data: BroadCrumbObject[];
    // 高亮的面包屑
    @Prop({
        default: 0
    }) value: number;
    @Watch('value') valueChangeHandler(val: number) {
        this.activeIndex = this.value;
    }
    activeIndex: number = null;
    clickCrumb(crumb: BroadCrumbObject, index: number) {
        this.activeIndex = index;
        this.$emit('input', index);
    }
    contextmenu(e: MouseEvent, crumb: BroadCrumbObject, index: number) {
        this.$emit('contextmenu', {
            e: e,
            crumb,
            index
        });
    }
    created() {
        this.activeIndex = this.value;
    }
    mounted() {

    }
}
export interface BroadCrumbObject {
    title: string;
    key?: number;
    component?: string;
    [prop: string]: any;
}
export interface BroadCrumbContextmenuObject {
    e: MouseEvent;
    crumb: BroadCrumbObject;
    index: number;
}