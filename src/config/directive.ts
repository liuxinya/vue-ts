import { AutoBgDirective } from '../directives/auto-bg';
import { BgDirective } from '../directives/bg';
import { OptionDirective } from '../directives/option';
import { ComponentDirective } from '../directives/component';
import { TipDirective } from '../directives/tips';

const directive_lists = {
    autoBg: AutoBgDirective,
    bg: BgDirective,
    option: OptionDirective,
    component: ComponentDirective,
    tip: TipDirective
};
export {
    directive_lists
}