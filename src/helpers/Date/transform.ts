import { fillStr } from '../String/fill';

export function getFormatDate(date: Date = new Date(), sym: string = ''): string {
    return [
        date.getFullYear(),
        getFormatByMonth(date),
        getFormatByDate(date)
    ].join(sym);
}
export function getFormateDateByYearMonthDay(year: number, month: number, day: number, sym: string = '') {
    return [
        year,
        fillStr('' + month, 2, {
            sym: '0'
        }),
        fillStr('' + day, 2, {
            sym: '0'
        })
    ].join(sym);
}
export function getFormatByMonth(date: Date = new Date()) {
    return fillStr(date.getMonth() + 1 + '', 2, {
        sym: '0'
    })
}
export function getFormatByDate(date: Date = new Date()) {
    return fillStr(date.getDate() + '', 2, {
        sym: '0'
    })
}
export function getWeekDesc(week: number, prefix: string = '星期') {
    // 周
    let str = '';
    switch(week) {
        case 0:
            str = `日`;
            break;
        case 1:
            str = '一';
            break;
        case 2:
            str = '二';
            break;
        case 3:
            str = '三';
            break;
        case 4:
            str = '四';
            break;
        case 5:
            str = '五';
            break;
        case 6:
            str = '六';
            break;
    }
    return `${prefix}${str}`;
}
