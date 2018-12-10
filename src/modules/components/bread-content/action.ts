import { BreadContentComponent } from '.';
import { BroadCrumbContextmenuObject } from '../../../components/broadcrumbs';

export class BreadContentAction {
    constructor(
        private vue: BreadContentComponent
    ) {

    }
    crumbContextmenuHandler(e : BroadCrumbContextmenuObject) {
        this.vue.helper.openCrumbOption(e);
    }
}