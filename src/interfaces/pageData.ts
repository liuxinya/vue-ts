export interface PageDataObject<T> {
    pageno: number;
    pagesize: number;
    total: number;
    data: T;
}