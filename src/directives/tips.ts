import {  } from '../components/option/index';
import { directive_emit } from './_emit';
import { DomHelper } from '../helpers/Dom';
import { UDynamicService } from '../services/dynamic';
import { Ioc } from '../decorators/injectable';
import { UTipComponent } from '../components/tips/index';
let TipDirective = {
    inserted(el, binding, vnode) {
        let dom = new DomHelper(el);
        let dy: UDynamicService = Ioc(UDynamicService);
        let cpr: any = null;
        if(!binding.value) return;
        let handler = dom.listen('mouseenter', (e: MouseEvent) => {
            cpr = dy.open({
                component: UTipComponent,
                data: {
                    e: e,
                    content: binding.value
                }
            })
        })
        dom.listen('mouseleave', (e: MouseEvent) => {
            dy.destroy(cpr);
        })
        dom.listen('mousemove', (e: MouseEvent) => {
            cpr.$el.style.left = e.x - 18 + 'px';
            cpr.$el.style.top = e.y + 30 + 'px'
        })
    }
};
export {
    TipDirective
}