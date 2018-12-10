import { TreeComponent, TreeDataObject } from '.';
import { TreeDragable, TreeDragEmitObject } from './common/dragable';
import Vue from 'vue';
import { TreeComponentObject } from './index';

export class TreeAction {
    constructor( public vue: TreeComponent) {

    }
    clickMenu(item: TreeDataObject, index: number, e: MouseEvent) {
        let isLeaf = this.vue.helper.isLeaf(item);
        let obj: TreeClickObject = {
            level: this.vue.level,
            index: index,
            item: item,
            instance: this.vue,
            parent: item.parent,
            isLeaf: isLeaf,
            event: e
        };
        if(isLeaf) {
            this.vue.helper.toggleActiveItem(item, this.vue.level);
        }
        if(this.vue.level === 1) {
            if(this.vue.shouldActive) {
                obj.activeMenu = this.vue.model.activeMenu;
            }
            this.vue.emitter.emit('click', obj);
        }
        if(e.metaKey || e.ctrlKey || e.shiftKey) {
            // 释放了功能键，原先的不触发
            this.vue.$emit('click', obj);
            return;
        }
        if(!this.vue.async) {
            // 不是异步加载，直接关闭
            this.vue.helper.toggleMenu(item);
            this.vue.$emit('click', obj);
        } else {
            if(!item.loading) {
                item.loading = true;
                obj.goOn = () => {
                    item.loading = false;
                    this.vue.helper.toggleMenu(item);
                };
                this.vue.$emit('click', obj);
            }
        }
    }
    onChildCount(item: TreeDataObject, index: number, data: {
        count: number
    }) {
        item.slide_count += data.count;
        // console.log(item, data.count, item.slide_count);;
        this.vue.$emit('child-count', data);
    }
    clickTreeHandler(e: TreeClickObject) {
        if(e.isLeaf) {
            this.vue.helper.toggleActiveItem(e.item, this.vue.level);
        }
        if(this.vue.level === 1) {
            e.activeMenu = this.vue.model.activeMenu;
            // 已经在最外层了，这个时候进行点击的判断
            this.vue.emitter.emit('click', e);
        }
        this.vue.$emit('click', e);
    }
    clearSelectedLists() {
        this.vue.model.selectedItemLists.forEach((item: TreeDataObject) => {
            item.selected = false;
        });
        this.vue.model.selectedItemLists = [];
    }
    dragstart(e: TreeDragEmitObject<any>) {
        this.vue.$emit('dragstart', e);
    }
    dragend(e: TreeDragEmitObject<any>) {
        this.vue.$emit('dragend', e);
    }
    drop(e: TreeDragEmitObject<any>) {
        this.vue.$emit('drop', e);
    }
    contextmenuHandler(event: MouseEvent, item: TreeDataObject, index: number) {
        this.vue.$emit('contextmenu', {
            event,
            index,
            item
        })
    }
    onContextMenu(e: TreeContextmenuObject) {
        this.vue.$emit('contextmenu', e);
    }
    componentInited(e: object & Record<never, any> & Vue, component: TreeComponentObject, index: number) {
        if(component.inited) {
            component.inited(e);
        }
    }
}
export class TreeClickObject {
    level: number;
    index: number;
    activeMenu?: TreeDataObject;
    item: TreeDataObject;
    parent: TreeDataObject;
    instance: TreeComponent;
    isLeaf: boolean;
    event: MouseEvent;
    goOn?: Function;
    [prop: string]: any;
}
export class TreeContextmenuObject {
    item: TreeDataObject;
    event: MouseEvent;
    index: number;
}