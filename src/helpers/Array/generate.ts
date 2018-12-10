export function generateArr<T>(num: number, generator: (index?: number, arr?: T[]) => T = () => {
    return null;
}) {
    let arr: T[] = [];
    for(let i = 0; i < num; i++) {
        arr.push(generator(i, arr));
    }
    return arr;
}