import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { AutoBgDirective } from '../../directives/auto-bg';
import * as tinycolor from 'tinycolor2';
@WithRender
@Component({
    directives: {
        autoBg: AutoBgDirective,
    }
})
export class LoadingComponent extends Vue {
    constructor() {
        super();
    }
    @Prop({
        default: 'white'
    }) bg: string;
    @Prop({
        default: .8
    })  opacity: number;
    @Prop({
        default: 'spin'
    }) type: string;
    @Prop({
        default: true
    }) clickClose: boolean;
    @Prop({
        default: true
    }) fixed: boolean;
    show: boolean = false;
    get backgroundColor() {
        return tinycolor(this.bg).setAlpha(this.opacity).toRgbString()
    }
    get style() {
        return {
            'background-color': this.backgroundColor,
            'position': this.fixed ? 'fixed' : 'absolute'
        }
    }
    get img() {
        switch(this.type) {
            case 'spin':
                return require('../../assets/spin.png');
            case 'circle':
                return require('../../assets/circle.png');
        }
    }
    get imgStyle() {
        let isSpin = this.type === 'spin';
        return {
            'animation-name': this.type,
            'animation-duration': isSpin ? '1s' : '.8s',
            'animation-timing-function': isSpin ? 'ease-in-out' : 'linear',
            'animation-iteration-count': 'infinite',
            'max-height': isSpin ? '20px' : '30px',
            'max-width': isSpin ? '20px' : '30px',
        }
    }
    mounted() {
        this.show = true;
    }
    click(e) {
        if(this.clickClose) {
            this.show = false;
        } else {
            this.$emit('click-close', e);
        }
    }
    animateEnd() {
        this.$emit('animate-end')
    }
}