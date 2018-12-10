import { removeToOtherItem, exchangeArr } from './exchange';
test('生成一个2i数组', () => {
    expect(removeToOtherItem([0,1,2,3,4,5,6,7,8], [3,2,1,5,6], 4).join('')).toBe('012356478');
});