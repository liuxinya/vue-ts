import { BroadCrumbObject } from '../../../components/broadcrumbs';
import { BreadContentComponent } from '.';

export class BreadContentModel {
    constructor(
        private vue: BreadContentComponent
    ) {

    }
    activeCrumbIndex: number = 0;
    crumbs: BroadCrumbObject[] = [
        
    ];
}