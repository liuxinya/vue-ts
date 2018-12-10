import { UOptionService } from './../../../services/option';
import { UMessageService } from './../../../services/message';
import { BreadContentComponent } from '.';
import { BroadCrumbContextmenuObject, BroadCrumbObject } from '../../../components/broadcrumbs';
import { Ioc } from '../../../decorators/injectable';
import { OptionClickObject } from '../../../components/option';
import Vue from 'vue';
import { ULoadingService } from '../../../services/loading';
import { CONST_MODAL } from '../../../config/constant/modal';
import { removeFromArrayByCondition, removeFromArrayByIndexes, removeFromArrayByConditionReverse } from '../../../helpers/Array/remove';

export class BreadContentHelper {
    private message: UMessageService = Ioc(UMessageService);
    private option: UOptionService = Ioc(UOptionService);
    private loading: ULoadingService = Ioc(ULoadingService);
    constructor(
        private vue: BreadContentComponent
    ) {

    }
    // 某项删除后，重设对应的值
    setValueByVue(_arr, _index, _value) {
        Vue.set(_arr, _index, _value);
    }
    resetActiveCrumb(index: number) {
        let len = this.vue.crumbs.length;
        return this.vue.activeCrumbIndex = len <= index ? len - 1 : index;
    }
    showLoading() {
        this.loading.open({
            ...CONST_MODAL,
            clickClose: false
        });
    }
    closeLoading() {
        this.loading.close();
    }
    addCrumb(title: string, component: string, data: any = null) {
        this.vue.crumbs.push({title, component, data});
        this.vue.activeCrumbIndex = this.vue.crumbs.length - 1;
    }
    closeOtherCrumb(index: number) {
        removeFromArrayByCondition(this.vue.crumbs, (item: BroadCrumbObject, _index: number) => {
            return  _index !== 0 && _index !== index;;
        }, this.setValueByVue);
        this.resetActiveCrumb(1);
    }
    closeCrumb(index: number) {
        // 先移除
        removeFromArrayByIndexes(this.vue.crumbs, [index], this.setValueByVue);
        // 在设置活跃Tab
        this.resetActiveCrumb(
            index < this.vue.activeCrumbIndex
            ?  this.vue.activeCrumbIndex - 1
            : this.vue.activeCrumbIndex
        );
    }
    closeLeftCrumb(index: number) {
        let count = 0;
        removeFromArrayByCondition(this.vue.crumbs, (item: BroadCrumbObject, _index: number) => {
            let shouldremove = _index !== 0 && _index < index;
            if(shouldremove) {
                count++;
            }
            return shouldremove;
        }, this.setValueByVue);
        this.resetActiveCrumb(
            index < this.vue.activeCrumbIndex
            ? this.vue.activeCrumbIndex - count
            : index - count
        );
    }
    closeRightCrumb(index: number) {
        removeFromArrayByConditionReverse(this.vue.crumbs, (item: BroadCrumbObject, _index: number) => {
            return _index > index;;
        }, this.setValueByVue);
        this.resetActiveCrumb(
            index < this.vue.activeCrumbIndex
            ? index
            : this.vue.activeCrumbIndex
        );
    }
    openCrumbOption(e: BroadCrumbContextmenuObject) {
        if(e.index === 0 && this.vue.crumbs.length === 1) {
            this.message.warning('没有可以操作的选项。');
            e.e.preventDefault();
            return;
        }
        this
        .option
        .open([
            {
                title: '关闭标签',
                hidden: e.index === 0,
                handler: () => {
                    this.closeCrumb(e.index);
                }
            }, {
                title: '关闭其他',
                hidden: e.index === 0 || this.vue.crumbs.length === 2,
                handler: () => {
                    this.closeOtherCrumb(e.index);
                }
            }, {
                title: '关闭左侧',
                hidden: e.index === 0 || e.index === 1,
                handler: () => {
                    this.closeLeftCrumb(e.index);
                }
            }, {
                title: '关闭右侧',
                hidden: e.index >= this.vue.crumbs.length - 1,
                handler: () => {
                    this.closeRightCrumb(e.index);
                }
            }
        ], e.e)
        .once('click', (e : OptionClickObject) => {
            if (e.item.handler) {
                e
                    .item
                    .handler();
            }
        })
        .once('closed', () => {})
    }
}