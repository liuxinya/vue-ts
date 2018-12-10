const fs = require('fs');
function initCubes() {
    let cubeLen = 10;
    let cubes = [];
    for (let i = 0; i < cubeLen; i++) {
        let title = Math.random().toString(36).substr(2);
        let id = title + i;
        cubes.push({
            title,
            id
        });
    }
    fs.writeFileSync('./datasources.json', JSON.stringify(cubes, null, 4));
}
initCubes();