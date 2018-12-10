import { isNumber, isArray, isObject } from './basic';
test('测试数据类型', () => {
    expect(isNumber(3)).toBe(true);
    expect(isNumber(NaN)).toBe(false);
    expect(isArray([])).toBe(true);
    expect(isObject({})).toBe(true);
})