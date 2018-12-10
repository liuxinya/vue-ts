import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import { UEventEmitter } from '../../helpers/event';
@WithRender
@Component({
})
export class PagigationComponent extends Vue {
    constructor() {
        super();
    }
    @Prop({
        default: 8
    }) maxSize: number;
    @Prop({
        default: 0
    }) size: number;
    @Prop({
        default: 1
    }) value: number;
    @Prop({
        default: 'black'
    }) theme: string;
    page: number = 1;
    inited: boolean = false;
    pages: number[] = [];
    emitter: UEventEmitter = new UEventEmitter();
    @Watch('maxSize') maxSizeHandler() {
        if (this.inited) {
            // 已经初始化过 不需要等待pagesize    this.initPages();
            this.initPages();
        }
    }
    @Watch('size') sizeHandler(size: number) {
        if(this.inited) {
            this.initPages();
        }
    }
    @Watch('value') activePageHandler(val) {
        this.page = val;
    }
    clickPage(page: any, index: number) {
        if (isNaN(page)) {
            if (index === 1) {
                this.page = this.page - Math.round(this.maxSize / 2);
            } else {
                this.page = this.page + Math.round(this.maxSize / 2);
            }
        } else {
            this.page = page;
        }
        this.emitter.emit('page-clicked', this.page);
        this.initPages();
    }
    nextPage() {
        if (this.page < this.size) {
            this.page = this.page + 1;
            this.emitter.emit('page-clicked', this.page);
            this.initPages();
        }
    }
    prePage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.emitter.emit('page-clicked', this.page);
            this.initPages();
        }
    }
    initPages() {
        let minpage = this.size < this.maxSize
            ? this.size
           : this.maxSize;
        let pages = [];
        let rigthmid = this.size - Math.round(this.maxSize / 2) + 1; // 小于这个值的话 右侧有
        let leftmid = Math.round(this.maxSize / 2); // 大于这个值左侧有
        for (let i = 0; i < minpage; i++) {
            // this.pages.push(i + 1);
            if (this.maxSize >= this.size) {
                pages.push(i + 1);
            } else {
                let pageno = i + 1;
                if (this.page >= rigthmid) {
                    if (pageno === 2) {
                        pages.push('...');
                    } else {
                        if (pageno === 1) {
                            pages.push(1);
                        } else {
                            pages.push(this.size - this.maxSize + pageno);
                        }
                    }
                } else if (this.page <= leftmid) {
                    if (pageno === minpage - 1) {
                        pages.push('...');
                    } else {
                        if (pageno === minpage) {
                            pages.push(this.size);
                        } else {
                            pages.push(pageno);
                        }
                    }
                } else {
                    if (pageno === minpage - 1) {
                        pages.push('...');
                    } else if (pageno === 2) {
                        pages.push('...');
                    } else if (pageno === minpage) {
                        pages.push(this.size);
                    } else if (pageno === 1) {
                        pages.push(1);
                    } else {
                        pages.push(this.page - leftmid + pageno);
                    }
                }
            }
        }
        this.pages = pages;
    }
    created() {
        this.emitter.on('page-clicked', (value: number) => {
            this.$emit('input', value);
            this.$emit('click',  value);
        })
        this.initPages();
        this.inited = true;
    }
    mounted() {
        
    }
    destroyed() {
        this.emitter.destroy();
    }
}