let measure = Symbol('measure');
let dim = Symbol('dim');
let filter = Symbol('filter');
let arr = [
    'measure',
    'dim',
    'filter'
];
let maps = {
    measure: 'measures',
    dim: 'dims',
    filter: 'selfDims'
};
let keys = {
    measure: measure,
    dim: dim,
    filter: filter
};
let keymaps = {
    [measure]: arr[0],
    [dim]: arr[1],
    [filter]: arr[2]
}
let names = {
    measure: '度量',
    dim: '维度',
    filter: '自定义集'
};
const CONST_BDQA_OPERATORS = {
    keys,
    names,
    keymaps,
    maps,
    arr
}
let download = Symbol('download');
let store = Symbol('store');
let run = Symbol('run');
let edit = Symbol('edit');
const CONST_BDQA_CONTROLLERS = {
    keys: {
        download: download,
        store: store,
        run: run,
        edit: edit
    },
    maps: {
        download: 'download',
        store: 'store',
        run: 'run',
        edit: 'edit'
    },
    src: {
        download: require('../../assets/download.png'),
        store: require('../../assets/store.png'),
        run: require('../../assets/run.png'),
        edit: require('../../assets/edit.png')
    }
}
export {
    CONST_BDQA_OPERATORS,
    CONST_BDQA_CONTROLLERS
}