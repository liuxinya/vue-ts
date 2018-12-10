import {UPipe, UPipeSync} from "./pipe";

test('UPipe属性测试', () => {
    expect(UPipe([
        (num) => num - 1,
        [
            (num: number, size: number) => num * size,
            2
        ],
        num => num / 6,
        [
            (num: number, size: number, plus: number) => num * size + plus,
            2,
            3
        ]
    ])(19)).toBe(15);
})

test('UPipeSync属性测试', async () => {
    expect(await UPipeSync([
        19,
        async (num) => num - 1,
        [
            (num: number, size: number) => num * size,
            2
        ],
        num => num / 6,
        [
            (num: number, size: number, plus: number) => num * size + plus,
            2,
            3
        ],
        async (num) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(num + 1)
                }, 1000);
            })
        }
    ])(19)).toBe(16);
})