import { TreeComponent, TreeDataObject } from '.';
import { isString, isNill, isFunction } from '../../helpers/Type/basic';
import { TreeDragable } from './common/dragable';
import Vue from 'vue';
let key = 0;
export class TreeHelper {
    constructor( private vue: TreeComponent) {

    }
    isLeaf(item: TreeDataObject) {
        return !item.children;
    }
    defaultImgGetter(item: TreeDataObject, index: number) {
        if(item.img && isString(item.img)) {
            return item.img;
        }
        return this.isLeaf(item) ? require('../../assets/file2.png') : (item.open? require('../../assets/directory2-open.png'): require('../../assets/directory2.png'));
    }
    toggleMenu(item: TreeDataObject) {
        if(!this.isLeaf(item)) {
            item.open = !item.open;
            if(this.vue.imgChangeAnimate) {
                item.img = item.open? require('../../assets/directory2-open.png'): require('../../assets/directory2.png');
            }
            this.vue.$emit('child-count', {
                count: item.slide_count * (item.open ? 1 : -1)
            })
        }
    }
    toggleActiveItem(item: TreeDataObject, level: number) {
        if(level === 1 && this.vue.shouldActive) {
            if(this.vue.model.activeMenu !== item || !(this.vue.model.activeMenu.active)) {
                if(this.vue.model.activeMenu) {
                    this.vue.model.activeMenu.active = false;
                }
                item.active = true;
                this.vue.model.activeMenu = item;
            }
        }
    }
    initData() {
         this.vue.data.forEach((item) => {
            if(isNill(item.key)) {
                [
                    {
                        name: 'key',
                        value: function() {
                            return ++key + '';
                        }
                    }, {
                        name: 'open',
                        value: false
                    }, {
                        name: 'active',
                        value: false
                    }, {
                        name: 'selected',
                        value: false
                    }, {
                        name: 'parent',
                        value: this.vue.parent
                    }, 
                    {
                        name: 'slide_count',
                        value: 0
                    }, 
                    {
                        name: 'loading',
                        value: false
                    }, {
                        name: 'dragable',
                        value: isNill(this.vue.dragable) ? false : this.vue.dragable
                    }, {
                        name: 'showcomponents',
                        value: true
                    }, {
                        name: 'components',
                        value: []
                    }
                ].forEach((prop: {
                    name: string,
                    value: any
                }) => {
                    if(isNill(item[prop.name])) {
                        Vue.set(item, prop.name, isFunction(prop.value) ? prop.value() : prop.value)
                    }
                })
            }
        })
    }
    static getIdStr(item: TreeDataObject) {

    }
}