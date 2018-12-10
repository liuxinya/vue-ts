test('promise all 是否异步: 期待是异步', async () => {
    let begin = new Date();
    await Promise.all([
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, 100)
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(12);
            }, 100)
        })
    ])
    let gap = new Date().getTime() - begin.getTime();
    expect(gap).toBeLessThanOrEqual(200);
})