import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { CheckboxComponent } from '../checkbox';
import { dateFilter } from '../../filters/date';
@WithRender
@Component({
    components: {
        uCheckbox: CheckboxComponent
    },
    filters: {
        date: dateFilter
    }
})
export class UTableComponent extends Vue {
    @Prop() title: string;
    @Prop() headers: UTableHeaderObject[];
    @Prop() data: any[];
    @Prop({
        default: 'black'
    }) theme: string;
    @Prop({
        default: false
    }) checkable: boolean;
    @Prop({
        default: false
    }) activeHighlight: boolean;
    @Watch('data') dataChangeHandler(v) {
        this.shouldCheckedAll();
    }
    shouldcheckedall: boolean = false;
    preClickIndex: number = -1;
    contextmenuHandler(e: MouseEvent, item: any, index: number) {
        this.$emit('contextmenu', {
            e,
            item,
            index
        })
    }
    clickHandler(e: MouseEvent, item: any, index: number) {
        if(item) {
            Vue.set(item, 'checked',  !item.checked);
        }
        if(this.activeHighlight && item) {
            this.$set(item, 'active', true);
            if(this.preClickIndex > -1 && this.preClickIndex != index) this.data[this.preClickIndex].active = false;
            this.preClickIndex = index;
        }
        this.shouldCheckedAll();
        this.$emit('click', {
            e,
            item,
            index
        })
    }
    shouldCheckedAll() {
        this.shouldcheckedall = this.data.every((item: any) => {
            return item.checked;
        });
    }
    checkAll() {
        this.shouldcheckedall = !this.shouldcheckedall;
        this.$emit('checkAll', this.shouldcheckedall);
        if(this.data) {
            this.data.forEach((item: any) => {
                Vue.set(item, 'checked',  this.shouldcheckedall);
            })
        }
    }
    isDate(key) {
        return key == 'beginTime' || key == 'endTime' || key == 'createTime' || key == 'updateTime';
    }
}
export interface UTableHeaderObject {
    title: string;
    key: string;
}
export interface UTableBasicEmitObject<T> {
    e: MouseEvent;
    item: T;
    index: number;
}
export interface UTableClickObject <T> extends UTableBasicEmitObject <T>{
    
}
export interface UTableContextmenuObject<T> extends UTableBasicEmitObject<T> {}