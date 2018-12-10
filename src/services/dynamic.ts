import { Injectable } from '../decorators/injectable';
import Vue from 'vue';
import { DomHelper } from '../helpers/Dom';
// 动态添加组件 为了便于管理这里有一个统一的管理
@Injectable
export class UDynamicService {
    // 动态的打开一个组件
    open<T, K>(option: UDynamicOpenOptionObject<T, K>) {
        option = Object.assign({
            data: {},
            events: {}
        },option)
        let component = Vue.extend(option.component);
        let instance = new component({
            propsData: option.data as any
        });
        // for(let i in option.data) {
        //     instance.$props[i] = option.data[i];
        // }
        for(let i in option.events) {
            instance.$on(i, option.events[i]);
        }
        let temp = instance.$mount();
        if(option.selector) {
            (option.selector as any).appendChild(temp.$el);
        } else {
            document.body.appendChild(temp.$el);
        }
        return instance;
    }
    // 手动的关闭一个组件
    destroy(instance: object & Record<never, any> & Vue) {
        let dom = new DomHelper(instance.$el);
        dom.remove();
    }
    // 清空所有的组件
    destroyAll() {

    }
}
export interface UDynamicOpenOptionObject<T, K> {
    component: T; // 组件
    selector?: Element | string;
    data?: K; // 传入的数据
    events?: any;
}