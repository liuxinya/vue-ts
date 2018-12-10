import { Injectable } from '../../decorators/injectable';
import { CONST_COLOR } from './color';

@Injectable
export class UConstant {
    NET = {
        // URL_TEST: '',
        URL_TEST: 'http://localhost:3000',
        // URL_TEST: 'http://172.20.182.131:8080/upbdbi', // lei
        // URL_TEST: 'http://172.21.36.12:11000/platform',
        // URL_TEST: 'http://172.21.36.13:8080/upbdbi',
        // URL_TEST: 'http://172.21.36.13:8080/platform',
        // URL_TEST: 'http://172.20.183.225:8080/platform',   // zhi
        // URL_TEST: 'http://172.20.183.205:80',   // zuo
        URL_PROD: ''
    }
    COLOR = CONST_COLOR
}