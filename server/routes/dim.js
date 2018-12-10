const express = require('express');
const router = express.Router();
router.get('/cubes', function (req, res, next) {
    res.send({
        succ: true,
        data: require('../data/cubes.json')
    });
});
router.get('/relatedType', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
               codeDesc: 'left join', 
               code: 0,
               cdTp: ''
            },
            {
               codeDesc: 'inner join', 
               code: 1,
               cdTp: ''
            },
            {
               codeDesc: 'right join', 
               code: 2,
               cdTp: ''
            },
        ]
    })
})
router.get('/tasktype', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: "hive",
                codeDesc: '慢速',
                cdTp: ''
            },
            {
                code: "spark",
                codeDesc: '中速',
                cdTp: ''
            },
            {
                code: "cube",
                codeDesc: '快速',
                cdTp: ''
            },
        ]
    })
})
router.get('/EXECUTION_CONTAINER/list', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: '1522052708829',
                codeDesc: '192.168.2.141',
            },
            {
                code: '1522052705555',
                codeDesc: '192.168.2.123'
            },
        ]
    })
})
router.get('/QUEUE/list', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: '1522052708829',
                codeDesc: 'default'
            },
            {
                code: '1522052687153',
                codeDesc: 'default3'
            },
        ]
    })
})
router.get('/dbType', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: 'hive',
                codeDesc: 'hive' 
            },
            {
                code: 'db2',
                codeDesc: 'db2' 
            },
            {
                code: 'mysql',
                codeDesc: 'mysql' 
            },
        ]
    })
})
router.get('/defaultParamHive', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: 'hive',
                codeDesc: 'hvie1'
            },
            {
                code: 'hive',
                codeDesc: 'hive2'
            },
        ]
    })
})
router.get('/defaultParamSpark', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: 'spark',
                codeDesc: 'spark1'
            },
            {
                code: 'spark',
                codeDesc: 'spark2'
            },
            {
                code: 'spark',
                codeDesc: 'spark3'
            },
        ]
    })
})
router.get('/fieldType/list', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: 'int',
                codeDesc: 'int'
            },
            {
                code: 'bigInt',
                codeDesc: 'bigInt'
            },
            {
                code: 'string',
                codeDesc: 'string'
            },
        ]
    })
})
router.get('/hiveFieldSplit', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: ',',
                codeDesc: '逗号'
            },
            {
                code: '_',
                codeDesc: '下划线'
            }
        ]
    })
})
router.get('/hiveZipType', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: 'zip',
                codeDesc: 'zip'
            },
            {
                code: 'rar',
                codeDesc: 'rar'
            },
        ]
    })
})
router.get('/hiveFileType', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: 'txt',
                codeDesc: 'txt'
            },
            {
                code: 'png',
                codeDesc: 'png'
            },
        ]
    })
})
router.get('/userRoleId', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: '0',
                codeDesc: '炒鸡管理员'
            },
            {
                code: '1',
                codeDesc: '管理员'
            },
            {
                code: '1',
                codeDesc: '普通用户'
            },
        ]
    })
})
router.get('/subjectType', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                code: '2',
                codeDesc: '交易类型'
            },
            {
                code: '1',
                codeDesc: '跨行类型'
            },
        ]
    })
})
router.get('/SystemParm/ANALYSIS_DOWNLOAD_COUNT/query', function(req, res, next) {
    res.send({
        succ: true,
        data: '200'
    })
})
module.exports = router;