import { isArray, isFunction } from '../Type/basic';

export async function forEachAsync<T>(arr: T[], handler?: (val?: T, index?: number) => void) {
    if(!isArray(arr)) return;
    for(let i = 0; i < arr.length;i++) {
        if(handler && isFunction(handler)) {
            await handler(arr[i], i);
        }
    }
}
export async function mapAsync<K, L>(arr: K[], handler?: (val?: K, index?: number) => Promise<L>) {
    if(!isArray(arr)) return null;
    let _arr: L[] = [];
    for(let i = 0; i < arr.length;i++) {
        if(handler && isFunction(handler)) {
            _arr.push(await handler(arr[i], i));
        }
    }
    return _arr;
}
export async function filterAsync<K>(arr: K[], handler?: (val?: K, index?: number) => Promise<boolean>) {
    if(!isArray(arr)) return null;
    let _arr: K[] = [];
    for(let i = 0; i < arr.length;i++) {
        if(handler && isFunction(handler) && await handler(arr[i], i)) {
            _arr.push(arr[i]);
        }
    }
    return _arr;
}