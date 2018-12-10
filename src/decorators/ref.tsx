export function Ref(_prop: string = '') {
    return function(target: any, prop: string) {
        // 获取注入类型
        if(target) {
            let mounted = target.mounted || function() {};
            target.mounted = function() {
                // 放在最前面，以防要用
                this[prop] = this.$refs && this.$refs[_prop || prop];
                mounted.bind(this)();
            };
        }
    }
}