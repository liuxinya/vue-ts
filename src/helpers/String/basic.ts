// 将字符串转换为数组
export function str2Arr(str: string, filter: (str?: string, index?: number) => boolean = () => true) {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        filter(arr[i], i) && arr.push(str[i]);
    }
    return arr;
}
// 将字符串中连续出现的合并成一个
export function removeDupliFromStr(str: string) {
    if(!str || str.length === 0) return str;
    let index = 0;
    let _str = str[index];
    for(let i = 1; i < str.length; i++) {
        if(str[i] !== str[i - 1]) {
            _str += str[i];
        }
    }
    return _str;
}