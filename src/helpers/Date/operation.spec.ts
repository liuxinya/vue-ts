import { getAllDaysOfMonth, getBeginWeekOfDate, getEndWeekOfDate } from "./operation";

test('获取一个月的某一天的测试', () => {
    expect(getAllDaysOfMonth(2018, 2)).toBe(28);
    let date = new Date('2018-02-04');
    expect(getAllDaysOfMonth(date)).toBe(28)
})
test('获取一个月的第一天是周几', () => {
    let date = new Date('2018-02-01');
    expect(getBeginWeekOfDate(date)).toBe(4)
})
test('获取一个月的最后一天是周几', () => {
    let date = new Date('2018-02-01');
    expect(getEndWeekOfDate(date)).toBe(3)
    expect(getEndWeekOfDate(2018, 2)).toBe(3)
})