import { UConstant } from './constant/index';
import { UEnv } from './env/index';
import { UNetConfig } from './net/index';
import { UFlag } from './flag/index';
import { Injectable, Ioc } from "../decorators/injectable";
import { isProd } from '../helpers/env';
// 环境变量相关的配置
@Injectable
export class UConfig {
    env: UEnv = Ioc(UEnv);
    net: UNetConfig = Ioc(UNetConfig);
    flag: UFlag = Ioc(UFlag);
    constant: UConstant = Ioc(UConstant);
}