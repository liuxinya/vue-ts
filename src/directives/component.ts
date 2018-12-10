import { UDynamicService } from '../services/dynamic';
import { Ioc } from '../decorators/injectable';
let ComponentDirective = {
    inserted(el, binding, vnode) {
        let component: any = binding.value;
        let attrs = vnode.data.attrs;
        let dynamic: UDynamicService = Ioc(UDynamicService);
        let instance = dynamic.open({
          component: component,
          selector: el,
          data:  attrs ? attrs['component-data'] : {}
        });
        vnode.context.$emit('component-inited', instance);
    }
};
export {
    ComponentDirective
}