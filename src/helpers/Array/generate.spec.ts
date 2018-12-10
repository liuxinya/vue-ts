import { generateArr } from './generate';
test('生成一个2i数组', () => {
    expect(generateArr(5, (index: number) => {
        return index * 2;
    }).join('')).toBe('02468');
});