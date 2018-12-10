import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as WithRender from './index.html?style=./index.less';
@WithRender
@Component({
    components: {
    }
})
export class UUploadComponent extends Vue {
    files: FileList = [] as any;
    fileInput: HTMLInputElement = null;
    @Prop({
        default: true
    }) multi: boolean;
    input: HTMLInputElement = null;
    mounted() {
        this.fileInput = this.$refs.fileInput as any;
        // let iframeBody = this.fileInput['contentWindow'].document.body;
        // this.input = document.createElement('input');
        // this.input.type = 'file';
        // this.input.multiple = this.multi;
        // iframeBody.appendChild(this.input);
        // this.input.addEventListener('change', async (e) => {
        //     this.files = this.input.files;
        //     this.$emit('choose', {
        //         input: this.fileInput,
        //         files: this.files
        //     });
        // });
    }
    upload() {
        let iframeBody = this.fileInput['contentWindow'].document.body;
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = this.multi;
        iframeBody.appendChild(input);
        input.addEventListener('change', async (e) => {
            this.files = input.files;
            await this.$emit('choose', {
                input: input,
                files: this.files
            });
            // 销毁自己个
            this.$destroy();
            setTimeout(() => {
                this.fileInput.remove();
            })
        });
        input.click();
    }
}