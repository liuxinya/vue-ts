export class TransformDate {
    constructor() {}
    // new Date ====> 2018/05/23
    transformDateToSting(date: Date, joinF: string = '/') {
        let y: string | number = date.getFullYear();
        let m: string | number = date.getMonth() + 1;
        let d: string | number = date.getDate();
        m = m < 10? ('0' + m) : m;
        d = d < 10? ('0' + d) : d;
        return y + joinF + m + joinF + d
    }
}