import { UEventEmitter } from './../event';
import { removeFromArrayByValue } from '../Array/remove';
import { UObserver } from './Observer';

export class UBehaviorSubject <T> extends UObserver<T> {
    constructor(
        private v: T
    ) {
        super();
        this.next(v);
    }
    subscribe(handler: (val: T) => void) {
        handler(this.value);
        let index = this.index;
        this.handlers[this.index++] = handler;
        return async () => {
            delete this.handlers[index];
            this.emit('unsubscribe');
        }
    }
}