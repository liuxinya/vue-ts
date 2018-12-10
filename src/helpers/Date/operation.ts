import { generateDate } from './generate';

/**
 * 获取某个月有多少天
 */
function basicDateHandler(year: number | Date, month?: number, handler?: (
    year: number,
    month: number
) => {
    year: number,
    month: number,
    day: number
}) {
    if(year instanceof Date) {
        // 是个时间对象了 
        let date: Date = year;
        // 直接设置会破坏原来的对象，会造成不可控的错误
        year = date.getFullYear();
        month = date.getMonth() + 1;
    }
    let res = handler(year as number, month);
    let date = generateDate(res.year, res.month, res.day);
    return date;
}
export function getAllDaysOfMonth(year: number | Date, month?: number): number {
    return basicDateHandler(year, month, (year: number, month: number) => {
        return {
            year,
            month: month + 1,
            day: 0
        }
    }).getDate();
}
/**
 * 获取某个月开头的星期
 */
export function getBeginWeekOfDate(year: number | Date, month?: number) {
    return basicDateHandler(year, month, (year: number, month: number) => {
        return {
            year,
            month: month,
            day: 1
        }
    }).getDay();
}
/**
 * 
 * @param year 获取一个月的最后一天是周几
 * @param month 
 */
export function getEndWeekOfDate(year: number | Date, month?: number) {
    return basicDateHandler(year, month, (year: number, month: number) => {
        return {
            year,
            month: month + 1,
            day: 0
        }
    })
    .getDay();
}
export function isToday(year: number, month: number, day: number) {
    let today = new Date();
    let today_year = today.getFullYear();
    let today_month = today.getMonth() + 1;
    let today_day = today.getDate();
    return year === today_year && month === today_month && day === today_day;
}