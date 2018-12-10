import {LoadingComponent} from './../components/loading/index';
import {Injectable, Ioc} from '../decorators/injectable';
import {UDynamicService} from './dynamic';
import Vue from 'vue';
const $dynamic : UDynamicService = Ioc(UDynamicService);
let loadingcount = 0;
let $instance: object & Record<never, any> & Vue = null;
@Injectable
export class ULoadingService {
    open(option : {
        type?: string,
        opacity?: number,
        bg?: string,
        clickClose?: boolean
    } = {}) {
        if($instance && loadingcount > 0) {
            loadingcount++;
        } else {
            option = Object.assign({
                type: 'spin',
                opacity: .8,
                bg: 'white',
            }, option);
            let instance = $dynamic.open({component: LoadingComponent, data: option});
            instance.$once('animate-end', () => {
                $dynamic.destroy(instance);
            });
            $instance = instance;
        }
    }
    close() {
        loadingcount--;
        if($instance) {
            if(loadingcount <=0) {
                ($instance as any).show = false;
                $instance = null;
                loadingcount = 0;
            }
        }
    }
}