import { UConfig } from './../config/config';
import { UNetService } from './../services/net';
import { Ioc, Injectable } from '../decorators/injectable';
import { component_lists } from '../config/component';
import Vue from 'vue';
import { directive_lists } from '../config/directive';
import { filters_lists } from '../config/filters';
@Injectable
export class USetup {
    constructor(
        private net: UNetService,
        private config: UConfig
    ) {

    }
    async init() {
        await this.initNet();
        await this.initComponent();
        await this.initDirectives();
        await this.initFilters();
    }
    async initNet() {
        // 设置net的基准URL
        this.net.setUrl(this.config.net.url);
        // 设置NET的拦截器
        this.net.setInterceptors(this.config.net.interceptors);
    }
    async initComponent() {
        for(let i in component_lists) {
            Vue.component(i, component_lists[i]);
        }
    }
    async initDirectives() {
        for(let i in directive_lists) {
            Vue.directive(i, directive_lists[i]);
        }
    }
    async initFilters() {
        for(let i in filters_lists) {
            Vue.filter(i, filters_lists[i]);
        }
    }

}