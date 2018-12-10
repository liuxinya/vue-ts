import { removeDupliFromStr } from "./basic";

test('测试去重操作', () => {
    expect(removeDupliFromStr('asdsddssawqweqweq')).toBe('asdsdsawqweqweq')
})