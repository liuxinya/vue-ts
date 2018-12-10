import { isNumber } from '../Type/basic';

export function fillStr(str: string, size: number = 2, option?: {
    sym?: string, // 符号
    left?: boolean, // 左侧还是右侧
    slice?: boolean, // 是否截取
    sliceFromEnd?: boolean // 是否保留右侧
}) {
    // 初始化配置项
    option = Object.assign({
        sym: ' ',
        left: true,
        slice: true, 
        sliceFromEnd: true
    }, option || {});
    if(str.length > size) {
        // 长度可能比指定的长度要长
        if(option.slice) {
            str = option.sliceFromEnd ? str.slice(str.length - size) : str.slice(0, size);
        }
    } else {
        // 判断是左边还是右边
        size = isNumber(size) ? size : 2;
        let gap = size - str.length;
        for(let i = 0; i < gap; i++) {
            str = option.left ? (option.sym + str) : (str + option.sym);
        }
    }
    return str;
}