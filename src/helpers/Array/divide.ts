export function divideArr<T>(arr: T[], num: number) {
    let _arr = [];
    let temp: T[] = [];
    for(let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        if(i % num === num - 1) {
            _arr.push(temp);
            temp = [];
        }
    }
    temp.length > 0 && _arr.push(temp);
    return _arr;
}