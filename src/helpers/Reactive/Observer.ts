import { UEventEmitter } from './../event';
import { removeFromArrayByValue } from '../Array/remove';

export class UObserver <T> extends UEventEmitter{
    constructor(

    ) {
        super();
    }
    index: number = 0;
    private val: T = null;
    handlers: {
        [prop: number]: ((val: T) => void)
    } = [];
    get value() {
        return this.val;
    }
    set value(v: T) {
        this.next(v);
    }
    setValue(v: T) {
        this.val = v;
    }
    // 简单的发布值
    next(val: T) {
        this.val = val;
        for(let i in this.handlers) {
            this.handlers[i](val);
        }
    }
    // 有可能是有次序的执行，这里可以使用sync
    async nextSync(val: T) {
        this.val = val;
        for(let i in this.handlers) {
            await this.handlers[i](val);
        }
    }
    map<K>(handler: (val: T, index: number) => K) {
        let subject = new UObserver<K>();
        let count = 0;
        this.subscribe((val: T) => {
            subject.next(handler(val, count++));
        })
        return subject;
    }
    merge<K>(subject: UObserver<K>) {
        let newsubject = new UObserver<T | K>();
        setTimeout(() => {
            let self_res = this.subscribe((v: T) => {
                newsubject.next(v);
            });
            let subject_res = subject.subscribe((v: K) => {
                newsubject.next(v);
            });
            // 这里别忘了取消订阅
            newsubject.once('unsubscribe', () => {
                subject_res();
                self_res();
            })
        })
        return newsubject;
    }
    // 订阅值
    subscribe(handler: (val: T) => void) {
        let index = this.index;
        this.handlers[this.index++] = handler;
        return async () => {
            delete this.handlers[index];
            this.emit('unsubscribe');
        }
    }
    // 取消所有的订阅
    unsubscribe() {
        for(let i in this.handlers) {
            delete this.handlers[i];
        }
        this.index = 0;
        this.emit('unsubscribe-all');
    }
}