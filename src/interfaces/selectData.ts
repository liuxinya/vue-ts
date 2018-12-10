export interface SelectDataObject {
    title: string;
    key?: string | number;
    active?: boolean;
    noSelect?: boolean
    [prop:string]: any;
}