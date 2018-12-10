const tables = require('./tables.json');
let _tables = [];
function initFields(table, index) {
    let title = Math.random().toString(36).substr(2);
    let id = title + index;
    return {
        title,
        id,
        table: table.id,
        database: table.database,
        datasource: table.datasource
    };
}
for (let i = 0; i < tables.length; i++) {
    let table = tables[i];
    let num = 5;
    for (let j = 0; j < num; j++) {
        _tables.push(initFields(table, i));
    }
}
const fs = require('fs');
fs.writeFileSync('./fields.json', JSON.stringify(_tables, null, 4));