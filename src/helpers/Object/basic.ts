import { isObject, isArray } from '../Type/basic';

export function merge(
    src: Object = {},
    target: Object = {}
) {
    let targetMap = new Map();
    for(let i in target) {
        // 是个对象 那么塞进去
        if(isObject(target[i])) {
            if(!targetMap.has(target[i])) {
                targetMap.set(target[i], target[i]);
                src[i] = isArray(target[i]) ? target[i] :  merge(src[i], target[i]);
            }
        } else {
            src[i] = target[i];
        }
    }
    return src;
}
