import { isString } from 'util';

export function getDateByStr(str: string) {
    str = str.replace(/(\-|\:|\\)/gi, '/');
    if(!str || !isString(str)) {
        return null;
    }
    return new Date(str);
}
export function getStrByDate(date: Date, splitor: string = '/') {
    if(!date) return null;
    function formatDateStr(num: number) {
        num = +num;
        return num < 10 ? `0${num}` : num;
    }
    return `${date.getFullYear()}${splitor}${formatDateStr(date.getMonth() + 1)}${splitor}${formatDateStr(date.getDate())}`;
}