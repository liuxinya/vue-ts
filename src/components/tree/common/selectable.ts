import {TreeAction} from './../action';
import {TreeComponent} from '..';
import {TreeModel} from '../model';
import {TreeDataObject} from '../index';
import {TreeClickObject} from '../action';
import {removeFromArrayByIndex, removeFromArrayByIndexes} from '../../../helpers/Array/remove';
import { CONST_TYPE_SYM } from '../../../config/constant/type';
import { isNill } from '../../../helpers/Type/basic';
import { getMinMax } from '../../../helpers/Number/minmax';

export class TreeSelectable {
    constructor(private action : TreeAction, private model : TreeModel) {}
    private isFunctionKey(e : MouseEvent) {
        return e.metaKey || e.shiftKey || e.ctrlKey;
    }
    private isSingleChoose(e : MouseEvent) {
        return e.metaKey || e.ctrlKey;
    }
    removeTreeItem(item: TreeDataObject) {
        // 把这个节点移除
        let index = this
            .model
            .selectedItemLists
            .indexOf(item);
        if(index >= 0) {
            item.selected = false;
            removeFromArrayByIndex(this.model.selectedItemLists, index);
        }
    }
    // move 表示有重复的是否移除，true表示移除
    addTreeItem(item : TreeDataObject, move: boolean = true) {
        let index = this
            .model
            .selectedItemLists
            .indexOf(item);
        if (index < 0) {
            let indexes = [];
            // 寻找对应的子节点(被选中的，因为可能之前已经选过一些子节点)
            let children = this.getChildren(item, (_item, _index) => {
                _item.selected = false;
                indexes.push(_index);
            });
            if (children.length > 0) {
                // 有孩子节点 那么需要无移除孩子节点
                removeFromArrayByIndexes(this.model.selectedItemLists, indexes);
                this.action.vue.$emit('message', {
                    type: CONST_TYPE_SYM.warning,
                    message: '您选择的是父亲节点，原节点将会被覆盖',
                    data: {
                        selectable: this,
                        item
                    }
                });
            }
            let index = this.getParent(item);
            if(!isNill(index)) {
                // 有父亲， 同样的去替换
                this.action.vue.$emit('message', {
                    type: CONST_TYPE_SYM.warning,
                    message: '您选择的节点已经存在父亲节点!即将覆盖父亲节点',
                    data: {
                        selectable: this,
                        item
                    }
                });
                this.model.selectedItemLists[index].selected = false;
                removeFromArrayByIndexes(this.model.selectedItemLists, [index]);
            }
            this.model
                .selectedItemLists
                .push(item);
            item.selected = true;
        } else {
            if(move) {
                item.selected = false;
                removeFromArrayByIndex(this.model.selectedItemLists, index);
            }
        }
    }
    // 获取节点的所有的子节点
    getChildren(item : TreeDataObject, handler: (_item?: TreeDataObject, index?: number) => void = () => {}) {
        let arr : {
            item : TreeDataObject,
            index : number
        }[] = [];
        for (let i = 0; i < this.model.selectedItemLists.length; i++) {
            let _item = this.model.selectedItemLists[i];
            let parent = _item.parent;
            while (parent) {
                if (item === parent) {
                    // 找到了
                    arr.push({item: _item, index: i});
                    handler(_item, i);
                    break;
                } else {
                    parent = parent.parent;
                }
            }
        }
        return arr;
    }
    getParent(item : TreeDataObject) {
        for(let i = 0; i < this.model.selectedItemLists.length; i++) {
            let _item = this.model.selectedItemLists[i];
            let parent = item.parent;
            while(parent) {
                if(parent === _item) {
                    return i;
                } else {
                    parent = parent.parent;
                }
            }
        }
        return null;
    }
    chooseItem(data : TreeClickObject) {
        // 是否是功能键
        if (this.isFunctionKey(data.event)) {
            // meta或者ctrl
            if (this.isSingleChoose(data.event)) {
                this.addTreeItem(data.item); // 添加节点
            } else {
                if(data.event.shiftKey && data.item.parent === this.model.shiftBegin.item.parent) {
                    // 是多选 只能选择当前
                    // console.log('asda');
                    let parent = data.item.parent ? data.item.parent.children : this.model.vue.data;
                    let minmax = getMinMax(data.index, this.model.shiftBegin.index);
                    for(let i = 0; i < parent.length; i++) {
                        if(i < minmax.min || i > minmax.max) {
                            this.removeTreeItem(parent[i]);
                        } else {
                            this.addTreeItem(parent[i], false); // 添加节点   
                        }
                    }
                }
            }
        } else {
            TreeSelectable.clear(this.model);
        }
    }
    static clear(model : TreeModel, handler?: (item : TreeDataObject, index?: number) => void) {
        model
            .selectedItemLists
            .forEach((item : TreeDataObject, index : number) => {
                item.selected = false;
                handler && handler(item, index);
            });
        model.selectedItemLists = [];
    }
    static hasSelected(model : TreeModel, item : TreeDataObject) {
        return model
            .selectedItemLists
            .indexOf(item) >= 0;
    }
}
export interface TreeMessageObject {
    type: Symbol;
    message: string;
    data?: {
        selectable: TreeSelectable;
        item: TreeDataObject;
    }

}