export function directive_emit(vnode, name, data)  {
    var handlers = (vnode.data && vnode.data.on) || (vnode.componentOptions && vnode.componentOptions.listeners);

    if (handlers && handlers[name]) {
        handlers[name].fns(data);
    }
}