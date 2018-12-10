import { forEachAsync } from "./walk";
import { generateArr } from './generate';

test('测试异步数组', async () => {
    let begin = new Date();
    await forEachAsync(generateArr(10, (index) => index), async (val: number, index: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 200);
        })
    });
    let end = new Date();
    expect((end.getTime() -begin.getTime()) / 10).toBeGreaterThanOrEqual(200);
})