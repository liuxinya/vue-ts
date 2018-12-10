import { isString } from '../../helpers/Type/basic';
import { getAllDaysOfMonth, getBeginWeekOfDate, getEndWeekOfDate, isToday } from '../../helpers/Date/operation';
import { generateArr } from '../../helpers/Array/generate';
import { getDateByStr, getStrByDate } from '../../helpers/Array/format';

export class DatePickerHelper {
    static getDateByStr(str: string) {
        return getDateByStr(str);
    }
    static getStrByDate(date: Date, splitor: string = '/') {
        return getStrByDate(date, splitor);
    }
    static generateMonthDetailInfo(month: number, year: number, map: (item: DayDetailInfo) => DayDetailInfo = item => item):  DayDetailInfo[]{
        if(!month || !year) {
            let date = new Date();
            month = month ? +month : date.getMonth() + 1;
            year = year ? +year : date.getFullYear();
        }
        let lastmonthdays = DatePickerHelper.getAllDaysOfMonth(month - 1, year);
        let allmonthdays = DatePickerHelper.getAllDaysOfMonth(month, year);
        // 上个月的天数
        let beginWeek = DatePickerHelper.getBeginWeekByMonth(month, year);
        let lastmontharr = generateArr<DayDetailInfo>(beginWeek, (index: number, arr: DayDetailInfo[]) => {
            let obj = {
                day: lastmonthdays - beginWeek + 1 + index,
                year: month === 1 ? year - 1 : year,
                month: month === 1 ? 12 : month - 1,
                isThisMonth: false,
                active: false,
            };
            return map(DatePickerHelper.isToday(obj));
        });
        let thismontarr = generateArr<DayDetailInfo>(allmonthdays, (index: number, arr: DayDetailInfo[]) => {
            let obj = {
                day: index + 1,
                year: year,
                month: month,
                isThisMonth: true,
                active: false,
            };
            return map(DatePickerHelper.isToday(obj));
        });
        let nextmontharr = generateArr<DayDetailInfo>(7 - (beginWeek + allmonthdays) % 7, (index: number, arr: DayDetailInfo[]) => {
            let obj = {
                day: index + 1,
                year: month === 12 ? year + 1 : year,
                month: month === 12 ? 1 : month + 1,
                isThisMonth: false,
                active: false,
            }
            return map(DatePickerHelper.isToday(obj));
        });
        return [...lastmontharr, ...thismontarr, ...nextmontharr];
    }
    static getAllDaysOfMonth(month: number, year: number) {
        return getAllDaysOfMonth(year, month);
    }
    static getBeginWeekByMonth(month: number, year: number) {
        return getBeginWeekOfDate(year, month);
    }
    static getEndWeekByMonth(month: number, year: number) {
        return getEndWeekOfDate(year, month);
    }
    static isToday(info: DayDetailInfo) {
        info.isToday = isToday(info.year, info.month, info.day);
        return info;
    }
}
export interface DayDetailInfo {
    day: number; // 值
    year: number; // 年
    month: number; // 月
    isToday?: boolean; // 是不是今天
    isThisMonth: boolean; // 是不是这个月
    active?: boolean; // 是不是被选中了
}