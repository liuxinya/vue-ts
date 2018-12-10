import { UDynamicService } from './dynamic';
import { OptionObject, OptionComponent, OptionClickObject } from './../components/option/index';
import { Injectable, Ioc } from '../decorators/injectable';
import { DomHelper } from '../helpers/Dom';
import { UEventEmitter } from '../helpers/event';
let emitter: UEventEmitter = new UEventEmitter();
function contextmenuHandler(e: MouseEvent) {
    emitter.emit('contextmenu', e);
}
function clickHandler(e: MouseEvent) {
    e.preventDefault();
    emitter.emit('click', e);
}
window.addEventListener('contextmenu', contextmenuHandler);
window.addEventListener('click', clickHandler);
@Injectable
export class UOptionService {
    open(data: OptionObject[], e: MouseEvent, showIcon: boolean = false) {
        let $emitter = new UEventEmitter();
        e.stopPropagation();
        e.preventDefault();
        let dynamic: UDynamicService = Ioc(UDynamicService);
        let instance = dynamic.open({
            component: OptionComponent,
            data: {
                data: data,
                showIcon,
                left: e.clientX + 'px',
                top: e.clientY + 'px'
            }
        });
        emitter.emit('contextmenu', e);
        emitter.once('click', (e:MouseEvent) => {
            (instance as any).show = false;
        })
        emitter.once('close', () => {
            (instance as any).show = false;
        })
        emitter.once('contextmenu', (e:MouseEvent) => {
            (instance as any).show = false;
        })
        instance.$once('close-animate', () => {
            dynamic.destroy(instance);
        });
        instance.$once('close-animate', () => {
            // directive_emit(vnode, 'context-closed', null);
            $emitter.emit('closed');
        });
        instance.$once('click-item', (event: OptionClickObject) => {
            // directive_emit(vnode, 'context-click', event);
            $emitter.emit('click', event);
        })
        return $emitter;
    }
    close() {
        emitter.emit('close');
    }
}