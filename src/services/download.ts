import { DomHelper } from './../helpers/Dom/index';
import { UNetService } from './net';
import { UDynamicService } from './dynamic';
import { Ioc, Injectable } from '../decorators/injectable';
import Vue from 'vue';
import { DownLoadComponent } from '../components/download/index';
import { parseParams, joinUrl } from '../helpers/Net';
import { UMessageService } from './message';
import Axios, { AxiosRequestConfig } from 'axios';
const $dynamic : UDynamicService = Ioc(UDynamicService);
let instance: object & Record<never, any> & Vue= null;
@Injectable
export class DownloadService {
    // download(url: string, params?: any) {
    //     let _url = url + (params ?  '?' + parseParams(params) : '');
    //     let option = {
    //         url
    //     }
    //     instance = $dynamic.open({component: DownLoadComponent, data: option});
    //     instance['ele'].click();
    //     instance.$destroy();
    // }
    async downloadPost(url: string, params: any = null, method: string = 'post') {
        try{
            let net: UNetService = Ioc(UNetService);
            // let config: AxiosRequestConfig = {}
            // config.params = params;
            Axios[method](net.getUrl(url), params.params).then((data) => {
                if(data.data.succ == false) {
                    let uM: UMessageService = Ioc(UMessageService);
                    uM.error(data.data.msg);
                }else {
                    let form = new DomHelper(document.createElement('form'));
                    document.body.appendChild(form.getDom());
                    form.getDom().setAttribute('target', '');
                    form.getDom().setAttribute('method', method);
                    form.getDom().setAttribute('action', net.getUrl(url));
                    for(let i in params) {
                        let input = new DomHelper(document.createElement('input'));
                        input.getDom().setAttribute('type', 'hidden');
                        input.getDom().setAttribute('name', i);
                        input.getDom().setAttribute('value', ((typeof params[i]) === 'object' ) ? JSON.stringify(params[i]) : params[i]);
                        form.getDom().appendChild(input.getDom());
                    }
                    let opt = document.createElement("input");
                    opt.type = "submit";  
                    form.getDom().appendChild(opt); 
                    (form.getDom() as HTMLFormElement).submit();
                    Vue.nextTick(() => {
                        form.getDom().remove();
                    })
                }
            })
            // let form = new DomHelper(document.createElement('form'));
            // document.body.appendChild(form.getDom());
            // form.getDom().setAttribute('target', '');
            // form.getDom().setAttribute('method', method);
            // form.getDom().setAttribute('action', net.getUrl(url));
            // for(let i in params) {
            //     let input = new DomHelper(document.createElement('input'));
            //     input.getDom().setAttribute('type', 'hidden');
            //     input.getDom().setAttribute('name', i);
            //     input.getDom().setAttribute('value', ((typeof params[i]) === 'object' ) ? JSON.stringify(params[i]) : params[i]);
            //     form.getDom().appendChild(input.getDom());
            // }
            // let opt = document.createElement("input");
            // opt.type = "submit";  
            // form.getDom().appendChild(opt); 
            // (form.getDom() as HTMLFormElement).submit();
            // Vue.nextTick(() => {
            //     form.getDom().remove();
            // })
        }catch(e) {
            console.log(e);
        }

    }
    async download(url: string, params?: any, tar: string = '_self') {
        try{
            let net: UNetService = Ioc(UNetService);
            let _url = net.getUrl(url) + (params ?  '?' + parseParams(params) : '');
            window.open(_url, tar).onerror = (e: MouseEvent) => {
                e.stopPropagation();
                e.preventDefault();
                this.onError(e);
            }
            // window.location.href = _url;
        }catch(e) {
            console.log(e);
            let uM: UMessageService = Ioc(UMessageService);
            uM.error(e);
        }
        // let net: UNetService = Ioc(UNetService);
        // let _url = net.getUrl(url);
        // _url + (params ?  '?' + parseParams(params) : '');
        // let uD: UDynamicService = Ioc(UDynamicService);
        // let instance = await uD.open({
        //     component: DownLoadComponent,
        //     data: {
        //         url: _url
        //     }
        // })
        // instance['ele'].click();
        // console.log(instance)
    }
    onError(e) {
        let uM: UMessageService = Ioc(UMessageService);
        uM.error('下载出错！');
    }
}