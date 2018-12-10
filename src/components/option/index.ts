import { Option } from './../date-pick/index';
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
})
export class OptionComponent extends Vue {
    constructor() {
        super();
    }
    @Prop() data: OptionObject[];
    @Prop({
        default: '20%'
    }) left: string;
    @Prop({
        default: '20%'
    }) top: string;
    @Prop({
        default: false
    }) showIcon: boolean;
    show: boolean = false;
    corrTop: string = '';
    afterLeave() {
        this.$emit('close-animate');
    }
    clickItem(e: MouseEvent, item: OptionObject, index: number) {
        this.$emit('click-item', {
            e,
            item,
            index
        });
    }
    mounted() {
        this.show = true;
        try{
            setTimeout(() =>{
                let bodyClientH = document.querySelector('.app-wrapper').clientHeight;
                let optionTop = this.$refs.option['offsetTop'];
                let optionHeight = this.$refs.option['offsetHeight'];
                if(optionTop + optionHeight > bodyClientH) {
                    this.corrTop = (bodyClientH - optionHeight) + 'px';
                }
            })
        }catch(e) {

        }
    }
    
}
export interface OptionObject {
    title: string;
    icon?: string;
    handler?: Function;
    hidden?: boolean;
    [prop: string]: any;
}
export interface OptionClickObject {
    e: MouseEvent;
    item: OptionObject;
    index: number;
}