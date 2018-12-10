const path = require('path');
module.exports = function Require(name) {
    let absolutepath = path.join(__dirname, `../data/${name}.json`);
    delete require.cache[absolutepath];
    return require(absolutepath);
}