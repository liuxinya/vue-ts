const databases = require('./databases.json');
let tables = [];
function initTable(database, index) {
    let title = Math.random().toString(36).substr(2);
    let id = title + index;
    return {
        title,
        id,
        database: database.id,
        datasource: database.datasource
    };
}
for (let i = 0; i < databases.length; i++) {
    let database = databases[i];
    let num = 5;
    for (let j = 0; j < num; j++) {
        tables.push(initTable(database, i));
    }
}
const fs = require('fs');
fs.writeFileSync('./tables.json', JSON.stringify(tables, null, 4));