const fs = require('fs');
const path = require('path');
try {
    let targetpath = path.join(__dirname, '../../../node_modules/codemirror/theme');
    let obj = {};
    let css = '';
    fs.readdirSync(targetpath).forEach((file) => {
        let name = path.basename(file, path.extname(file));
        obj[name] = path.join('codemirror/theme', file);
        css += `@import '~${obj[name]}';\n`;
    });
    fs.writeFileSync(path.join(__dirname, 'theme.json'), JSON.stringify(obj, null, 4));
    fs.writeFileSync(path.join(__dirname, 'theme.less'), css);
} catch (e) {
    console.log(e);
}