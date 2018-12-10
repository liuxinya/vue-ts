export class UFlagItem<K, M> {
    constructor(
        private enable: boolean = true,
        private desc: string = 'nothing',
        private activeData: K = null,
        private inactiveData: M = null
    ) {

    }
    // 是否开启
    isEnable() {
        return this.enable;
    }
    get data() {
        return this.enable ? this.activeData : this.inactiveData;
    }
    setData(data: any) {
        if(this.enable) {
            this.activeData = data;
        } else {
            this.inactiveData = data;
        }
    }
}