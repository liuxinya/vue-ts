const express = require('express');
const router = express.Router();
const tool = require('../helpers/tool');
const path = require('path');
let subjectspath = path.join(__dirname, '../data/subjects.json');
/* GET home page. */
router.get('/list', function (req, res, next) {
    try {
        delete require.cache[subjectspath];
        let subjects = require(subjectspath).data;
        let {
            pageno,
            pagesize
        } = req.query;
        pageno = Number(pageno);
        pagesize = Number(pagesize);
        res.json(tool.wrapResult(true, {
            data: subjects.slice((pageno - 1) * pagesize, pagesize * pageno),
            pageno: pageno,
            pagesize: pagesize,
            total: subjects.length
        }));
    } catch (e) {
        console.log(e);
    }
});
router.get('/info', function(req, res, next) {
    res.send({
        succ: true,
        data: {
            id: '99',
            name: 'sdfsdfa',
            createTime: 1530515245000,
            cubeId: "yfpardkcive0",
            cubeName: "agadgad",
            desc: "主题描述",
            isAsync: 1,
            info: "{\"name\":\"sd\",\"desc\":\"sd\",\"cubeId\":\"yfpardkcive0\",\"cubeName\":\"yfpardkcive\",\"measuretable\":{\"tableId\":\"43kdm3j0vke1\",\"fields\":[{\"fieldId\":\"6s8zeao0bus6\",\"fieldName\":\"6s8zeao0bus\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"gr2al1tfhmu6\",\"fieldName\":\"gr2al1tfhmu\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"jdau0jecka6\",\"fieldName\":\"jdau0jecka\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"k5g43xyiejm6\",\"fieldName\":\"k5g43xyiejm\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"rfa4e7484x86\",\"fieldName\":\"rfa4e7484x8\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"}],\"databaseId\":\"4it5weyefk1\",\"datasourceId\":\"6kxz5e0178l0\"},\"dimtables\":[{\"tableId\":\"pn0tdhyyxsn1\",\"fields\":[{\"fieldId\":\"ba7csqq6yug5\",\"fieldName\":\"ba7csqq6yug\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"jrajpblvsm85\",\"fieldName\":\"jrajpblvsm8\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"caxeeyemeca5\",\"fieldName\":\"caxeeyemeca\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"yuh4b2xf5p5\",\"fieldName\":\"yuh4b2xf5p\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"0rah7s230kbk5\",\"fieldName\":\"0rah7s230kbk\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"}],\"databaseId\":\"4it5weyefk1\",\"datasourceId\":\"6kxz5e0178l0\"},{\"tableId\":\"jb4e3oqgq71\",\"fields\":[{\"fieldId\":\"2r3ue8l3scx7\",\"fieldName\":\"2r3ue8l3scx\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"mr5uyf0q5d7\",\"fieldName\":\"mr5uyf0q5d\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"tw4uyqrstu7\",\"fieldName\":\"tw4uyqrstu\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"in4clzywd17\",\"fieldName\":\"in4clzywd1\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"},{\"fieldId\":\"jfoddaorstf7\",\"fieldName\":\"jfoddaorstf\",\"isMeasure\":false,\"relatedDatasourceId\":\"\",\"relatedDatabaseId\":\"\",\"relatedTableId\":\"\",\"relatedFieldId\":\"\",\"relatedFieldName\":\"\",\"relatedType\":\"\"}],\"databaseId\":\"4it5weyefk1\",\"datasourceId\":\"6kxz5e0178l0\"}]}",
        }
    })
})
router.post('/delete/:id', (req, res, next) => {
    // console.log(req.param, req.params);
    delete require.cache[subjectspath];
    let {
        id,
        data
    } = require(subjectspath);
    data = data.filter((item) => {
        return +item.id !== +req.params.id;
    });
    const fs = require('fs');
    const path = require('path');
    fs.writeFileSync(path.join(__dirname, '../data/subjects.json'), JSON.stringify({
        id,
        data
    }, null, 4));
    res.send({
        succ: true,
        data: ''
    });
});
router.post('/create', function (req, res, next) {
    try {
        delete require.cache[subjectspath];
        let {
            id,
            data
        } = require(subjectspath);
        data.push({
            name: req.body.name,
            desc: req.body.desc,
            cubeId: req.body.cubeId,
            cubeName: req.body.cubeId,
            info: JSON.stringify(req.body),
            id: id++,
            createTime: new Date().getTime()
        });
        const fs = require('fs');
        const path = require('path');
        fs.writeFileSync(path.join(__dirname, '../data/subjects.json'), JSON.stringify({
            id,
            data
        }, null, 4));
        res.send({
            succ: true,
            data: ''
        });
    } catch(e) {
        console.log(e);
    }
});
router.post('/update/:id', function(req, res, next) {
    delete require.cache[subjectspath];
    let {
        id,
        data
    } = require(subjectspath);
    data = data.map((item) => {
        if(+item.id == +req.params.id) {
            return {
                    name: req.body.name,
                    desc: req.body.desc,
                    cubeId: req.body.cubeId,
                    cubeName: req.body.cubeId,
                    info: JSON.stringify(req.body),
                    id: item.id,
                    createTime: new Date().getTime()
                }
        }else {
            return item
        }
    });
    const fs = require('fs');
    const path = require('path');
    fs.writeFileSync(path.join(__dirname, '../data/subjects.json'), JSON.stringify({
        id,
        data
    }, null, 4));
    res.send({
        succ: true,
        data: ''
    })
})
router.get('/group/auth', function(req, res, next) {
    res.send({
        succ: true,
        data: {
            pageno: 1,
            pagesize: 8,
            total: 12,
            data: [
                {
                    "groupName": Math.random().toString(36).substr(2),
                    "groupId": Math.random().toString(36).substr(2),
                    "isSelected": 1,
                },
                {
                    "groupName": Math.random().toString(36).substr(2),
                    "groupId": Math.random().toString(36).substr(2),
                    "isSelected": 1,
                },
                {
                    "groupName": Math.random().toString(36).substr(2),
                    "groupId": Math.random().toString(36).substr(2),
                    "isSelected": 0,
                },
                {
                    "groupName": Math.random().toString(36).substr(2),
                    "groupId": Math.random().toString(36).substr(2),
                    "isSelected": 0,
                },
                {
                    "groupName": Math.random().toString(36).substr(2),
                    "groupId": Math.random().toString(36).substr(2),
                    "isSelected": 0,
                },
                {
                    "groupName": Math.random().toString(36).substr(2),
                    "groupId": Math.random().toString(36).substr(2),
                    "isSelected": 0,
                },
                {
                    "groupName": Math.random().toString(36).substr(2),
                    "groupId": Math.random().toString(36).substr(2),
                    "isSelected": 0,
                },
                {
                    "groupName": Math.random().toString(36).substr(2),
                    "groupId": Math.random().toString(36).substr(2),
                    "isSelected": 0,
                },
            ]
        }
    })
})
router.get('/group/auth/list', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                title: Math.random().toString(36).substr(8),
                id: '121231',
            },
            {
                title: Math.random().toString(36).substr(8),
                id: '4325423',
            }
        ]
    })
})
router.get('/subjectType/list', function(req, res, next) {
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
module.exports = router;