import { UEventEmitter } from './../helpers/event';
import { DomHelper } from './../helpers/Dom/index';
import Vue from 'vue';
import { CONST_COLOR } from '../config/constant/color';
import { isNill } from '../helpers/Type/basic';
import * as tinycolor from 'tinycolor2';
function getColor(value: string) {
    return tinycolor(value).isValid() ? value : (CONST_COLOR[value] || CONST_COLOR.default);
}
let elMap = new Map();
let AutoBgDirective = {
    inserted(el, binding) {
        let dom = new DomHelper(el);
        let color = getColor(binding.value || dom.getCssProperty('backgroundColor'));
        let activeColor = tinycolor(color).brighten(8).toString();
        let emitter = new UEventEmitter();
        elMap.set(el, emitter);
        emitter.on('change', (value) => {
            color = getColor(value || dom.getCssProperty('backgroundColor'));
            activeColor = tinycolor(color).brighten(8).toString();
            dom.setBackgroundColor( color);
        })
        dom.setBackgroundColor( color);
        dom.listen('mouseup', () => {
            dom.setBackgroundColor( activeColor);
        });
        dom.listen('mousedown', () => {
            dom.setBackgroundColor( color);
        });
        dom.listen('mouseenter', () => {
            dom.setBackgroundColor( activeColor);
        });
        dom.listen('mouseout', () => {
            dom.setBackgroundColor( color);
        });
    },
    update(el, binding) {
        elMap.get(el).emit('change', binding.value);
    },
    unbind(el) {
        elMap.delete(el);
    }
}
export {
    AutoBgDirective
}