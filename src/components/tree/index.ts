import { UdragableService, UDragableServiceInterface } from './../../services/dragable';
import {UEventEmitter} from './../../helpers/event';
import {TreeHelper} from './helper';
import {TreeModel} from './model';
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { TreeAction, TreeClickObject } from './action';
import { DomHelper } from '../../helpers/Dom/index';
import { TreeDragable } from './common/dragable';
import { TreeSelectable } from './common/selectable';
import { Ioc } from '../../decorators/injectable';
import { isNill, isFunction } from '../../helpers/Type/basic';

@WithRender
@Component({
    components: {},
    name: 'tree',
    directives: {
        'slide-count': {
            inserted(el, binding, vnode) {
                // 新增了，我需要做什么
                let item: TreeDataObject = binding.value;
                if(item.parent) {
                    // 这个是标识父亲节点的数量
                    // Vue.set(item.parent, 'slide_count', ++item.parent.slide_count);
                    // 如果是父节点是开着的，说明我得告诉外面要加一个，不过我已经加到父节点的slide_count上面了
                    if(item.parent.open) {
                        vnode.context.$emit('child-count',{
                            count: 1
                        })
                    } else {
                        Vue.set(item.parent, 'slide_count', ++item.parent.slide_count);
                    }
                }
            },
            unbind(el, binding, vnode) {
                // 解绑了  我需要去做什么
                let item: TreeDataObject = binding.value;
                if(item.parent) {
                    if(item.parent.open) {
                        vnode.context.$emit('child-count',{
                            count: -1
                        })
                    } else {
                        Vue.set(item.parent, 'slide_count', --item.parent.slide_count);
                    }
                }
            }
        },
        inited: {
            bind(el, binding, node) {
                let item = binding.value;
                if(isNill(item.dom)) {
                    Vue.set(item, 'dom', new DomHelper(el));
                }
            },
            inserted(el, binding) {
                let item = binding.value;
                if (item && item.active) {
                    el.click();
                }
            }
        },
        dragable: {
            bind(el, binding) {
                let data: {
                    item: TreeDataObject,
                    index: number,
                    action: TreeAction,
                    model: TreeModel,
                    allowDrop: boolean,
                    draggedservice: UDragableServiceInterface<TreeDataObject[]>
                } = binding.value;
                if(data.item.dragable) {
                    data.item._drag = new TreeDragable(
                        data.item,
                        new DomHelper(el),
                        data.index,
                        data.action,
                        data.model,
                        data.draggedservice,
                        data.allowDrop
                    );
                }
            }
        },
    }
})
export class TreeComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    constructor() {
        super();
    }
    model : TreeModel = null;
    action : TreeAction = null;
    tree_selector: TreeSelectable = null;
    helper : TreeHelper = null;
    emitter : UEventEmitter = new UEventEmitter();;
    @Prop({default: 1})level : number;
    @Prop()data : TreeDataObject[];
    @Prop()parent : TreeDataObject;
    @Prop()getImg : (item : TreeDataObject, index?: number) => string;
    @Prop({default: false})async : boolean; // 是否异步打开
    @Prop({default: true})showRightArrow : boolean;
    @Prop({default: false})showMenuArrow : boolean;
    @Prop({default: false}) hiddenOnEmptyChildren: boolean;
    @Prop()root : any;
    @Prop({default: ''})id : string;
    @Prop({
        default: true
    }) shouldActive: boolean;
    @Prop({
        default: false
    }) dragable: boolean;
    @Prop({
        default: false
    }) selectable: boolean;
    @Prop({
        default: function() {
            return Ioc(UdragableService);
        }
    }) draggedservice: UDragableServiceInterface<TreeDataObject[]>;
    @Prop({
        default: true
    }) allowDrop: boolean;
    @Prop() mymodel: TreeModel;
    @Prop({default: false}) imgChangeAnimate: boolean;
    @Prop({default: false}) isTip: boolean;
    get _root() {
        return this.root || this;
    }
    created() {
        this.model = new TreeModel(this);
        if(this.mymodel) {
            // 这里是为了修复遗留BUG，托拉拽的数据的不一致的bug
            Object.defineProperty(this.model, 'selectedItemLists', {
                get: () => {
                    return this.mymodel.selectedItemLists;
                }
            });
        }
        this.action = new TreeAction(this);
        this.helper = new TreeHelper(this);
        this.helper.initData();
        // 可能存在移除树节点的情况，比如新增一个节点，这个时候由于Tree 已经初始化，所以不会去重复的update
        if(this.level === 1 && this.selectable) {
            this.tree_selector = new TreeSelectable(this.action, this.model);
            window.addEventListener('keyup', () => {
                this.model.shiftBegin = null;
            })
            this.$on('click', (data: TreeClickObject) => {
                if(!data.event.shiftKey) {
                    this.model.shiftBegin = null;
                } else {
                    if(!this.model.shiftBegin) {
                        this.model.shiftBegin = {
                            item: data.item,
                            index: data.index
                        };
                        // 同时需要清空
                        TreeSelectable.clear(this.model);
                    }
                }
                this.tree_selector.chooseItem(data);
            })
        }
    }
    @Watch('data') dataChangeHandler(v) {
        this.helper.initData();
        // 除了初始化数据还需要注意的是增删改查

    }
    mounted() {
        this.$emit('inited', this);
    }
}
export interface TreeDataObject {
    title : string;
    id?: string;
    open?: boolean;
    active?: boolean;
    selected?: boolean;// 是否被选中
    slide_count?: number;
    loading?: boolean;
    childrenLoaded?: boolean;
    img?: string;
    dom?: DomHelper;
    dragable?: boolean;
    _drag?: TreeDragable<any>;
    parent?: TreeDataObject;
    children?: TreeDataObject[];
    data?: any;
    key?: string;
    // 这个tab 关联的component  在导航等时候会用到
    component?: string;
    allowDrop?: boolean; // 是否允许drop
    showcomponents?: boolean; // 是否展示自定义的组件
    components?: TreeComponentObject[]; // 右侧的组件
    [prop: string]: any;
}
export interface TreeComponentObject{
    component: any;
    data?: any;
    inited?: (instance: object & Record<never, any> & Vue) => void
}