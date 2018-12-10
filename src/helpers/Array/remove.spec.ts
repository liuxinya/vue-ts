import { removeFromArrayByIndexes, removeFromArrayByCondition, removeFromArrayByValue, removeFromArrayByValues } from './remove';
// removeFromArrayByIndexes([])
test('移除指定的下标的数组', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let indexes = [2, 5];
    expect(removeFromArrayByIndexes(arr, indexes).join('')).toBe('124578');
})
test('移除指定条件的数组', () => {
    let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let condition: (val: number, index: number) => boolean = (val: number, index: number) => {
        return val % 2 == 1;
    }
    expect(removeFromArrayByCondition(arr, condition).join('')).toBe('2468')
})
test('移除指定值的数组', () => {
    let arr: number[] = [1, 2, 3, 5, 13];
    expect(removeFromArrayByValue(arr, 3).join('')).toBe('12513')
})
test('移除指定数值数组的数组', () => {
    let arr: number[] = [1, 2, 3, 4, 5, 6];
    let vals: number[] = [2, 3, 4];
    expect(removeFromArrayByValues(arr, vals).join('')).toBe('156')
})