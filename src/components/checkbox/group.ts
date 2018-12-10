import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './group.html?style=./group.less';
import {CheckboxComponent} from './index';
@WithRender
@Component({name: 'u-checkbox-group'})
export class CheckboxGroupComponent extends Vue {
    constructor() {
        super();
    }
    @Prop({default: []})value : any[];
    children : CheckboxComponent[] = [];
    mounted() {
        let children = this.$children;
        for (let i in children) {
            let child : CheckboxComponent = children[i]as any;
            if ('u-checkbox' === child.$options.name) {
                let index = this.children.length;
                this
                    .children
                    .push(child);
                child.$on('changed', (data : {
                    checked: boolean,
                    data: any
                }) => {
                    // 因为要重复的去判断，所以还不如干脆点，直接遍历一遍，性能基本一样
                    this.update();
                });
            }
        }
        this.update();
    }
    update() {
        let arr = [];
        for (let i in this.children) {
            if (this.children[i].checkedState) {
                arr.push(this.children[i].value)
            }
        }
        this.$emit('input', arr);
    }
}