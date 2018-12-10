const datasources = require('./datasources.json');
const fs = require('fs');
let arr = [];
function initDatabases(datasource, count = 10) {
    for (let i = 0; i < count; i++) {
        arr.push(initDatabase(datasource.id, i));
    }
}
function initDatabase(datasourceId, index) {
    let title = Math.random().toString(36).substr(2);
    let id = title + index;
    return {
        title,
        id,
        datasource: datasourceId
    };
}
function init() {
    for (let i = 0; i < datasources.length; i++) {
        initDatabases(datasources[i]);
    }
    fs.writeFileSync('databases.json', JSON.stringify(arr, null, 4));
}
init();
