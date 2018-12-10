const express = require('express');
const router = express.Router();
const tool = require('../helpers/tool');
const Require = require('../helpers/require');
const path = require('path');
const fs = require('fs');
/* GET home page. */
router.get('/:cubeId/metadata', function(req, res, next) {
    try {
        let {
            cubeId
        } = req.params;
        Require('cubes');
        let subject = Require('subjects').data.filter((subject) => {
            return '' + subject.cubeId == cubeId + '';
        });
        if(subject && subject.length > 0) {
            let _res = Require('cubes').filter((cube) => {
                return cube.code === subject[0].cubeId;
            });
            if(_res && _res.length > 0) {
                let data = _res[0];
                for(let i in data.metaData) {
                    data.metaData[i] = data.metaData[i].map((meta) => {
                        if(meta.children) {
                            meta.children = null;
                            delete meta.children;
                            meta.isLeaf = false;
                        } else {
                            meta.isLeaf = true;
                        }
                        return meta;
                    })
                }
                res.end(JSON.stringify({
                    succ: true,
                    data: data.metaData
                }))
            } else {
                next();
            }
        } else {
            next();
        }
    } catch(e) {
        next();
        console.log(e);
    }
});
router.get('/:cubeId/metadata/:type/:code/', function(req, res, next) {
    try {
        let {
            cubeId,
            type,
            code
        } = req.params;
        let {
            pageno,
            pagesize
        } = req.query;
        let subject = Require('subjects').data.filter((subject) => {
            return '' + subject.cubeId == cubeId + '';
        });
        if(subject && subject.length > 0) {
            // 根据主题找到对应的cube
            let _res = Require('cubes').filter((cube) => {
                return cube.code === subject[0].cubeId;
            });
            if(_res && _res.length > 0) {
                // 获取到CUBE的值
                let data = _res[0];
                let metadata = data.metaData[type];
                function findChildren(code,arr = metadata) {
                    for(let i in arr) {
                        // 有子节点，继续找
                        if(arr[i].children) {
                            if(arr[i].code === code) {
                                // 同样的码
                                return arr[i].children.map((meta) => {
                                    if(meta.children) {
                                        meta.children = null;
                                        delete meta.children;
                                        meta.isLeaf = false;
                                    } else {
                                        meta.isLeaf = true;
                                    }
                                    return meta;
                                })
                            } else {
                                // 不一样，接着找
                                let result = findChildren(code, arr[i].children);
                                if(result) {
                                    return result;
                                };
                            }
                        }
                    }
                    return null;
                }
                // metadata = data.metaData[i].map((meta) => {
                //     if(meta.children) {
                //         meta.children = null;
                //         delete meta.children;
                //         meta.isLeaf = false;
                //     } else {
                //         meta.isLeaf = true;
                //     }
                //     return meta;
                // })
                let start = (pageno - 1) * 2;
                let end = start + 2;
                let temData = findChildren(code).slice(start, end);
                let isMore = end == findChildren(code).length ? false: true;
                res.end(JSON.stringify({
                    succ: true,
                    data: {
                        pageno: pageno,
                        pagesize: 2,
                        total: findChildren(code).length,
                        data: temData,
                        isMore: isMore
                    }
                }))
            } else {
                next();
            }
        } else {
            next();
        }
    } catch(e) {
        next();
        console.log(e);
    }
});
router.post('/:id/exec', function(req, res, next) {
    let data = require('../data/complexTableData.js');
    res.send({
        succ: true,
        data: {
            pageno: 1,
            pagesize: 10,
            total: 100,
            taskId: 'afdfdfsa',
            data: data.data,
            head: data.head
        }
    })
})
router.post('/:cubeId/exec/sql', function(req, res, next) {
    res.send({
        succ: true,
        data: '{"sql": "select tbl_ipbat_trans_statistics.store_id as store_id, tbl_ipbat_store_dummy_list.store_id_desc as store_id_desc,  sum(TBL_IPBAT_TRANS_STATISTICS.TRANS_CT), sum(TBL_IPBAT_TRANS_STATISTICS.TRANS_AT) from tbl_ipbat_trans_statistics as tbl_ipbat_trans_statistics LEFT OUTER JOIN tbl_ipbat_store_dummy_list as tbl_ipbat_store_dummy_list on tbl_ipbat_trans_statistics.store_id = tbl_ipbat_store_dummy_list.store_id where 1=1  group by tbl_ipbat_trans_statistics.store_id,tbl_ipbat_store_dummy_list.store_id_desc order by tbl_ipbat_trans_statistics.store_id"}'
    })
})
router.get('/:cubeName/metadata/tables', function(req, res, next) {
    res.send({
        succ: true,
        data: [
            {
                name: 'afda',
                columns: [ {
                    name: '字段1',
                    isDim: true,
                },
                {
                    name: '字段2',
                    isDim: true,
                },
                {
                    name: '字段3',
                    isDim: true,
                } ]
            }, 
            {
                name: 'Tpl_esasd',
                columns: [ {
                    name: '字段1',
                    isDim: false,
                },
                {
                    name: '字段2',
                    isDim: false,
                },
                {
                    name: '字段3',
                    isDim: false,
                } ]
            },{
                name: 'tpl_dafa'
            },{
                name: 'cde'
            }
        ]
    })
})
router.post('/:cubeId/download', function(req, res, next) {
    let fileName = 'file';
    // console.log(res)
    // console.log(req.body);
    // console.log(res.body.params);
    let currFilePath = path.join(__dirname,`../data/file.txt`);
    let f = fs.createReadStream(currFilePath);
    res.writeHead(200, {
        'Content-Type': 'application/force-download',
        'Content-Disposition': `attachment; filename=file.txt`
    });
    f.pipe(res);
})
router.get('/:cubeId/user/dim/:code', function(req, res, next) {
    res.send({
        succ: true,
        data: {
            code: '12312',
            fields: [
                {
                    field: '字段1',
                    from: "tpl_dafa",
                    value: 'dfsdfewfqwrqf',
                },
                {
                    field: '字段2',
                    from: "tpl_dafaasda",
                    value: '3rewerqecvxc',
                }
            ],
            name: '编辑状态'
        }
    })
}) 
module.exports = router;
