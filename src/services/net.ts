import { UMessageService } from './message';
import { UConstant } from './../config/constant/index';
import { StatusObject } from './net';
import { UInterceptor } from './../interceptors/_basic';
import { Injectable, Ioc } from '../decorators/injectable';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { parseParams, isAbsoluteUrl, joinUrl } from '../helpers/Net';
@Injectable
export class UNetService {
    constructor(

    ) {
        Axios.defaults.baseURL = '';
    }
    setUrl(url: string) {
        Axios.defaults.baseURL = url;
    }
    getUrl(url: string, options: any = {}) {
        let environmentUrl: UConstant = Ioc(UConstant);
        let urlPre = environmentUrl.NET.URL_TEST? environmentUrl.NET.URL_TEST : environmentUrl.NET.URL_PROD;
        // 判断URL是否是一个绝对的路径
        let str = parseParams(options);
        return isAbsoluteUrl(url) ? `${url}?${str}` : `${joinUrl(urlPre, url)}${str ? '?' + str : ''}`;
    }
    setInterceptors(interceptors: UInterceptor[]) {
        interceptors.forEach((interceptor: UInterceptor, index: number) => {
            Axios.interceptors.request.use(interceptor.request);
            Axios.interceptors.response.use(interceptor.response);
        });
    }
    async get<T>(url: string, data: T = null, config: AxiosRequestConfig = {}) {
        config.params = data;
        return await Axios.get(formatterUrl(url), config);
    }
    async getPro<K, T>(url: string, transform: (data: K) => T = (data: any) => {return data} , data: any = null, config: AxiosRequestConfig = {}):Promise<T> {
        config.params = data;
        console.log(Axios.defaults.baseURL)
        return new Promise(async (resolve, reject) => {
            try {
                await Axios.get(formatterUrl(url), config).then((data: AxiosResponse<StatusObject<K>>) => {
                    if(data.data.succ) {
                        resolve(transform(data.data.data));
                    } else {
                        reject(data.data.msg);
                        let msg: UMessageService = Ioc(UMessageService);
                        msg.error(data.data.msg)
                    }
                })
            } catch(e) {
                reject(e);
            }
        }).then((data: T) => {
            return data;
        })
    }
    async post<T>(url: string, data: T = null, config: AxiosRequestConfig = {}) {
        return await Axios.post(formatterUrl(url), data, config);
    }
    async postPro<K, T>(url: string, transform: (data: K) => T = (data: any) => {return data} , data: any = null, config: AxiosRequestConfig = {}):Promise<T> {
        config.params = data;
        console.log(Axios.defaults.baseURL)
        return new Promise(async (resolve, reject) => {
            try {
                await Axios.post(formatterUrl(url), config.params).then((data: AxiosResponse<StatusObject<K>>) => {
                    if(data.data.succ) {
                        resolve(transform(data.data.data));
                    } else {
                        reject(data.data.msg);
                        let msg: UMessageService = Ioc(UMessageService);
                        msg.error(data.data.msg)
                    }
                })
            } catch(e) {
                reject(e);
            }
        }).then((data: T) => {
            return data;
        })
    }
}
export interface StatusObject<T> {
    succ: boolean;
    code?: string;
    msg?: string;
    data?: T;
}
// 由于前期没有注意 真正的后台是不是根目录  现在加上此函数 来去除 /
// 用于去除url前面的 / 因为此项目不能为绝对路径请求前面都有一个platform
export function formatterUrl(url: string) {

    if(url && url[0] && url[0] == '/') {
        return url.slice(1, url.length)
    }else {
        return url;
    }
}