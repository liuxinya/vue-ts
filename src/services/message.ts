import { UDynamicService } from './dynamic';
import { Injectable, Ioc } from '../decorators/injectable';
import { MessageComponent } from '../components/message';
import { removeFromArrayByIndex, removeFromArrayByValue } from '../helpers/Array/remove';
let $dynamic: UDynamicService = Ioc(UDynamicService);
let instances: any[] = [];
@Injectable
export class UMessageService {
    default(msg: string, timeout = 2000, img: string = require('../assets/info.png')) {
        let instance = $dynamic.open({
            component: MessageComponent,
            data: {
                index: instances.length,
                message: msg,
                img: img,
                timeout: timeout
            }
        });
        instances.push(instance);
        instance.$on('animate-end', () => {
            removeFromArrayByValue(instances, instance);
            $dynamic.destroy(instance);
            for(let i in instances) {
                instances[i].index =  instances[i].index - 1;
            }
        });
        instance.$on('mouseenter', () => {
            for(let i in instances) {
                instances[i].pause();
            }
        })
        instance.$on('mouseleave', () => {
            for(let i in instances) {
                instances[i].continue();
            }
        })
    }
    info(msg: string, timeout = 2000) {
        this.default(msg, timeout,require('../assets/info.png'));
    }
    success(msg: string, timeout = 2000) {
        this.default(msg, timeout, require('../assets/success.png'));
    }
    warning(msg: string, timeout = 2000) {
        this.default(msg, timeout, require('../assets/warning.png'));
    }
    error(msg: string, timeout = 2000) {
        this.default(msg, timeout, require('../assets/error.png'));   
    }
}