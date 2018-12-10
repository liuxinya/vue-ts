import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
    
})
export class UTipComponent extends Vue {
    @Prop() e: MouseEvent;
    @Prop() content: string;
    isComponent = false;
    @Prop({
        default: true
    }) tipWithMouse: boolean;
    created() {
        // console.log(this.e)
    }
    getPosition() {
        return {
            left: this.e.x - 18 + 'px',
            top: this.tipWithMouse
            ? this.e.y + 20 + 'px'
            : this.e.y - this.e.offsetY + (this.e.target as any).offsetHeight + 'px'
        };
    }

}