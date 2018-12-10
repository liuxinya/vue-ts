import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';

@WithRender
@Component({})
export class SwitchComponent extends Vue {
    @Prop({
        default: false
    }) disabled: boolean;
    @Prop() state: boolean;
    isActive: boolean = false;
    get active() {
        return this.isActive;
    }
    set active(value: boolean) {
        this.isActive = value;
    }
    @Watch('state') stateUpdat(v) {
        this.active = v;
    }
    created() {
        this.active = this.state;
    }
    click(e) {
        if(this.disabled) return;
        this.active = !this.active;
        this.$emit('click', {
            e: e,
            state: this.active
        })
    }
    updated() {
        this.active = this.state;   
    }
}
export interface UnionSwitchEmitterObject {
    e: MouseEvent;
    state: boolean;
}