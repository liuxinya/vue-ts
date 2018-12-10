import { exchangeArr } from './exchange';
import { generateArr } from './generate';
import { removeFromArrayByIndex, removeFromArrayByIndexes, removeFromArrayByCondition, removeFromArrayByValue, removeFromArrayByValues } from './remove';
import { forEachAsync, mapAsync, filterAsync } from './walk';
export class UArray <T> {
    constructor(
        private arr: T[] = []
    ) {

    }
    static generate = generateArr;
    getValue() {
        return this.arr;
    }
    exchange(index1: number, index2: number) {
        exchangeArr(this.arr, index1, index2);
        return this;
    }
    removeByIndex(index: number) {
        removeFromArrayByIndex(this.arr, index);
        return this;
    }
    removeByIndexes(indexes: number[] = []) {
        removeFromArrayByIndexes(this.arr, indexes);
        return this;
    }
    removeByCondition(condition: (item: T, index: number) => Boolean) {
        removeFromArrayByCondition(this.arr, condition);
        return this;
    };
    removeByValue(value: T) {
        removeFromArrayByValue(this.arr, value);
        return this;
    }
    removeByValues(values: T[]) {
        removeFromArrayByValues(this.arr, values);
        return this;
    }
    async forEachAsync(handler?: (val?: T, index?: number) => void) {
        await forEachAsync(this.arr, handler);
        return this.arr;
    }
    async mapAsync<L>(handler?: (val?: T, index?: number) => Promise<L>) {
        return await mapAsync(this.arr, handler);
    }
    async filterAsync(handler?: (val?: T, index?: number) => Promise<boolean>) {
        return await filterAsync(this.arr, handler);
    }
}