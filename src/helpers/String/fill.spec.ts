import { fillStr } from "./fill";

test('slice test', () => {
    let str = 'abcdefghijk';
    expect(str.slice(str.length - 2)).toBe('jk');
})
test('fill str with much sym', () => {
    let str = 'qianzhixaing';
    expect(fillStr(str, 3)).toBe('ing');
    expect(fillStr(str, 3, {
        sliceFromEnd: false
    })).toBe('qia');
    str = 'a';
    expect(fillStr(str, 3, {
        sym: '-'
    })).toBe('--a');
    expect(fillStr(str, 3)).toBe('  a');
})