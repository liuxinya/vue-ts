import { InputComponent } from './../components/input/input';
import { StepComponent } from './../components/steps/index';
import { CheckboxGroupComponent } from './../components/checkbox/group';
import { CheckboxComponent } from './../components/checkbox/index';
import { RatioGroupComponent } from './../components/ratio/group';
import { LoadingComponent } from './../components/loading/index';
import { ModalComponent } from './../components/modal/index';
import { ButtonComponent } from '../components/button';
import { RatioComponent } from '../components/ratio/index';
import { TreeComponent } from '../components/tree';
import { TabBarComponent } from '../components/tab-bar';
import { CodeComponent } from '../components/code';
import { PagigationComponent } from '../components/pagigation';
import { BroadCrumbsComponent } from '../components/broadcrumbs';
import { SelectComponent } from '../components/select';
import { BasicComponentComponent } from '../components/component';
import { BasicAddComponent } from '../components/add';
import { UConfirmContentModalComponent } from '../components/modal/confirm-content-modal';
import { UTableComponent } from '../components/table';
import { DatePickComponent } from '../components/date-pick';
import { UBasicSearchComponent } from '../modules/components/search/index';
import { DatePickerComponent } from '../components/date-picker';
import { SwitchComponent } from '../components/switch/index';

const component_lists = {
    uButton: ButtonComponent,
    uModal: ModalComponent,
    uConfirmContentModal: UConfirmContentModalComponent,
    uLoading: LoadingComponent,
    uRatio: RatioComponent,
    uRatioGroup: RatioGroupComponent,
    uCheckbox: CheckboxComponent,
    uCheckboxGroup: CheckboxGroupComponent,
    uTree: TreeComponent,
    uTabBar: TabBarComponent,
    uCode: CodeComponent,
    uPage: PagigationComponent,
    uStep: StepComponent,
    uBroadcrumbs: BroadCrumbsComponent,
    uSelect: SelectComponent,
    uInput: InputComponent,
    uComponent: BasicComponentComponent,
    uAdd: BasicAddComponent,
    uTable: UTableComponent,
    uDatepicker: DatePickerComponent,
    uDatepick: DatePickComponent,
    uSearch: UBasicSearchComponent,
    uSwitch: SwitchComponent
}
export {
    component_lists
}