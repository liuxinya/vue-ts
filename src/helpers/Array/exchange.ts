import Vue from 'vue';
import { getMinMax } from '../Number/minmax';

export function exchangeArr(arr: any[], index1: number, index2: number) {
    if(index1 < arr.length && index2 < arr.length && index1 >=0 && index2 >=0) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    return arr;
}
export function removeToOtherItem<T>(arr: T[], indexes: number[], targetIndex: number, setValue: (arr: T[], index: number, value: T) => void = (
    arr: T[], index: number, value: T
) => {
    arr[index] = value;
}) {
    let sortedIndexes = indexes.sort();
    if(sortedIndexes.length > 0) {
        let count = 0;
        let _arr: T[] = [];
        for(let i = sortedIndexes[0]; i < targetIndex; i++) {
            if(sortedIndexes.indexOf(i) < 0) {
                setValue(arr, i - count, arr[i]);
            } else {
                _arr.push(arr[i]);
                count++;
            }
        }
        while(count > 0) {
            setValue(arr, targetIndex - count,  _arr[_arr.length - count])
            count--;
        }
        count = 0;
        _arr = [];
        for(let i = sortedIndexes[sortedIndexes.length - 1]; i > targetIndex; i--) {
            if(sortedIndexes.indexOf(i) < 0) {
                setValue(arr, i + count, arr[i]);
            } else {
                count++;
                _arr.unshift(arr[i]);
            }
        }
        if(targetIndex >= 0 && targetIndex < arr.length) {
            let target = arr[targetIndex];
            setValue(arr, targetIndex + count, target);
            while(count > 0) {
                setValue(arr, targetIndex + count - 1,  _arr[count - 1]);
                count--;
            }
        }
    }
    return arr;
}
export function exchangeArrByVue(arr: any[], index1: number, index2: number) {
    if(index1 < arr.length && index2 < arr.length && index1 >=0 && index2 >=0) {
        let temp = arr[index1];
        Vue.set(arr, index1, arr[index2]);
        Vue.set(arr, index2, temp);
    }
    return arr;
}