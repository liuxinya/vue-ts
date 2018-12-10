import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
import * as codemirror from '../../../scripts/codemirror/lib/codemirror.js';
import { Injectable } from '../../decorators/injectable';
// 引入各种模块
require('../../../scripts/codemirror/mode/mode-require.js');
require('../../../scripts/codemirror/hint/show-hint.js');
require('../../../scripts/codemirror/hint/sql-hint.js');
require('../../../scripts/codemirror/mode/sql/sql.js');
let _themes = require('../../../scripts/codemirror/theme/theme.json');

@WithRender
@Component({})
@Injectable
export class CodeComponent extends Vue {
    constructor() {
        super();
        for(let i in _themes) {
            this.themes.push({
                name: i,
                key: i
            });
        }
    }
    @Prop() value : string;
    @Prop() options : codemirror.EditorConfiguration;
    @Prop() source: string[];
    codeInstance : codemirror.Editor;
    @Prop({
        default: 'material'
    }) theme: string;
    @Watch('theme') themeWatcher(value: string) {
        this.codeInstance.setOption('theme', value);
    }
    // @Watch('value') valueChange(v: string) {
    //     this.codeInstance.setValue(v);
    // }
    @Watch('source') sourceChange(value: string[]) {
        // 因为外界传进来的tables可能是ajax请求回来的一些东西 也就是异步的
        // codemirror在进行初始化的时候是没有把tables配置好的
        // 所以在这检测一下变化 变化的时候重新赋值一下
        this.tables = this.getHintTables(value);
        this.codeInstance.options.hintOptions.tables = this.tables;
    }
    themes: {
        name: string,
        key: string
    }[] = [];
    tables: any = null;
    mounted() {
        this.tables = this.getHintTables(this.source)
        this.codeInstance = codemirror.fromTextArea(
            this.$refs.text as any,
            {
                lineNumbers: true,
                autofocus: this.options? this.options.autofocus: true,
                theme: this.theme,
                mode: this.options? this.options.mode: "text/x-mysql",
                lineWrapping: this.options? this.options.lineWrapping: false,
                hintOptions: {
                    tables: this.tables  // 自定义提示框的内容
                },
                // styleActiveLine: true,
                // autoMatchParens: true,
                // textWrapping: true,
                // indentWithTabs: true,
                // smartIndent: true,
                // matchBrackets: true,
                extraKeys: {
                    'Tab': 'autocomplete'
                },
            }
        );
        codemirror.commands.autocomplete = function(cm) {
            cm.showHint();
        }
        if(this.value) this.codeInstance.setValue(this.value);
        this.codeInstance.on("change", e => {
            this.$emit("change", this.codeInstance.getValue());
            this.$emit('input', this.codeInstance.getValue());
            // change的时候 光标老是跑到最前  这里 让光标移动到最后
            // codemirror['commands'].goDocEnd(this.codeInstance);
        });
        this.$emit("inited", this.codeInstance);
    }
    select(e) {

    }
    getHintTables(data: string[]) {
        if(data && data.length > 0) {
            let source = {};
            data.forEach((item) => {
                source[item] = [];
            })
            return source;
        }else {
            return null;
        }
    }
}
