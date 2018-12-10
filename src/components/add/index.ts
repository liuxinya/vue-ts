import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
})
export class BasicAddComponent extends Vue {
    @Prop() title: string;
    clickHandler(e: MouseEvent) {
        this.$emit('click', e);
    }
}