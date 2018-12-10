import { generateDate } from "./generate";

test('测试日期生成器', () => {
    expect(generateDate(2018, 3, 26).toDateString()).toBe(new Date('2018-03-26').toDateString())
})