const fs = require('fs');

function initCubes() {
    let cubes;
    try {
        cubes = require('./cubes.json');
    } catch (e) {
        let cubeLen = 10;
        cubes = [];
        for (let i = 0; i < cubeLen; i++) {
            let codeDesc = Math.random().toString(36).substr(2);
            let code = codeDesc + i;
            cubes.push({
                code,
                codeDesc,
            });
        }
    }
    cubes.map((cube) => {
        if(!cube.medaData) {
            cube.medaData = {};
            ['measures', 'dims', 'selfDims'].forEach((key) => {
                cube.metaData[key] = generateTree();
            })
        }
        return cube;
    })
    fs.writeFileSync('./cubes.json', JSON.stringify(cubes, null, 4));
}
function generateTree(count = 4, level = 1) {
    let arr = [];
    function generateItem(i) {
        let name = Math.random().toString(36).substr(2);
        return {
            name: name,
            code: name + i,
            isDrag: true,
            isEdit: true,
            isUnique: true
        }
    }
    for(let i = 0; i < count; i++) {
        let isMenu = level > 5 ? false : !!Math.round(Math.random());
        let item = generateItem(i);
        if(isMenu) {
            item.children = generateTree(count, level + 1);
        }
        arr.push(item);
    }
    return arr;
}
initCubes();