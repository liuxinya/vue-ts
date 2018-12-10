import { DatePickComponent } from './index';
export class DatePickComponentModel {
    constructor(
        private vue: DatePickComponent
    ) {}
    currTime: string = this.vue.tranfrom.transformDateToSting(new Date());
    currYear: number = this.vue.helper.getYear(this.currTime);
    currMonth: number = this.vue.helper.getMonth(this.currTime);
    currDate: number = this.vue.helper.getDate(this.currTime);
    currDay: number = this.vue.helper.getDay(this.currTime);

    // 选择的时间 默认等于当前时间
    selTime: string = '' 
    selYear: number = 0;
    selMonth: number = 0;
    selDay: number = 0;
    selDate: number = 0;
    // 用来记录上一次选择的操作信息
    preOperInfo: PreOperInfo = {
        selYear: 0,
        selMonth: 0,
        selDay: 0,
        selDate: 0,
    }
    weeks: Array<string | number> = ['日','一','二','三','四','五','六'];
    months: Array<number |string> = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    longMonthData: Array<string | number> = ['1','3','5','7','8','10','12'];
    extendPanelList: Array<string> = ['Today'];
    currMonthDateData: Array<CurrMonthDateData> = [];
    baseColor:any =  {
        default: '#495060',
        disable: '#bbbec4'
    };
    // 面板显示的当月信息
    get selMonthDateData() {
        return this.vue.helper.getSelMonthDateData();
    };
    // 面板显示10年的年份信息
    get tenYearsData() {
        return this.vue.helper.getTenYearsData();
    }
}
export interface CurrMonthDateData {
    value: number;
    style: string;
    isCurrDay?: boolean;
    isPreMonth?: boolean;
    isNextMonth?: boolean;
    isCurrMonth?: boolean;
    isDisabled?: boolean;
    isSelected?: boolean;
}
export interface PreOperInfo {
    selYear: number;
    selMonth: number;
    selDay: number;
    selDate: number;
}