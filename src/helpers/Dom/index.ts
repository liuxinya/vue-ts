export class DomHelper {
    constructor(private ele: Element) {

    }
    getAllProperty() {
        return  window.getComputedStyle(this.ele);
    }
    // 获取CSS属性
    getCssProperty(attr: string) {
        let css =  window.getComputedStyle(this.ele);
        return attr ? css[attr] : css;
    }
    getAttribute(attr: string) {
        return this.ele.getAttribute(attr);
    }
    // 设置Style
    setStyle(propName: string, value: any = '') {
        (this.ele as any).style[propName] = value;
    }
    getStyle(prop: string = '') {
        return prop ? (this.ele as any).style[prop] : (this.ele as any).style;
    }
    // 移除Style
    removeStyle(propname: string) {
        this.setStyle(propname);
    }
    setBackgroundColor(color: string) {
        this.setStyle('background-color', color);
    }
    setColor(color: string) {
        this.setStyle('color', color);
    }
    // 监听事件
    listen(event: string, handler: any) {
        this.ele.addEventListener(event, handler);
        return handler;
    }
    unlisten(event: string, handler: any) {
        this.ele.removeEventListener(event, handler); 
    }
    remove() {
        if(this.ele.remove) {
            this.ele.remove();
        } else {
            if (this.ele.parentNode) {
                this.ele.parentNode.removeChild(this.ele);
            }
        }
    }
    getDom() {
        return this.ele;
    }
}