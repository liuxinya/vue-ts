import { Injectable, Ioc } from '../decorators/injectable';
import { UDynamicService } from './dynamic';
import { UAlertComponent } from '../components/modal/alert/index';
import Vue from 'vue';
import { CONST_MODAL } from '../config/constant/modal';
import { UConfirmComponent } from '../components/modal/confirm/index';
import { UPromptComponent, UPromptEventDataObject } from '../components/modal/prompt/index';
let dynamic: UDynamicService = Ioc(UDynamicService);
@Injectable
export class UModalService {
    alert(option: {
        title?: string,
        content?: string,
        bg?: string,
        opacity?: number;
        theme?: string;
    }) {
        let instance: object & Record<never, any> & Vue;
        option = Object.assign({
            title: '警告',
            ...CONST_MODAL
        }, option);
        instance = dynamic.open({
            component: UAlertComponent,
            data: {
                headerBackgroundColor: '#3F51B5',
                ...option
            }
        });
        return instance;
    }
    confirm(option: {
        title?: string,
        content?: string,
        bg?: string,
        opacity?: number;
        theme?: string;
    }) {
        let instance: object & Record<never, any> & Vue;
        option = Object.assign({
            title: '警告',
            ...CONST_MODAL
        }, option);
        instance = dynamic.open({
            component: UConfirmComponent,
            data: {
                headerBackgroundColor: '#3F51B5',
                ...option
            }
        });
        return instance;
    }
    async prompt(option: {
        title?: string,
        content?: string,
        placeholder?: string;
        bg?: string,
        opacity?: number;
        theme?: string;
    }) {
        let instance: object & Record<never, any> & Vue;
        option = Object.assign({
            title: '警告',
            ...CONST_MODAL
        }, option);
        instance = dynamic.open({
            component: UPromptComponent,
            data: {
                headerBackgroundColor: '#3F51B5',
                ...option
            }
        });
        return new Promise((resolve, reject) => {
            instance.$once('confirm', (e: UPromptEventDataObject) => {
                e.close();
                resolve(e.value);
            })
            instance.$once('cancel', (e: UPromptEventDataObject) => {
                e.close();
                resolve(null);
            })
        }).then((v: string) => {
            return v;
        })
    }
}