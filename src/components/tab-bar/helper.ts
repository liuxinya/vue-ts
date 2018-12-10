import {TabBarDataObject} from './index';
import {removeFromArrayByIndex} from '../../helpers/Array/remove';
export class TabbarHelper {
    static closeTab < T > (tabs : TabBarDataObject < T > [], index : number) {
        let tab = tabs[index];
        tab.active = false;
        if (tab) {
            removeFromArrayByIndex(tabs, index);
            if (tabs.length > index) {
                return index;
            } else if (index > 0) {
                return index - 1;
            } else {
                return null;
            }
        }
    }
}