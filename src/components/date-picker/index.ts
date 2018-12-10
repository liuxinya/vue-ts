import { InputComponent } from './../input/input';
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { DatePickerHelper, DayDetailInfo } from './helper';
import { divideArr } from '../../helpers/Array/divide';
import { UEventEmitter } from '../../helpers/event';
import { generateDate } from '../../helpers/Date/generate';
import { generateArr } from '../../helpers/Array/generate';
import { DomHelper } from '../../helpers/Dom/index';
import { isNill, isString } from '../../helpers/Type/basic';

@WithRender
@Component({
    components: {
        'u-input': InputComponent
    }
})
export class DatePickerComponent extends Vue {
    // 输入的时间
    @Prop() value: string;
    selectedDate: Date = new Date();
    year: number = null;
    month: number = null;
    showPanel: boolean = false;
    emitter: UEventEmitter = new UEventEmitter();
    weeks: string[] = [
        '日','一','二','三','四','五','六'
    ]
    showYears: boolean = false;
    showMonths: boolean = false;
    get selectedDateStr() {
        return DatePickerHelper.getStrByDate(this.selectedDate);
    }
    set selectedDateStr(v: string) {

    }
    get monthdata() {
        return divideArr(
            DatePickerHelper.generateMonthDetailInfo(
                this.month,
                this.year,
                (item: DayDetailInfo) => {
                    if(this.selectedDate) {
                        item.active = item.day === this.selectedDate.getDate()
                        && item.month === this.selectedDate.getMonth() + 1
                        && item.year === this.selectedDate.getFullYear()
                    }
                    return item;
                }
            ),
            7
        )
    }
    get icon() {
        return this.selectedDateStr ? 'fa-times-circle' : 'fa-calendar';
    }
    @Watch('value') inputValueChangeHandler(v: string) {
        this.setSelectedData(v);
    }
    yearOptions: number[] = [];
    monthOptions: number[] = [];
    created() {
        this.initDate();
        this.initEvent();
    }
    destroyed() {
        this.emitter.emit('destroyed');
    }
    initDate() {
        this.setSelectedData(this.value);
        this.year = this.selectedDate.getFullYear();
        this.month = this.selectedDate.getMonth() + 1;
    }
    initEvent() {
        let me = this;
        function clickHandler(e: MouseEvent) {
            me.showPanel = false;
            me.showYears = false;
        }
        window.addEventListener('click', clickHandler);
        this.emitter.once('destroyed', () => {
            window.removeEventListener('click', clickHandler);
        })
    }
    getYearOptions() {
        return generateArr(20, (index: number, arr: number[]) => {
            return this.year - 10 + index;
        })
    }
    getMonthOptions() {
        return generateArr(12, (index) => {
            return index + 1;
        })
    }
    setSelectedData(v: string | Date) {
        let res: Date = isString(v) ? DatePickerHelper.getDateByStr(v as string) : v as Date;
        this.selectedDate = res || this.selectedDate;
        if(!res) {
            this.$emit('input', this.selectedDateStr);
        }
    }
    clickInputHandler(e: MouseEvent) {
        if(!this.showPanel) {
            setTimeout(() => {
                this.showPanel = !this.showPanel;
            });
        }
        this.showYears = false;
    }
    clickRightIcon(e: MouseEvent) {
        e.stopPropagation();
        if(this.selectedDateStr) {
            this.selectedDate = null;
        } else {
            this.showPanel = !this.showPanel;
        }
    }
    chooseItem(e: MouseEvent, item: DayDetailInfo) {
        this.selectedDate = generateDate(item.year, item.month, item.day);
        if(!item.isThisMonth) {
            this.year = item.year;
            this.month = item.month;
        }
        this.showPanel = false;
        this.$emit('input', this.selectedDateStr);
    }
    clickPanel(e: MouseEvent) {
        e.stopPropagation();
        this.showYears = false;
    }
    lastYear(e: MouseEvent) {
        e.stopPropagation();
        this.year--;
    }
    lastMonth(e: MouseEvent) {
        e.stopPropagation();
        this.setMonth(this.month - 1);
    }
    nextMonth(e: MouseEvent) {
        e.stopPropagation();
        this.setMonth(this.month + 1);
    }
    nextYear(e: MouseEvent) {
        e.stopPropagation();
        this.year++;
    }
    clickYear(e: MouseEvent) {
        e.stopPropagation();
        this.showMonths = false;
        if(!this.showYears) {
            this.showYears = true;
            this.yearOptions = this.getYearOptions();
            Vue.nextTick(() => {
                (this.$refs.years as any).scrollTop = 24 * 10;
            });
            let dom = new DomHelper(this.$refs.years as any);
            this.initOptionsSrcollEvent(dom);
        }
    }
    handler: any = null;
    initOptionsSrcollEvent(dom: DomHelper) {
        let ele = dom.getDom();
        let lasttop;
        this.handler = dom.listen('scroll', (e) => {
            let top = ele.scrollTop;
            if(top < lasttop) {
                if(ele.scrollTop < 24 * 2) {
                    let firstyear = this.yearOptions[0];
                    for(let i = 0; i < 10; i++) {
                        this.yearOptions.unshift(firstyear - i - 1);
                    }
                    dom.unlisten('scroll', this.handler);
                    Vue.nextTick(() => {
                        ele.scrollTop = ele.scrollTop + 24 * 10;
                        this.initOptionsSrcollEvent(dom);
                    })
                }
                lasttop = top;
            } else {
                if((this.yearOptions.length * 24 - top) < 24 * 10) {
                    let lastyear = this.yearOptions[this.yearOptions.length - 1];
                    for(let i = 0; i < 10; i++) {
                        this.yearOptions.push(lastyear + 1 + i);
                    }
                    dom.unlisten('scroll', this.handler);
                    Vue.nextTick(() => {
                        ele.scrollTop = ele.scrollTop + 24;
                        this.initOptionsSrcollEvent(dom);
                    })
                }
            }
            lasttop = top;
        })
    }
    clickMonth(e: MouseEvent) {
        e.stopPropagation();
        this.showYears = false;
        if(!this.showMonths) {
            this.showMonths = true;
            this.monthOptions = this.getMonthOptions();
            Vue.nextTick(() => {
                if(this.month > 3) {
                    (this.$refs.months as any).scrollTop = (this.$refs.months as any).offsetHeight;
                }
            });
        }
    }
    chooseYear(v, e: MouseEvent) {
        e.stopPropagation();
        this.year = v;
        this.showYears = false;
        this.yearOptions = null;
        (this.$refs.years as any).removeEventListener('scroll', this.handler);
    }
    chooseMonth(v, e: MouseEvent) {
        e.stopPropagation();
        this.month = v;
        this.showMonths = false;
        this.monthOptions = null;
    }
    setMonth(val: number) {
        if(val < 1) {
            this.month = 12;
            this.year--;
        } else if(val > 12){
            this.month = 1;
            this.year++;
        } else {
            this.month = val;
        }
    }
}