import { generateDate } from './generate';
import { getAllDaysOfMonth, getBeginWeekOfDate, getEndWeekOfDate } from './operation';

export class UDate {
    constructor(
        private date: Date = new Date()
    ) {

    }
    static generate = generateDate;
    static getAllDaysOfMonth = getAllDaysOfMonth;
    static getBeginWeekOfDate = getBeginWeekOfDate;
    static getEndWeekOfDate = getEndWeekOfDate;
}