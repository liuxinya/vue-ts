import {merge} from "./basic";

test('merge测试', () => {
    expect(JSON.stringify(merge({
        a: 100,
        b: 10,
        c: {
            a: 12,
            b: 344
        }
    }, {
        b: 22,
        c: {
            d: 22,
            a: 88
        }
    })))
    .toBe(JSON.stringify({
        a: 100,
        b: 22,
        c: {
            a: 88,
            b: 344,
            d: 22
        }
    }))
})