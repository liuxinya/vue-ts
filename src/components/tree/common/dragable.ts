import { UDragableServiceInterface } from './../../../services/dragable';
import { TreeSelectable } from './selectable';
import { UEventEmitter } from './../../../helpers/event';
import { TreeDataObject } from '..';
import { DomHelper } from '../../../helpers/Dom/index';
import { removeFromArrayByValue } from '../../../helpers/Array/remove';
import { setInterval } from 'timers';
import Vue from 'vue';
import { TreeAction } from '../action';
import { TreeModel } from '../model';
import { isNill } from '../../../helpers/Type/basic';
// 其实，无论什么时候,最多只有一个或多个元素同时被拖动
let dragedItem: TreeDragable<any> = null;
export interface TreeDragEmitObject<T> {
    draggable: TreeDragable<T>;
    event: DragEvent
}
export class TreeDragable<T> extends UEventEmitter{
    constructor(
        public item: TreeDataObject,
        public dom: DomHelper,
        public index: number,
        public action: TreeAction,
        public model: TreeModel,
        public draggableservice: UDragableServiceInterface<T>,
        public allowDrop: boolean = true
    ) {
        super();
        this.init();
    }
    originStyle: any = {};
    enterStyle: any = {
        transition: 'none',
        border: '1px dashed #009688'
    }
    startStyle: any = {
        transition: 'none',
        border: '1px dashed #888888',
        opacity: .5
    }
    choosenStyle: any = {
        'background-color': '#4A90E2'  
    };
    init() {
        let dragEnterTimes = 0;
        this.initOriginStyle();
        let startHandler = this.dom.listen('dragstart', (e: DragEvent) => {
            e.dataTransfer.effectAllowed = "move";
            // 先判断是不是选中的，如果不是，那么首先得置空
            // console.log(this.item, this.model.selectedItemLists);
            if(this.model.selectedItemLists.indexOf(this.item) < 0) {
                TreeSelectable.clear(this.model);
                this.setStyle(this.startStyle);
            } else {
                this.model.selectedItemLists.forEach((item: TreeDataObject) => {
                    this.setStyle(this.startStyle, item.dom);
                })
            }
            if(isNill(dragedItem)) {
                dragedItem = this;
            }
            e.stopPropagation();
            this.action.vue.$emit('dragstart', {
                draggable: this,
                event: e
            });
        });
        let endHandler = this.dom.listen('dragend', (e: DragEvent) => {
            if(this.model.selectedItemLists.length > 0) {
                TreeSelectable.clear(this.model, (item: TreeDataObject) => {
                    this.setStyle(this.originStyle, item.dom);
                });
            } else {
                this.setStyle(this.originStyle);
            }
            dragEnterTimes = 0;
            dragedItem = null;
            this.action.vue.$emit('dragend', {
                draggable: this,
                event: e
            });
            // removeFromArrayByValue(dragedLists, this);
        });
        let dragenterHandler = this.dom.listen('dragenter', (e: DragEvent) => {
            if(dragedItem !== this) {
                dragEnterTimes++;
                if(this.allowDrop) {
                    this.setStyle(this.enterStyle);
                }
            }
            this.allowDrop && this.action.vue.$emit('dragenter', {
                draggable: this,
                event: e
            })
        })
        let dragLeaveHandler = this.dom.listen('dragleave', (e: DragEvent) => {
            if(dragedItem !== this) {
                dragEnterTimes--;
                if(dragEnterTimes <= 0 && !TreeSelectable.hasSelected(this.model, this.item)) {
                    this.setStyle(this.originStyle);
                }
            }
            this.action.vue.$emit('dragleave', {
                draggable: this,
                event: e
            })
        })
        let dragoverHandler = this.dom.listen('dragover', (e: DragEvent) => {
            e.preventDefault();
        });
        let dropHandler = this.dom.listen('drop', (e: DragEvent) => {
            this.setStyle(this.originStyle);
            dragEnterTimes = 0;
            this.action.vue.$emit('drop', {
                draggable: this,
                event: e
            });
        });
    }
    initOriginStyle() {
        this.originStyle = {
            border: this.dom.getStyle('border'),
            opacity: this.dom.getStyle('opacity'),
            transition: this.dom.getStyle('transition'),
        }
    }
    setStyle(style: any, dom: DomHelper = this.dom) {
        for(let i in style) {
            dom.setStyle(i, style[i]);
        }
    }
}