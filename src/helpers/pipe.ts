import {isFunction, isArray} from './Type/basic';

export function UPipeSync(arr : any[]) {
    return async (val : any) => {
        if (!isArray(arr) || arr.length <= 0) {
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (!isFunction(arr[i])) {
                // 不是函数，那么判断是不是数组
                if (isArray(arr[i])) {
                    // 是数组的话那么就得去看看是不是满足 第一个是函数，第二个是参数
                    let [func,
                        ...args] = arr[i];
                    val = await(func as Function).apply(this, [
                        val, ...args
                    ]);
                }
                // 不是函数也不是数组，那么就是一些无关紧要的常量，直接忽略，没必要处理
            } else {
                // 是函数，直接运行
                val = await arr[i](val);
            }
        }
        return val;
    }
}
// 能够支持pipe函数的自定义配置
export function UPipe(arr : any[]) {
    return (val: any) => {
        if (!isArray(arr) || arr.length <= 0) {
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (!isFunction(arr[i])) {
                // 不是函数，那么判断是不是数组
                if (isArray(arr[i])) {
                    // 是数组的话那么就得去看看是不是满足 第一个是函数，第二个是参数
                    let [func,
                        ...args] = arr[i];
                    val = (func as Function).apply(this, [
                        val, ...args
                    ]);
                }
                // 不是函数也不是数组，那么就是一些无关紧要的常量，直接忽略，没必要处理
            } else {
                // 是函数，直接运行
                val = arr[i](val);
            }
        }
        return val;
    }
}
