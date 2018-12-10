import * as tinycolor from 'tinycolor2';
import { isNill } from '../helpers/Type/basic';
import { CONST_COLOR } from '../config/constant/color';
import { DomHelper } from '../helpers/Dom';
let BgDirective = {
    inserted(el, binding) {
        let dom = new DomHelper(el);
        let color = tinycolor(binding.value).isValid() ? binding.value : (CONST_COLOR[binding.value] ? CONST_COLOR[binding.value] : CONST_COLOR.default);
        dom.setBackgroundColor(color);
    }
};
export {
    BgDirective
}