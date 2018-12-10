import { UNetService } from './../services/net';
import { UInterceptor } from './_basic';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Injectable, Ioc } from '../decorators/injectable';
@Injectable
export class UNormalInterceptor implements UInterceptor {
    async response(config: AxiosResponse) {
        if(config.status == 302) {
            let net: UNetService = Ioc(UNetService);
            window.location.href = net.getUrl('logout');
        }
        return config;
    }
    async request(config: AxiosRequestConfig) {
        return config;
    }
}