export interface CoreSwiperOptionObject {
    itemClass? : string;
    direction? : string;
    threshold? : number;
    duration? : number;
    transitionEnd? : any;
    [prop : string] : any;
}

// utilities
const extend = (target, source) => {
    for (var key in source) {
        target[key] = source[key]
    }
    return target
}

function noop() {}
function execFn(fn) {
    setTimeout(fn || noop, 0)
}
export class Swiper {
    constructor(private container : Element, swiperOptions : CoreSwiperOptionObject) {
        this.options = extend({
            itemClass: '.swiper-item',
            direction: 'vertical',
            threshold: 0.1,
            duration: 250,
            transitionEnd: noop
        }, swiperOptions);
        this.init();
    }
    private options : CoreSwiperOptionObject;
    private prev : number = 0;
    current : number = 0;
    private offset : number = 0;
    private items : Element[];
    count : number;
    private width : number;
    private height : number;
    private start : any = {};
    private move : any = {};
    private end : any = {};
    private init() {
        this.prev = 0;
        this.current = 0;
        this.offset = 0;
        this.items = this
            .container
            .querySelectorAll(this.options.itemClass)as any;
        this.count = this.items.length;
        this.width = this
            .container
            .getBoundingClientRect()
            .width || (this.container as any).offsetWidth;
        this.height = this
            .container
            .getBoundingClientRect()
            .height || (this.container as any).offsetHeight;
        window.addEventListener('resize', this.resize);
        this.eventStart = this.eventStart.bind(this);
        this.eventMove = this.eventMove.bind(this);
        this.eventEnd = this.eventEnd.bind(this);
        this.eventTransitionEnd = this.eventTransitionEnd.bind(this);
        this.setup()
        this.bind()
    }
    private setup() {
        let w = this.width;
        let h = this.height * this.count;
        if (this.options.direction === 'horizontal') {
            w = this.width * this.count;
            h = this.height;
        }
        (this.container as any).style.width = w + 'px';
        (this.container as any).style.height = h + 'px';
        let pos = this.count
        while (pos--) {
            let item : any = this.items[pos]
            item.style.width = this.width + 'px'
            item.style.height = this.height + 'px'
        }
    }
    private activate(index : number) {
        this.offset = index * this.height;
        let transform = 'translate3d(0, -' + this.offset + 'px, 0)'

        if (this.options.direction == 'horizontal') {
            this.offset = index * this.width;
            transform = 'translate3d(-' + this.offset + 'px, 0, 0)';
        }

        let duration = this.options.duration + 'ms'

        let style = (this.container as any).style;
        style.webkitTransition = style.transition = duration
        style.webkitTransform = style.transform = transform
    }
    private eventStart(e : any) {
        let touch = e.changedTouches[0];
        this.start.x = touch.pageX;
        this.start.y = touch.pageY;
        this.start.time = +new Date();
        let style = (this.container as any).style;
        style.webkitTransition = style.transition = 'none'
    }
    private eventMove(e : any) {
        let touch = e.changedTouches[0];
        this.move.x = touch.pageX;
        this.move.y = touch.pageY;
        let dist = this.move.y - this.start.y;
        let transform = 'translate3d(0, ' + (dist - this.offset) + 'px, 0)';
        if (this.options.direction === 'horizontal') {
            dist = this.move.x - this.start.x;
            transform = 'translate3d(' + (dist - this.offset) + 'px, 0, 0)'
        }
        let style = (this.container as any).style;
        style.webkitTransform = style.transfrom = transform
        e.preventDefault();
    }
    private eventEnd(e : any) {
        let touch = e.changedTouches[0]
        this.end.x = touch.pageX
        this.end.y = touch.pageY

        let dist = this.end.y - this.start.y
        if (this.options.direction == 'horizontal') {
            dist = this.end.x - this.start.x
        }

        this.prev = this.current
        let gap = (this.options.direction == 'horizontal' ? this.width : this.height);
        if (dist > this.options.threshold * gap) {
            this.current = this.current == 0
                ? 0
                : --this.current;
            e.preventDefault()
        } else if (dist < -this.options.threshold * gap) {
            this.current = this.current < this.count - 1
                ? ++this.current
                : this.current;
            e.preventDefault()
        }
        this.activate(this.current);
    }
    private eventTransitionEnd(e : any) {
        this.options.transitionEnd && this
            .options
            .transitionEnd
            .call(e, this.prev, this.current)
        e.preventDefault()
    }
    resize() {
        execFn(this.setup);
    }
    private bind() {
        this
            .container
            .addEventListener('touchstart', this.eventStart)
        this
            .container
            .addEventListener('touchmove', this.eventMove)
        this
            .container
            .addEventListener('touchend', this.eventEnd)
        this
            .container
            .addEventListener('transitionEnd', noop)
        this
            .container
            .addEventListener('webkitTransitionEnd', this.eventTransitionEnd)
        this
            .container
            .addEventListener('resize', this.resize);
    }
    private unbind() {
        this
            .container
            .removeEventListener('touchstart', this.eventStart)
        this
            .container
            .removeEventListener('touchmove', this.eventMove)
        this
            .container
            .removeEventListener('touchend', this.eventEnd)
        this
            .container
            .removeEventListener('transitionEnd', noop)
        this
            .container
            .removeEventListener('webkitTransitionEnd', this.eventTransitionEnd);
        this
            .container
            .removeEventListener('resize', this.resize);
    }
    private noTransition() {
        let style = (this.container as any).style;
        style.webkitTransition = style.transition = 'none'
    }
    destroy() {
        this.unbind();
        window.removeEventListener('resize', this.resize);
    }
    $next() {
        this.noTransition()
        this.current = this.current < this.count - 1
            ? ++this.current
            : this.current
        this.activate(this.current);
    }
    $prev() {
        this.noTransition()
        this.current = this.current == 0
            ? 0
            : --this.current
        this.activate(this.current);
    }
    $go(index : number) {
        this.noTransition()
        this.current = index
        this.activate(this.current);
    }
}