const express = require('express');
const router = express.Router();
const path = require('path');
/* GET home page. */

router.get('/datasource/list', function (req, res, next) {
    res.send({
        succ: true,
        data: require('../data/datasources.json').map((item) => {
            item.children = [];
            return item;
        })
    });
});
router.get('/database/remote/list', function (req, res, next) {
    let databases = require('../data/databases.json');
    res.send({
        succ: true,
        data: databases.filter((database) => {
            return database.datasource === req.query.datasourceId;
        }).map((item) => {
            item.children = [];
            return item;
        })
    });
});
router.get('/table/remote/list', function (req, res, next) {
    let tables = require('../data/tables.json');
    try {
        res.send({
            succ: true,
            data: tables.filter((table) => {
                return table.database === req.query.databaseId && table.datasource === req.query.datasourceId;
            }).map((table) => {
                table.children = [];
                return table;
            })
        });
    } catch (e) {
        next();
    }
});
router.get('/field/remote/list', function (req, res, next) {
    let reqD = req.query;
    res.send({
        succ: true,
        data: require('../data/fields.json').filter((field) => {
            return field.datasource === reqD.datasourceId && field.database === reqD.databaseId && field.table === reqD.tableId;
        })
    });
});
router.get('/datasource/page', function(req, res, next) {
    res.send({
        succ: true,
        data: {
            pageno: 1,
            pagesize: 10,
            total: 100,  
            data: require('../data/page.json')
        }
    })
})
router.get('/datasource/info', function(req, res, next) {
    let data = require('../data/page.json');
    let result = null;
    data.forEach((item) => {
        if(item.id == req.query.id) {
            result = item
        }
    })
    res.send({
        succ: true,
        data: result
    })
})
router.post('/datasource/create', function(req, res, next) {
    res.send({
        succ: true,
        data: {
            "url": "str",
            "userName": "str",
            "passWord": "*****",
            "dataSourceClass": "str",
            "dbType": "str",
            "sourceName": "str",
            "sourceDesc": "str",
            "driverClass": "str"
        }
    })
})
router.post('/datasource/delete/:id', function(req, res, next) {
    res.send({
        succ: true,
        msg: '操作成功',
        data: true
    })
})
router.get('/document/list', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                "createTime": 1529396000439,
                "updateTime": 1529396000439,
                "documentName": "root.txt",
                "fileType": "file",
            },
            {
                "createTime": 1529396000439,
                "updateTime": 1529396000439,
                "documentName": "tomcat.dir",
                "fileType": "dir",
            },
            {
                "createTime": 1529396000439,
                "updateTime": 1529396000439,
                "documentName": "apache.png",
                "fileType": "file",
            }
        ] 
    })
})
// 系统管理 紫资源文件管理
router.get('/sourcefile/list', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                "createTime": 1529396000439,
                "documentName": "root.txt",
                "fileType": "file",
            },
            {
                "createTime": 1529396000439,
                "documentName": "tomcat.dir",
                "fileType": "dir",
            },
            {
                "createTime": 1529396000439,
                "documentName": "apache.png",
                "fileType": "file",
            }
        ]
    })
})
router.get("/sourcefile/read", function(req, res, next) {
    res.send({
        succ: true,
        data: 'afagadsgagasdg'
    })
})
router.post("/sourcefile/write", function(req, res, next) {
    res.send({
        succ: true,
        data: true
    })
})
router.get("/sourcefile/rename", function(req, res, next) {
    res.send({
        succ: true,
        data: true
    })
})
router.get("/sourcefile/newfile", function(req, res, next) {
    res.send({
        succ: true,
        data: true
    })
})
router.get("/sourcefile/deletefile", function(req, res, next) {
    res.send({
        succ: true,
        data: true
    })
})
module.exports = router;