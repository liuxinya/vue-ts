import Vue from 'vue';

export function addToArrayByIndex<T>(arr: T[], index: number, value: T, setValue: (arr: T[], index: number, val: T) => void = (
    arr: T[], index: number, val: T
) => {
    arr[index] = val;
}) {
    let len = arr.length;
    index = index < 0 ? 0 : (index >= len ? len : index);
    for(let i = len; i > index; i--) {
        setValue(arr, i, arr[i - 1]);
    }
    setValue(arr, index, value);
    return arr;
}
export function addToArrayByIndexByVue<T>(arr: T[], index: number, value: T) {
    let len = arr.length;
    index = index < 0 ? 0 : (index >= len ? len : index);
    for(let i = len; i > index; i--) {
        Vue.set(arr, i, arr[i - 1]);
    }
    Vue.set(arr, index, value);
    return arr;
}