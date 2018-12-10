import { DatePickComponent } from './index';
import { TransformDate } from './transformDate';
import { Ioc } from '../../decorators/injectable';
import { CurrMonthDateData } from './model';
export class DatePickComponentHelper {
    constructor(
        private vue: DatePickComponent
    ) {}
    isLongMonth(month: number | string): boolean {
        return this.vue.model.longMonthData.some((item) => {
            return item == month;
        })
    }
    isLeapYear(year: string | number): boolean {
        return year as any % 4 == 0 ? true : false;
    }
    // 得到选择日期的第一天是周几 周几意味着上周的数据就添加几条
    getDayOfFirstDateOfSelDate(): number {
        let date: string = this.vue.model.selYear + '/' + this.vue.model.selMonth + '/' + '01';
        return Number(new Date(date).getDay());
    }
    // 得到当前选择日期面板应该显示的信息
    getSelMonthDateData(): Array<CurrMonthDateData> {
        let loopTimes = 0;
        // 对二月进行单独处理
        if(this.vue.model.selMonth == 2) {
            loopTimes = this.isLeapYear(this.vue.model.selYear) ? 29 : 28;
        }else {
            loopTimes = this.isLongMonth(this.vue.model.selMonth)? 31 : 30;
        }
        let tem: Array<CurrMonthDateData> = [];
        for(let i = 1; i <= loopTimes; i++ ) {
            if(this.vue.model.selYear == this.vue.model.currYear && 
               this.vue.model.selMonth == this.vue.model.currMonth && 
               i == this.vue.model.currDate) {
                //  当天
                tem.push({
                    value: i, 
                    style: this.vue.model.baseColor.default, 
                    isCurrDay: true, 
                    isCurrMonth: true,
                    isSelected: false
                })
            }else {
                tem.push({
                    value: i, 
                    style: this.vue.model.baseColor.default, 
                    isCurrMonth: true,
                    isSelected: false
                });
            }
        }
        // 上一个月应该添加多少天
        this.getOtherMonthData(tem, 'pre');
        // 下一个月应该添加多少天
        this.getOtherMonthData(tem, 'next');
        return tem;
    }
    // 选择年 面板显示的10年的信息
    getTenYearsData() {
        let tem: Array<number> = [];
        let origin = this.vue.model.selYear - 8;
        let end = this.vue.model.selYear + 1;
        for(let i = origin; i <= end; i++ ) {
            tem.push(i);
        }
        return tem;
    }
    getSelTime(joinF: string = '/') {
        return this.vue.model.selYear + joinF + this.vue.model.selMonth + joinF + this.vue.model.selDate;
    }
    getOtherMonthData(tem:Array<CurrMonthDateData>, flag: string) {
        // n是循环的次数
        let n = this.getDayOfFirstDateOfSelDate();
        // originV是循环起始值
        let originV = 0;
        let loopMonth = (flag == 'pre' ? (this.vue.model.selMonth - 1) : (this.vue.model.selMonth + 1));
        if(loopMonth == 0 || loopMonth == 13) {
            originV = 31;
        }else if(loopMonth == 2) {
            originV =  this.isLeapYear(this.vue.model.selYear) ? 29 : 28;
        }else {
            originV = this.isLongMonth(loopMonth) ? 31 : 30;
        }
        if(flag == 'pre') {
            for(let i = originV; i > originV - n; i--) {
                tem.unshift({
                    value: i, 
                    style: this.vue.model.baseColor.disable, 
                    isPreMonth: true,
                    isSelected: false
                });
            }
        }else {
            for(let i = 1; tem.length < 42; i++) {
                tem.push({value: i, 
                    style: this.vue.model.baseColor.disable, 
                    isNextMonth: true,
                    isSelected: false
                })
            }
        }

    }
    // 是否显示上月下月的箭头
    isShowMonthArrow() {
        return !(this.vue.isShowMonthPanel || this.vue.isShowYearPanel);
    }
    // 让月信息面板里的span 哪一个高亮的条件
    isHighLight() {
        // 因为所有年月信息是在动态改变的
        // 当这次的selYear selMonth和上次操作信息里selYear和selMonth的一样 让当前面板对应的span高亮
        let f: boolean = this.vue.model.preOperInfo.selYear == this.vue.model.selYear &&
                         this.vue.model.preOperInfo.selMonth == this.vue.model.selMonth &&
                         this.vue.model.preOperInfo.selDate == this.vue.model.selDate &&
                         this.vue.model.preOperInfo.selDay == this.vue.model.selDay;
        // return的是当前信息一致的日子 在整个面板数组中的索引  以便html中的高亮判断
        if(f) {
            return this.vue.model.selDate + this.getDayOfFirstDateOfSelDate() - 1;
        } 
    }
    recordPreOper() {
        this.vue.model.preOperInfo.selYear = this.vue.model.selYear;
        this.vue.model.preOperInfo.selMonth = this.vue.model.selMonth;
        this.vue.model.preOperInfo.selDate = this.vue.model.selDate;
        this.vue.model.preOperInfo.selDay = this.vue.model.selDay;
    }
    // 因为后续牵涉到计算 所以都转为了number类型
    getYear(date: string) {
        return Number(date.slice(0, 4));
    }
    getMonth(date: string) {
        return Number(date.slice(5, 7));
    }
    getDate(date: string) {
        return Number(date.slice(8, 10));
    }
    getDay(date: string) {
        return Number(new Date(date).getDay());
    }
    selMonthCut() {
        this.vue.model.selMonth-- ;
        if(this.vue.model.selMonth == 0) {
            this.vue.model.selMonth = 12;
            this.vue.model.selYear-- ;
        }
    }
    selMonthAdd() {
        this.vue.model.selMonth++ 
        if(this.vue.model.selMonth == 13) {
            this.vue.model.selMonth = 1;
            this.vue.model.selYear++ ;
        }
    }
    selToday() {
        this.vue.model.selYear = this.vue.model.currYear;
        this.vue.model.selMonth = this.vue.model.currMonth;
        this.vue.model.selDate = this.vue.model.currDate;
        this.vue.model.selDay = this.vue.model.currDay;
        this.vue.model.selTime = this.vue.helper.getSelTime();
    }
}