import * as moment from 'moment';
export function dateFilter(value: number | Date, formatter: string = 'YYYY-MM-DD HH:mm:ss') {
    if(!value) return '';
    return moment(value).format(formatter);
}