const CONST_TYPE_SYM = {
    'default': Symbol('default'),
    'info': Symbol('info'),
    'success': Symbol('success'),
    'warning': Symbol('warning'),
    'error': Symbol('error'),
}
const CONST_TYPE_STR = {
    [CONST_TYPE_SYM.default]: 'default',
    [CONST_TYPE_SYM.info]: 'info',
    [CONST_TYPE_SYM.success]: 'success',
    [CONST_TYPE_SYM.warning]: 'warning',
    [CONST_TYPE_SYM.error]: 'error',
}
export {CONST_TYPE_SYM, CONST_TYPE_STR}