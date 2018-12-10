const fs = require('fs');

function createPages() {
    let pages = [];
    let types = ['db2', 'hive', 'mysql'];
    for(let i = 0; i < 10; i++ ) {
        let title = Math.random().toString(36).substr(2);
        pages.push({
            sourceName: title, // 数据源名称
            sourceDesc: Math.random().toString(36).substr(4), // 描述
            url: '172.123.31.1', // 数据库连接url
            userName: Math.random().toString(36).substr(8), // 用户名
            dbType: types[Math.floor(Math.random() * 3)], // 类型
            id: title + i,// id
            passWord: '***',
            dataSourceClass:  Math.random().toString(36).substr(5), //数据库连接池类
            driverClass: Math.random().toString(36).substr(5), //数据库驱动类
        })
    }
    fs.writeFileSync('./page.json', JSON.stringify(pages, null, 4));
}
createPages();