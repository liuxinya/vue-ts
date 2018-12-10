import { CurrMonthDateData } from './model';
import { DatePickComponent } from './index';
export class DatePickComponentAction {
    constructor(
        private vue: DatePickComponent,
    ) {}
    initData() {
        if(this.vue.option.default) {
            // 2018/05/23
            this.vue.model.selTime = this.vue.model.currTime;
            this.handleInput(this.vue.model.selTime);
        }
        // 2018
        this.vue.model.selYear = this.vue.model.currYear;
        // 05
        this.vue.model.selMonth = this.vue.model.currMonth;
        // 23
        this.vue.model.selDate = this.vue.model.currDate;
        // 3
        this.vue.model.selDay = this.vue.model.currDay;
        // 对页面当前的展示 进行初始化
        this.vue.helper.getSelMonthDateData();
        if(this.vue.option.defaultDay) {
            this.vue.model.selTime = this.vue.option.defaultDay;
        }
    }
    preMonth() {
        this.vue.helper.selMonthCut();
    }
    nextMonth() {
        this.vue.helper.selMonthAdd();
    }
    preYear() {
        if(this.vue.isShowYearPanel) {
            this.vue.model.selYear -= 10;
        }else {
            this.vue.model.selYear-- ;
        }
    }
    nextYear() {
        if(this.vue.isShowYearPanel) {
            this.vue.model.selYear += 10;
        }else {
            this.vue.model.selYear++ ;
        }
    }   
    selDate(item: CurrMonthDateData, index) {
        this.vue.model.selDate = item.value;
        if(item.isPreMonth) {
            this.vue.helper.selMonthCut();
        }else if(item.isNextMonth) {
            this.vue.helper.selMonthAdd();
        }
        this.vue.model.selTime = this.vue.helper.getSelTime();
        this.selDateUnionOper();
    }
    clickInput() {
        this.vue.isShowPanel = true;
    }
    clickIcon() {
        if(this.vue.option.disabled) return;
        this.vue.isShowPanel = !this.vue.isShowPanel;
    }
    showYearPanel() {
        if(this.vue.isShowYearPanel && this.vue.isShowMonthPanel) {
            this.vue.isShowYearPanel = false;
            this.vue.isShowMonthPanel = false;
            return
        }
        if(this.vue.option.isContinueSelMonth) {
            this.vue.isShowYearPanel = true;
            this.vue.isShowMonthPanel = true;
        }else {
            this.vue.isShowYearPanel = !this.vue.isShowYearPanel;
        }
    }
    showMonthPanel() {
        this.vue.isShowMonthPanel = true;
    }
    // 在10年面板信息上点击选择触发
    selYear(item) {
        this.vue.model.selYear = Number(item);
        this.vue.isShowYearPanel = false;
    }
    selMonth(item) {
        this.vue.model.selMonth = Number(item);
        this.vue.isShowMonthPanel = false;
    }
    extendPanelClick(item) {
        if(item == 'Today') {
            this.vue.helper.selToday();
            this.selDateUnionOper();
        }
    }
    clickIconCircle() {
        if(this.vue.option.disabled) return;
        this.vue.selResult = '';
        this.handleInput(this.vue.selResult);
    }
    handleInput(selResult) {
        this.vue.$emit('input', selResult);
    }
    // 选择日期的时候的一些公共操作 
    selDateUnionOper( ) {
        this.handleInput(this.vue.model.selTime);
        this.vue.isShowPanel = false;
        this.vue.$emit('select', this.vue.model.selTime);
        // 记录这次操作
        this.vue.helper.recordPreOper();
    }
}