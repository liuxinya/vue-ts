import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './group.html?style=./group.less';
import { RatioComponent } from './index';
@WithRender
@Component({
    name: 'u-ratio-group'
})
export class RatioGroupComponent extends Vue {
    constructor() {
        super();
    }
    @Prop() value: any;
    children: RatioComponent[] = [];
    mounted() {
        let children = this.$children;
        let hasChoosedBefore: boolean = false;
        for(let i in children) {
            let child: RatioComponent = children[i] as any;
            if('u-ratio' === child.$options.name) {
                this.children.push(child);
                child.$on('changed', (val) => {
                    this.$emit('input', val);
                });
                if(!hasChoosedBefore) {
                    // 还没选过
                    if(this.value) {
                        if(this.value === child.value) {
                            child.choose();
                            hasChoosedBefore = true;
                        }
                    }
                    if(child.checked) {
                        this.$emit('input', child.value);
                        hasChoosedBefore = true;
                    }
                }
            }
        }
    }
}