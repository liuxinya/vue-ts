const path = require('path');
const fs = require('fs');
let modepath = 'codemirror/mode';
let modeulepath = path.join(__dirname, '../../../node_modules');
let modefullpath = path.join(modeulepath, modepath);
let modefullfilepath = path.join(modefullpath, 'meta.js');
try {
    let content = fs.readFileSync(modefullfilepath).toString();
    let reg = /CodeMirror\.modeInfo\s*\=\s*(\[\s*(\s*\{[\s\S]*\}\s*)*\s*\])/;
    let res = content.match(reg);
    let name;
    eval(`name=${res[1]}`);
    fs.writeFileSync(path.join(__dirname, './mode-lists.json'), JSON.stringify(name, null, 4));
    let str = '';
    fs.readdirSync(modefullpath).forEach((filepath) => {
        try {
            let fullpath = path.join(modefullpath, filepath);
            let state = fs.statSync(fullpath);
            if (state.isDirectory()) {
                fs.readdirSync(fullpath).forEach((filename) => {
                    let fullfilepath = path.join(fullpath, filename);
                    if (fs.statSync(fullfilepath).isFile()) {
                        str += `require('${path.join(path.join(modepath, filepath), filename)}');\n`;
                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
    });
    fs.writeFileSync('mode-require.js', str);
} catch (e) {
    console.log(e);
}