import { UDynamicService } from './../../services/dynamic';
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { Ioc } from '../../decorators/injectable';
import { CONST_PAGES } from '../../config/pages';
@WithRender
@Component({})
export class BasicComponentComponent extends Vue {
    constructor() {
        super();
    }
    @Prop() component: string;
    @Prop() data: any;
    @Prop() events: any;
    instance: object & Record<never, any> & Vue = null;
    mounted() {
        if(this.component) {
            let dynamic: UDynamicService = Ioc(UDynamicService);
            this.instance = dynamic.open({
                component: typeof this.component === 'string' ? CONST_PAGES[this.component] : this.component,
                data: this.data,
                events: this.events,
                selector: this.$refs.container as any
            });
            if(this.data) this.$set(this.data, 'vnode', CONST_PAGES[this.component]);
        }
    }
    destroyed() {
        if(this.instance) {
            let dynamic: UDynamicService = Ioc(UDynamicService);
            dynamic.destroy(this.instance);
        }
    }
}