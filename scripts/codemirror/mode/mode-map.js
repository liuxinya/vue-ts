function initExtMap() {
    let obj = {};
    let list = require('./mode-lists.json');
    list.forEach((item) => {
        let exts = item.ext;
        if (exts) {
            exts.forEach((extname) => {
                obj[extname] = item;
            });
        }
    });
    try {
        const fs = require('fs');
        fs.writeFileSync('mode-ext-map.json', JSON.stringify(obj, null, 4));
        console.log(require('./mode-ext-map.json'));
    } catch (e) {
        console.log(e);
    }
}
initExtMap();