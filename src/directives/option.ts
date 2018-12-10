import { Ioc } from '../decorators/injectable';
import { OptionComponent, OptionClickObject } from '../components/option/index';
import { directive_emit } from './_emit';
import { DomHelper } from '../helpers/Dom';
import { UOptionService } from '../services/option';
let OptionDirective = {
    inserted(el, binding, vnode) {
        let dom = new DomHelper(el);
        let handler = dom.listen('contextmenu', (e: MouseEvent) => {
            let optionServie: UOptionService = Ioc(UOptionService);
            let emitter = optionServie.open(binding.value, e);
            emitter.once('close', () => {
                directive_emit(vnode, 'context-closed', null);
            });
            emitter.once('click', (event: OptionClickObject) => {
                directive_emit(vnode, 'context-click', event);
            });
        })
    }
};
export {
    OptionDirective
}