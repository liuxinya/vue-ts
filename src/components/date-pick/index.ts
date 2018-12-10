import { DatePickComponentModel } from './model';
import { DatePickComponentHelper } from './helper';
import { DatePickComponentAction } from './action';
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { TransformDate } from './transformDate';
import { Ioc } from '../../decorators/injectable';

@WithRender
@Component({})
export class DatePickComponent extends Vue {
    action: DatePickComponentAction = null;
    helper: DatePickComponentHelper = null;
    model: DatePickComponentModel = null;
    
    tranfrom: TransformDate = Ioc(TransformDate);
    isShowPanel: boolean = false;
    isShowYearPanel: boolean = false;
    isShowMonthPanel: boolean = false;
    selResult: string = '';
    @Prop({
        default: () => {
            return {
                isContinueSelMonth: false,
                default: false,
                today: false,
                defaultDay: '',
                disabled: false
            }
        }
    }) option: Option;
    @Watch('model.selTime') change(val) {
        this.selResult = val;
    }
    created() {
        this.action = new DatePickComponentAction(this);
        this.helper = new DatePickComponentHelper(this);
        this.model = new DatePickComponentModel(this);
        this.action.initData();
    }
    mounted() {
        window.addEventListener('click', this.clickHandle)
    }
    clickHandle() {
        this.isShowPanel = false;
    }
    destroyed() {
        window.removeEventListener('click', this.clickHandle)
    }
}
export interface Option {
    isContinueSelMonth?: boolean; // 选择年份之后时候继续选择月
    default?: boolean;  // 是否默认展示今天
    today?: boolean;   // 是否展示today按钮
    defaultDay?: string;   // 默认展示的日期
    disabled?: boolean;  // 是否禁用日期选择
}