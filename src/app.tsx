import 'babel-polyfill';
import Vue from "vue";
import { MainComponent } from './modules/index';
import { UNetService } from './services/net';
import { Ioc } from './decorators/injectable';
import { USetup } from './setup';'@types/codemirror'
// 阻止页面滚动
document.addEventListener('touchmove', (e: MouseEvent) => {
    e.preventDefault();
});
const setup: USetup = Ioc(USetup);
setup.init().then(() => {
    const init = new Vue({
        el: '#app',
        render: h => h(MainComponent)
    });
    let net: UNetService = Ioc(UNetService);
})