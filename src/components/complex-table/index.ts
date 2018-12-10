import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({})
export class ComplexTableComponent extends Vue {
    constructor() {
        super();
    }
    @Prop() data: string[][];
    @Prop() headers: string[];
    @Prop({
        default: false
    }) flag: boolean;
    created() {
        // console.log(this.data, this.headers);
        // console.log(this.tableData)
    }
    updated() {

    }
    get tableData() {
        return this.transformTableData(this.data, this.headers);
    }
    get tableDataF() {
        return this.transformTableDataF(this.data, this.headers);
    }
    transformTableDataF(data: string[][], headers: string[]) {
        let temArr = [...data];
        temArr.unshift(headers);
        return temArr;
    }
    transformTableData(data: string[][], headers: string[]) {
        let maxLen = this.getMaxLength(data, headers.length);
        let tableObjectData: TableCeilObject[][] = this.transformTableDataToObject(data, headers.length, maxLen);
        return this.addHeader(
            tableObjectData
            .map(
                // 每行需要进行个处理
                (row, index) => this.execRow(tableObjectData, row, index)
            )
            .map(
                // 每行还需要进行过滤 过滤到空值
                (row, index) => row.filter(ceil => !ceil.dead).map((ceil) => {
                    delete ceil.dead;
                    return ceil;
                })
            )
            ,
            headers,
            maxLen
        )
    }
    getMaxLength(data: string[][], length: number) {
        let len = 0;
        for(let i = 0; i < data.length; i++) {
            let row = data[i];
            len = row.length > len ? (row.length - length) : len;
        }
        return len;
    }
    transformTableDataToObject(data: string[][], length: number, maxlen: number): TableCeilObject[][] {
        return data.map((row, index) => {
            return this.generatePropertyDataObject(row, length, maxlen)
            .concat(
                this.generateValueDataObject(row, length)
            );
        });
    }
    generatePropertyDataObject(row: string[], length: number, max: number): TableCeilObject[] {
        return this.generateArr<TableCeilObject>(row.length - length, (index) => {
            return {
                col: 1,
                row: 1 + (row.length - length - 1 ? (max - row.length + length) / 2 : 0),
                value: row[index + 1],
                code: row[index],
                type: 'property',
                dead: false
            };
        }, 2);
    }
    generateValueDataObject(row: string[], length: number): TableCeilObject[] {
        return this.generateArr<TableCeilObject>(length, (index) => {
            return {
                value: row[row.length - length + index],
                col: 1,
                row: 1,
                type: 'value',
                dead: false
            };
        });
    }
    execRow(data: TableCeilObject[][], row: TableCeilObject[], index: number):  TableCeilObject[] {
        if(index !== 0) {
            for(let pos = 0; pos < row.length; pos++) {
                let ceil = row[pos];
                let parent = data[index - 1];
                let left = row[pos - 1];
                // debugger
                if(!left || left.dead === true) {
                    if(parent) {
                        if(parent[pos].code === ceil.code) {
                            if(parent[pos].dead) {
                                parent[pos].origin.row++;
                            } else {
                                parent[pos].row++;
                            }
                            ceil.dead = true;
                            ceil.origin = parent[pos].origin ? parent[pos].origin : parent[pos];
                        }
                    }
                }
            }
        }
        return row;
    }
    addHeader(data:  TableCeilObject[][], headers: string[], maxlen: number): TableCeilObject[][] {
        return [[
            {
                col: maxlen / 2,
                row: 1,
                value: ''
            }
        ].concat(this.generateArr(headers.length, (index) => {
            return {
                col: 1,
                row: 1,
                value: headers[index],
                type: 'property'
            }
        }))].concat(data as any);
    }
    generateArr<T>(num, getv: (index) => T, gap: number = 1) {
        let arr: T[] = []
        for(let i = 0; i < num; i = i + gap) {
            arr.push(getv(i));
        }
        return arr;
    }
}
export interface TableCeilObject {
    col?: number;
    row?: number;
    value?: string;
    code?: string;
    type?: string;
    dead?: boolean;
    origin?: TableCeilObject;
}