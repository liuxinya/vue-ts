import { getFormatByMonth, getFormatDate, getFormatByDate, getWeekDesc, getFormateDateByYearMonthDay } from "./transform";

test('getFormatMonth测试', () => {
    expect(getFormatByMonth(new Date('2018-03-26'))).toBe('03')
})
test('getFormatByDate测试', () => {
    expect(getFormatByDate(new Date('2018-03-06'))).toBe('06')
})
test('getFormateDateByYearMonthDay测试', () => {
    expect(getFormateDateByYearMonthDay(2018, 3, 5)).toBe('20180305')
})
test('getFormatByDate测试', () => {
    expect(getFormatDate(new Date('2018-03-06'))).toBe('20180306')
})
test('测试获取星期方法', () => {
    expect(getWeekDesc(0)).toBe('星期日');
})