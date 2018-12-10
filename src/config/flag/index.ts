import { UFlagItem } from './_flag-item';
import { Injectable } from "../../decorators/injectable";
/**
 * 常量名的配置项 Flag 更多的是一种功能性的开关  true 、 false是两个不同的功能，就像一个按钮显示不显示
 */
@Injectable
export class UFlag {
    enableInterceptor: UFlagItem<any, any> = new UFlagItem(true);
}