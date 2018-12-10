import { UInterceptor } from './../../interceptors/_basic';
import { UConstant } from './../constant/index';
import { Injectable, Ioc } from "../../decorators/injectable";
import { isProd } from '../../helpers/env';
import { UNormalInterceptor } from '../../interceptors/normal';
const CONSTANT: UConstant = Ioc(UConstant);
@Injectable
export class UNetConfig {
    url: string = isProd() ? CONSTANT.NET.URL_PROD : CONSTANT.NET.URL_TEST;
    interceptors: UInterceptor[] = [
        Ioc(UNormalInterceptor)
    ];
}