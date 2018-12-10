import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { isNill } from '../../helpers/Type/basic';
let keycount: number = 0;
@WithRender
@Component({
    name: 'tab-bar',
    directives: {
        inited: {
            inserted(el, binding) {
                let value: {
                    item: TabBarDataObject<any>,
                    index: number,
                } = binding.value;
                // 可能根本没有设置Key，那么需要手动的去设置下
                if(isNill(value.item.key)) {
                    Vue.set(value.item, 'key', keycount++);
                }
                if(isNill(value.item.active)) {
                    Vue.set(value.item, 'active', false);
                }
                if(isNill(value.item.showIpt)) {
                    Vue.set(value.item, 'showIpt', false);
                }
            }
        }
    }
})
export class TabBarComponent extends Vue {
    constructor() {
        super();
    }
    @Prop() tabs: TabBarDataObject<any>[];
    @Prop({
        default: (item: TabBarDataObject<any>) => {
            return item.active;
        }
    }) activeGetter: (item: TabBarDataObject<any>) => boolean;
    @Prop({
        default: false
    }) isInput: boolean;
    ipt = null;
    preTitle: string = '';
    clickTab<T>(item: TabBarDataObject<T>, index: number, event: MouseEvent) {
        let emitObject: TabBarClickedDataObject<T> = {
            tab: item,
            index: index,
            tabs: this.tabs,
            event: event
        };
        this.$emit('click', emitObject);
    }
    close<T>(item: TabBarDataObject<T>, index: number, event: MouseEvent) {
        event.stopPropagation();
        let emitObject: TabBarCloseDataObject<T> = {
            tab: item,
            index: index,
            tabs: this.tabs,
            event: event
        };
        this.$emit('close', emitObject)
    }
    mounted() {
        // if(this.$refs && this.$refs.ipt) {
        //     this.ipt = this.$refs.ipt[0];
        // }
    }
    dblclick<T>(item: TabBarDataObject<T>, index: number, e) {
        if(!this.isInput) return;
        item.showIpt = true;
        this.$nextTick(() => {
            if(this.$refs && this.$refs.ipt) {
                if(this.$refs.ipt[index]) {
                    this.ipt = this.$refs.ipt[index];
                    this.ipt.children[0].focus();
                    this.preTitle = item.title;
                    // console.log(this.ipt.children[0].tagName)
                    // if(this.ipt.children[0].tagName == 'input') {
                    //     console.log(123123)
                    // }
                }
            }
        })
    }
    blur<T>(item: TabBarDataObject<T>) {
        item.showIpt = false;
        if(!item.title) {
            item.title = this.preTitle
        }
    }
}
export interface TabBarDataObject<T> {
    data?: T; // 存储的数据
    title?: string; // 标题
    key?: string; // key
    active?: boolean; // 是否是选中状态
    showIpt?: boolean; // 是否让其输入
}
export interface TabBarClickedDataObject<T> {
    tab: TabBarDataObject<T>; // tabbar
    index: number; // 第几个tabbar
    tabs: TabBarDataObject<T>[]; // 带上它的父亲，防止需要有增删改查的工作
    event: MouseEvent;
}
export interface TabBarCloseDataObject<T> extends TabBarClickedDataObject<T>{

}