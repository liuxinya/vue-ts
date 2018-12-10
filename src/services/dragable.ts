import { UBehaviorSubject } from './../helpers/Reactive/behavior';
import { Injectable } from "../decorators/injectable";
import { TreeDataObject } from '../components/tree';

@Injectable
export class UdragableService implements UDragableServiceInterface<UOperatorDragObject>{
    draggedData: UBehaviorSubject<UOperatorDragObject> = new UBehaviorSubject(null);
}
export enum UOperatorType {
    subject,
    controller
}
export interface UOperatorDragObject {
    operator: any;
    type: UOperatorType;
    data: TreeDataObject[]
}
export interface UDragableServiceInterface<T> {
    draggedData: UBehaviorSubject<T>;
}