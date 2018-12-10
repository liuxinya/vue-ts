import { TreeSelectable } from './common/selectable';
import { TreeComponent } from '.';
import { TreeDataObject } from './index';

export class TreeModel {
    constructor( public vue: TreeComponent) {

    }
    activeMenu: TreeDataObject = null;
    selectedItemLists: TreeDataObject[] = [];
    shiftBegin: {
        item: TreeDataObject,
        index: number
    } = null;
    get style() {
        return {
            'padding-left': (this.vue.level - 1) * 14 + 14 + 'px'
        }
    }
    getSectionStyle(item: TreeDataObject) {
        return {
            'max-height': item.open ? item.slide_count * 40 + 'px' : 0
        }
    }
    getImgSrc(item: TreeDataObject, index: number) {
        return this.vue.getImg ? this.vue.getImg(item, index) : this.vue.helper.defaultImgGetter(item, index);
        
    }
}