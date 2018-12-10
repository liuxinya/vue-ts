var express = require('express');
var router = express.Router();
var helper = require("./helper");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/menus', function (req, res, next) {
  res.end(helper(true, require("./menus.js")));
});
router.get('/userinfo', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      userId: "12",
      username: "卡萨丁你看",
      description: 'qwqwe',
      authLevel: 0,
      instId: 'e232',
      instName: 'lksamlakmdklmadlkm'
    }))
  }, 0)
})
router.get('/resource/file/query', (req, res, next) => {
  res.end(helper(true, {
    "data": [{
      "fileName": "dfsad",
      "createTime": 1511974192000,
      "updateTime": 1511974192000,
      "fileDesc": "dsfas",
      "relationType": "1",
      "filePath": "dfsadf",
      "fileId": "12212",
      "fileExt": "dd",
      "relationId": "Resource_0800010000_1511940352791",
      "instId": "sfes",
      "userId": "dfsd"
    }],
    "total": 1,
    "pagesize": 2147483647,
    "pageno": 1
  }))
})
router.get('/inst/list', function (req, res, next) {
  res.end(helper(true, [{
    "instId": "0800010000",
    "instName": "总机构0001",
    "rootInstId": "机构001",
    "rootInstName": "0800010000"
  }, {
    "instId": "0800010000",
    "instName": "总机aAa构0001",
    "rootInstId": "机构001",
    "rootInstName": "0800010000"
  }]))
})
router.get('/users', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      total: 40,
      pageno: 1,
      pagesize: 10,
      data: [{
        userId: "12",
        username: "卡萨丁你看",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm',
        isEnabled: 'N',
        isEnabledMsg: '卡就是你的'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm',
        isEnabled: 'Y',
        isEnabledMsg: '了卡梅伦'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm',
        isEnabled: 'E',
        isEnabledMsg: 'asdasdasdasd'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm',
        isEnabled: 'N',
        isEnabledMsg: 'asdasdasd'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm',
        isEnabled: 'N',
        isEnabledMsg: 'asdasdasdlasmkdlkasm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm',
        isEnabled: 'Y',
        isEnabledMsg: 'laksdmlaskmdlkasmd'
      }]
    }))
  }, 0)
})
router.get('/groups', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      "data": [{
        "groupId": 1857931536,
        "groupName": "zzzzz",
        "createTime": 1505096485000,
        "updateTime": 1505096485000,
        "createUserId": "111"
      }, {
        "groupId": 1858032810,
        "groupName": "zzzz",
        "createTime": 1505096586000,
        "updateTime": 1505096586000,
        "createUserId": "111"
      }, {
        "groupId": 1858105055,
        "groupName": "zzz",
        "createTime": 1505096659000,
        "updateTime": 1505096658000,
        "createUserId": "111"
      }],
      "pagesize": 10,
      "pageno": 1,
      "total": 3
    }))
  }, 0);
})
router.post('/resource/file/upload', (req, res, next) => {
  res.end(helper(true));
})
router.get('/sourcetables', function (req, res, next) {
  res.end(helper(true, [{
    "tableId": 26,
    "dbName": "private_db_test",
    "tableName": "private_table",
    "tableDesc": "1111",
    "tablePropCd": "2",
    "tableTypeCd": "3",
    "createUserId": "bdpAdmin",
    "createInstId": "0800010000",
    "createTime": 1514202581000,
    "updateTime": 1514202581000,
    "status": "A",
    "updateUserId": "",
    "updateInstId": "",
    "storageCycle": 11,
    "ddl": "create table private_db_test.private_table(id int,name string,name2 string,name3 string)",
    "createUserName": "bdpAdmin",
    "createInstName": "上海信息中心",
    "updateUserName": null,
    "updateInstName": null,
    "auth": "RWO"
  }, {
    "tableId": 28,
    "dbName": "private_db_test",
    "tableName": "private_tb",
    "tableDesc": "私有表创建",
    "tablePropCd": "1",
    "tableTypeCd": "3",
    "createUserId": "bdpAdmin",
    "createInstId": "0800010000",
    "createTime": 1514352887000,
    "updateTime": 1514352887000,
    "status": "A",
    "updateUserId": "",
    "updateInstId": "",
    "storageCycle": 1,
    "ddl": "create table private_db_test.private_tb(id int,name string,name2 string,name3 string)",
    "createUserName": "bdpAdmin",
    "createInstName": "上海信息中心",
    "updateUserName": null,
    "updateInstName": null,
    "auth": "RWO"
  }, {
    "tableId": null,
    "dbName": "private_db_test",
    "tableName": "private_tb11111",
    "tableDesc": null,
    "tablePropCd": null,
    "tableTypeCd": null,
    "createUserId": null,
    "createInstId": null,
    "createTime": null,
    "updateTime": null,
    "status": null,
    "updateUserId": null,
    "updateInstId": null,
    "storageCycle": null,
    "ddl": null,
    "createUserName": null,
    "createInstName": null,
    "updateUserName": null,
    "updateInstName": null,
    "auth": "RWO"
  }, {
    "tableId": 52,
    "dbName": "private_db_test",
    "tableName": "private_tb2222222",
    "tableDesc": "",
    "tablePropCd": "",
    "tableTypeCd": "",
    "createUserId": "bdpAdmin",
    "createInstId": "0800010000",
    "createTime": 1515133139000,
    "updateTime": 1515133139000,
    "status": "A",
    "updateUserId": "",
    "updateInstId": "",
    "storageCycle": 0,
    "ddl": "create table private_db_test.private_tb2222222(id int,name string,name2 string,name3 string)",
    "createUserName": "bdpAdmin",
    "createInstName": "上海信息中心",
    "updateUserName": null,
    "updateInstName": null,
    "auth": "RWO"
  }]))
})
router.get('/table/:type', function (req, res, next) {
  // console.log(req.params.type);
  if (req.params.type === 'QZX') {
    res.end(helper(true, [{
      "createTime": 1505754240000,
      "updateTime": 1505754240000,
      "codeDesc": "机构1",
      "createInstId": "00010000",
      "createUserId": "yjy1",
      "cdTp": "asasd",
      "code": "888"
    }]))
    return;
  }
  setTimeout(() => {
    res.end(helper(true, [{
      "createTime": 1505754240000,
      "updateTime": 1505754240000,
      "codeDesc": "TABLE_TYPE_CD的HBASE",
      "createInstId": "00010000",
      "createUserId": "yjy1",
      "cdTp": "TABLE_PROP_CD",
      "code": "888"
    }, {
      "createTime": 1505754117000,
      "updateTime": 1505754117000,
      "codeDesc": "TABLE_TYPE_CD中的HIVE",
      "createInstId": "00010000",
      "createUserId": "yjy1",
      "cdTp": "TABLE_PROP_CD",
      "code": "999"
    }]))
  }, 0)
})
router.get('/sch/wf/jobs/:wdIf', function (req, res, next) {
  res.end(helper(true, [{
    "name": "str",
    "jobId": '122',
    "pJobId": '212'
  }]))
})
router.get('/sch', function (req, res, next) {
  res.end(helper(true, {
    total: 10,
    pageno: 1,
    pagesize: 10,
    data: [{
      tableId: 12,
      tableName: '12',
      tableAlias: 'qwwq',
      tableDesc: 'string',
      tablePropCd: 'string',
      tableInstId: 'string',
      tableTypeCd: 'string',
      createUserId: 'string',
      createTime: 'number',
      updateTime: 'number',
      ddl: 'string'
    }]
  }))
})
router.get('/:id/sch/job/delete/:projectId', function(req,res,next) {
  res.end(helper(true, true))
})
router.get('/taskflow', function (req, res, next) {
  res.end(helper(true, {
    total: 10,
    pageno: 1,
    pagesize: 10,
    data: [{
      tableId: 12,
      tableName: '12',
      tableAlias: 'qwwq',
      tableDesc: 'string',
      tablePropCd: 'string',
      tableInstId: 'string',
      tableTypeCd: 'string',
      createUserId: 'string',
      createTime: 'number',
      updateTime: 'number',
      ddl: 'string'
    }]
  }))
})
router.get("/group/users/:id", function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      "total": 20,
      "pagesize": 10,
      "pageno": 1,
      data: [{
        userId: "12",
        username: "卡萨丁你看",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }]
    }))
  }, 0)
});
router.get("/group/list", function (req, res, next) {
  let arr = [];
  for(let i = 0; i < 10; i++) {
    arr.push({
        "id": 1,
        "groupId": Math.random().toString(36).substr(8),
        "groupName": Math.random().toString(36).substr(8),
        "createUserId": "bdpAdmin",
        "createInstId": "0800010000",
        "createTime": new Date().getTime(),
        "updateTime": new Date().getTime()
    })
  }
  setTimeout(() => {
    res.end(helper(true, {
      "total": 10,
      "pagesize": 10,
      "pageno": 1,
      data: arr
    }))
  }, 0)
});
router.get('/resource/queue/query', (req, res, next) => {
  res.end(helper(true, {
    "data": [{
      "resourceOrderId": "Resource_0800010000_1511940352791",
      "memory": 2,
      "cpu": 0,
      "storage": 2,
      "queueId": 3,
      "createTime": 1511943199000,
      "updateTime": 1511956983000
    }],
    "pagesize": 2147483647,
    "pageno": 1,
    "total": 5
  }))
})
router.get('/resource/queue/user/query', (req, res, next) => {
  res.end(helper(true, {
    "data": [{
      "updateTime": 1511981304000,
      "createTime": 1511981304000,
      "resourceOrderId": "Resource_0800010000_1511940352791",
      "instId": "0800010000",
      "userId": "yjy1",
      "queueId": 3
    }],
    "total": 1,
    "pagesize": 2147483647,
    "pageno": 1
  }))
})
router.post('/resource/queue/:id/delete', (req, res, next) => {
  res.end(helper(true));
})

router.post('/resource/queue/add', (req, res, next) => {
  res.end(helper(true));
})
router.post('/resource/queue/update', (req, res, next) => {
  res.end(helper(true));
})
router.post('/resource/apply/add', (req, res, next) => {
  res.end(helper(true));
})
router.post('/resource/apply/add', (req, res, next) => {
  res.end(helper(true, {
    "description": "dfsfa",
    "reviewUserName": "大哥",
    "reviewInstld": "0800010000",
    "reviewInstName": "上海一部",
    "applyUserId": "yjy1",
    "resourceOrderId": "Resource_0800010000_1511940352791",
    "applyInstId": "0800010000",
    "reviewStatus": "2",
    "applyReason": "fsdfsf",
    "otherRequire": "545",
    "reviewUserId": "yjy1",
    "createTime": 1511973648000,
    "updateTime": 1512031410000,
    "cpu": 2,
    "memory": 2,
    "remark": "dfsdfs",
    "queueNum": 2,
    "storage": 2,
    "applyType": "1",
    "applyUserName": "大哥",
    "applyInstName": "上海一部"
  }));
})
router.post('/resource/queue/user/delete', (req, res, next) => {
  res.end(helper(true));
})
router.post('/resource/queue/user/add', (req, res, next) => {
  res.end(helper(true));
})
router.post('/resource/file/:fileId/delete', (req, res, next) => {
  res.end(helper(true));
})

router.get('/documents', function (req, res, next) {
  res.end(helper(true, {
    "total": 10,
    "pagesize": 10,
    "pageno": 1,
    data: [{
      'fileDesc': 'asdas',
      'fileId': 'asd',
      'fileName': 'laksmdlk按时',
      'fileExt': 'txt',
      'filePath': '',
      'instId': 0000000,
      'userId': 323333,
      "createTime": 1511973648000,
      "updateTime": 1511973648000,
    },{
      'fileDesc': 'asdas',
      'fileId': 'asd',
      'fileName': 'laksmdlk按时',
      'fileExt': 'txt',
      'filePath': '',
      'instId': 0000000,
      'userId': 323333,
      "createTime": 1511973648000,
      "updateTime": 1511973648000,
    },{
      'fileDesc': 'asdas',
      'fileId': 'asd',
      'fileName': 'laksmdlk按时',
      'fileExt': 'txt',
      'filePath': '',
      'instId': 0000000,
      'userId': 323333,
      "createTime": 1511973648000,
      "updateTime": 1511973648000,
    }]
  }))
})
router.get('/sourcetable/auth/:tableid/1', function (req, res, next) {
  res.end(helper(true, {
    "total": 10,
    "pagesize": 10,
    "pageno": 1,
    data: [{
      "instId": "0800010000",
      "instName": "总机构0001",
      "rootInstId": "机构001",
      "rootInstName": "0800010000"
    }, {
      "instId": "0800010000",
      "instName": "总机构0001",
      "rootInstId": "机构001",
      "rootInstName": "0800010000"
    }]
  }))
})
router.get('/sourcetable/auth/:tableid/0', function (req, res, next) {
  res.end(helper(true, {
    "total": 10,
    "pagesize": 10,
    "pageno": 1,
    data: [{
      userId: "12",
      username: "sadsa",
      description: 'qwqwe',
      authLevel: 'wqeqweqe',
      instId: 'e232',
      instName: 'lksamlakmdklmadlkm'
    }, {
      userId: "12",
      username: "sadsa",
      description: 'qwqwe',
      authLevel: 'wqeqweqe',
      instId: 'e232',
      instName: 'lksamlakmdklmadlkm'
    }, {
      userId: "12",
      username: "sadsa",
      description: 'qwqwe',
      authLevel: 'wqeqweqe',
      instId: 'e232',
      instName: 'lksamlakmdklmadlkm'
    }, {
      userId: "12",
      username: "sadsa",
      description: 'qwqwe',
      authLevel: 'wqeqweqe',
      instId: 'e232',
      instName: 'lksamlakmdklmadlkm'
    }, {
      userId: "12",
      username: "sadsa",
      description: 'qwqwe',
      authLevel: 'wqeqweqe',
      instId: 'e232',
      instName: 'lksamlakmdklmadlkm'
    }]
  }))
})
router.get('/sourcetable/users/:tableid/1', function (req, res, next) {
  res.end(helper(true, {
    "total": 10,
    "pagesize": 10,
    "pageno": 1,
    data: [{
      "instId": "0800010000",
      "instName": "总机构0001",
      "rootInstId": "机构001",
      "rootInstName": "0800010000",
      active: true
    }, {
      "instId": "0800010000",
      "instName": "总机构0001",
      "rootInstId": "机构001",
      "rootInstName": "0800010000",
      active: true
    }]
  }))
})
router.get('/sourcetable/users/:tableid/0', function (req, res, next) {
  res.end(helper(true, {
    "total": 10,
    "pagesize": 10,
    "pageno": 1,
    data: [{
      userId: "12",
      username: "sadsa",
      description: 'qwqwe',
      authLevel: 'wqeqweqe',
      instId: 'e232',
      active: true,
      instName: 'lksamlakmdklmadlkm'
    }, {
      userId: "12",
      username: "sadsa",
      description: 'qwqwe',
      authLevel: 'wqeqweqe',
      instId: 'e232',
      instName: 'lksamlakmdklmadlkm'
    }, {
      userId: "12",
      username: "sadsa",
      description: 'qwqwe',
      authLevel: 'wqeqweqe',
      instId: 'e232',
      instName: 'lksamlakmdklmadlkm'
    }]
  }))
})
router.get('/:productId/sch/job/list', function (req, res) {
  res.end(helper(true, [{
    "name": "job名称",
    "exeEngine": "SHELL",
    "execFileAddr": "a/b/c",
    "desc": "ddd",
    jobId: 'adsasdasd'
  }, {
    "name": "job名称",
    "exeEngine": "SHELL",
    "execFileAddr": "a/b/c",
    "desc": "ddd",
    jobId: 'adsasdasd'
  }, {
    "name": "job名称",
    "exeEngine": "SHELL",
    "execFileAddr": "a/b/c",
    "desc": "ddd",
    jobId: 'adsasdasd'
  }, {
    "name": "job名称",
    "exeEngine": "SHELL",
    "execFileAddr": "a/b/c",
    "desc": "ddd",
    jobId: 'adsasdasd'
  }, {
    "name": "job名称",
    "exeEngine": "SHELL",
    "execFileAddr": "a/b/c",
    "desc": "ddd",
    jobId: 'adsasdasd'
  }]))
})
router.post('/sourcetable/create', function (req, res, next) {
  res.end(helper(true, {
    dbName: 'akjdnaksjnd',
    tableName: 'asdaksdsamdsakjdnm'
  }))
})
router.post('/sourcetable/create/guide', function (req, res, next) {
  res.end(helper(true, {
    dbName: 'akjdnaksjnd',
    tableName: 'asdaksdsamdsakjdnm'
  }))
})
router.post('/sourcetable/merge', function (req, res, next) {
  res.end(helper(true, {
    dbName: 'akjdnaksjnd',
    tableName: 'asdaksdsamdsakjdnm'
  }))
})
router.get('/sourcetable/auth/public/field', function (req, res, next) {
  res.end(helper(true, initArr(Math.ceil(Math.random() * 6) + 1, function (i) {
    return {
      name: 'KASJND' + i,
      desc: i,
      active: Math.round(Math.random()) == 1
    }
  })));
});
router.get('/sourcetable/auth/private/field', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, initArr(3, function (i) {
      return {
        name: i == 0 ?
          'R' :
          (i == 1 ?
            'W' :
            'O'),
        active: Math.round(Math.random()) == 1
      }
    })));
  }, 1000);
});
router.get('/:project/sch/task/log/:type/:taskid/:currsize', (req, res, next) => {
  try {
    res.end(helper(true, {
      lastFileSize: 1,
      logMsg: `
      我是一个时间而已: ${new Date()}
      `
    }))
  } catch (e) {
    console.log(e);
  }
})
router.get('/:project/sch/job/detail/:jobId', (req, res, next) => {
  try {
    res.end(helper(true, {
      "userId": "yjy1",
      "instId": "00010000",
      "projectId": 1545458451222,
      "jobId": 33,
      "jobParam": "执行参数",
      "name": "job名称",
      "exeEngine": "HIVE",
      "execFileAddr": "/select.sh",
      "desc": "job描述"
    }))
  } catch (e) {
    console.log(e);
  }
})
router.post('/resource/apply/update', (req, res, next) => {
  res.end(helper(true));
})
router.get('/resource/apply/query', (req, res, next) => {
  res.end(helper(true, {
    "data": [{
      "description": "dfsfa",
      "reviewUserName": "大哥",
      "reviewInstId": "0800010000",
      "reviewInstName": "上海一部",
      "applyUserId": "yjy1",
      "resourceOrderId": "Resource_0800010000_1511940352791",
      "applyInstId": "0800010000",
      "reviewStatus": "4",
      "applyReason": "fsdfsf",
      "otherRequire": "545",
      "reviewUserId": "yjy1",
      "createTime": 1511973648000,
      "updateTime": 1512031410000,
      "cpu": 2,
      "memory": 2,
      "remark": "dfsdfs",
      "queueNum": 2,
      "storage": 2,
      "applyType": "1",
      "applyUserName": "大哥",
      "applyInstName": "上海一部"
    }],
    "pageno": 1,
    "total": 5,
    "pagesize": 10
  }))
})
router.get('/:project/sch/job/tasks/:jobId', (req, res, next) => {
  try {
    res.end(helper(true, {
      "data": [{
        "taskId": "str",
        "jobId": "str",
        "runWfId": "str",
        "status": "str",
        "beginTime": "str",
        "endTime": "str"
      }, {
        "taskId": "str",
        "jobId": "str",
        "runWfId": "str",
        "status": "str",
        "beginTime": "str",
        "endTime": "str"
      }, {
        "taskId": "str",
        "jobId": "str",
        "runWfId": "str",
        "status": "str",
        "beginTime": "str",
        "endTime": "str"
      }, {
        "taskId": "str",
        "jobId": "str",
        "runWfId": "str",
        "status": "str",
        "beginTime": "str",
        "endTime": "str"
      }],
      "pagesize": 10,
      "pageno": 1,
      "total": 100
    }))
  } catch (e) {
    console.log(e);
  }
})
router.get('/project/delete/:projectid', (req, res, next) => {
  res.end(
    helper(
      false
    )
  )
})
router.get('/:project/project/job', function (req, res, next) {
  res.end(helper(true, [{
    name: '拉看什么',
    projectId: 'asdlkmaslk',
    jobId: 'asdad',
    exeEngine: 'sadasd',
    execFileAddr: 'asd',
    taskId: 'adasd'
  }, {
    name: 'asdsadasd',
    projectId: 'asdlkmaslk',
    jobId: 'asdad',
    exeEngine: 'sadasd',
    execFileAddr: 'asd'
  }, {
    name: '拉看阿萨德什么',
    projectId: 'asdlkmaslk',
    jobId: 'asdad',
    exeEngine: 'sadasd',
    execFileAddr: 'asd',
    taskId: 'adasd'
  }, {
    name: '阿里看什么的',
    projectId: 'asdlkmaslk',
    jobId: 'asdad',
    exeEngine: 'sadasd',
    execFileAddr: 'asd'
  }, {
    name: '我去',
    projectId: 'asdlkmaslk',
    jobId: 'asdad',
    exeEngine: 'sadasd',
    execFileAddr: 'asd'
  }]))
})
router.get('/:project/user/ls/dir', function (req, res, next) {
  res.end(helper(true, [{
    "createTime": "1505201844000",
    "fileType": "dir",
    "name": "IntelliJ-IDEA"
  }, {
    "createTime": "1505201844000",
    "fileType": "dir",
    "name": "IntelliJ-assad"
  }, {
    "createTime": "1505201844000",
    "fileType": "dir",
    "name": "IntelliJ-assad"
  }, {
    "createTime": "1505201844000",
    "fileType": "dir",
    "name": "IntelliJ-assad"
  }, {
    "createTime": "1505201844000",
    "fileType": "dir",
    "name": "IntelliJ-assad"
  }, {
    "createTime": "1505201844000",
    "fileType": "dir",
    "name": "IntelliJ-assad"
  }, {
    "createTime": "1505201844000",
    "fileType": "file",
    "name": "啊搜到.tar"
  }, {
    "createTime": "1505201844000",
    "fileType": "file",
    "name": "啊搜到.ss"
  }, {
    "createTime": "1505201844000",
    "fileType": "file",
    "name": "啊搜到.gz"
  }, {
    "createTime": "1505201844000",
    "fileType": "file",
    "name": "as.sh"
  }]))
})
router.get('/:project/user/view', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      data: '啊立刻马上拉克丝没电啦开幕式的',
      fileName: 'sadas',
      fileSuffix: 'asdas'
    }))
  }, 0)
})
router.get('/:projectid/sch/wf/tasks/:wfId', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      "data": [{
        "taskId": "str",
        "jobId": "str",
        "runWfId": "str",
        "status": "str",
        "beginTime": "str",
        "endTime": "str"
      }, {
        "taskId": "str",
        "jobId": "str",
        "runWfId": "str",
        "status": "str",
        "beginTime": "str",
        "endTime": "str"
      }, {
        "taskId": "str",
        "jobId": "str",
        "runWfId": "str",
        "status": "str",
        "beginTime": "str",
        "endTime": "str"
      }, {
        "taskId": "str",
        "jobId": "str",
        "runWfId": "str",
        "status": "str",
        "beginTime": "str",
        "endTime": "str"
      }],
      "pagesize": 10,
      "pageno": 1,
      "total": 10
    }))
  }, 2000);
})
router.get('/sourcetable/auth/view/:a/:b', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      "pagesize": 10,
      "pageno": 1,
      "total": 10,
      data: [{
        userId: "12",
        username: "卡萨丁你看",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }]
    }))
  }, 1000)
})
router.get('/sourcetable/groupusers/:sourcetableid/:groupid', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      "pagesize": 10,
      "pageno": 1,
      "total": 10,
      data: [{
        userId: "12",
        username: "卡萨丁你看",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        active: true,
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }, {
        userId: "12",
        username: "sadsa",
        description: 'qwqwe',
        authLevel: 'wqeqweqe',
        instId: 'e232',
        instName: 'lksamlakmdklmadlkm'
      }]
    }))
  }, 1000);
})
router.get('/:projectid/sch/wf/list', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      "total": 10,
      "pagesize": 10,
      "pageno": 1,
      data: [{
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "desctab",
        "enable": 0,
        "type": 0,
        "wfDesc": "desctab",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 79
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "insertDim",
        "enable": 0,
        "type": 1,
        "wfDesc": "insertDim",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 85
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "insertDim",
        "enable": 0,
        "type": 1,
        "wfDesc": "insertDim",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 86
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "insertDim",
        "enable": 1,
        "type": 1,
        "wfDesc": "insertDim",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 87
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "insertDim",
        "enable": 1,
        "type": 1,
        "wfDesc": "insertDim",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 88
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "insertDim",
        "enable": 0,
        "type": 1,
        "wfDesc": "insertDim",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 89
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "insertDim",
        "enable": 0,
        "type": 1,
        "wfDesc": "insertDim",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 90
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "测试工作流001",
        "enable": 1,
        "type": 1,
        "wfDesc": "测试工作流001",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 91
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "2",
        "enable": 1,
        "type": 1,
        "wfDesc": "33",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 92
      }, {
        "userId": "yjy1",
        "insId": "0800010000",
        "projectId": null,
        "wfName": "2",
        "enable": 1,
        "type": 1,
        "wfDesc": "33",
        "startTime": 0,
        "endTime": 0,
        "rule": null,
        "value": null,
        "wfId": 93
      }]
    }))
  })
})

router.get('/file/dispatch/:reviewId/to/:aa', (req, res, next) => {
  res.end(helper(true));
})
router.get('/file/send/result/:reviewId', (req, res, next) => {
  res.end(helper(true, [{
    "sendFileId": "152079452565",
    "reviewId": "1507788555",
    "sendStatus": "4", //1-未发送，2-发送中，3-发送完成，4-发送失败，5-未知状态
    "sendFileNames": "HYY_201712120568.tar.gz，HYY_201712120569.tar.gz",
    "sendErrMes": "sdsfsdsdd",
    "createTime": "151269752452",
    "updateTime": "151269752452"
  }]));
})
router.get('/project/user/apply/list/view', function (req, res, next) {
  res.end(helper(true, {
    "total": 10,
    "pagesize": 10,
    "pageno": 1,
    data: [{
      "status": 0,
      runStatus: 3,
      violatLevel: '10',
      applyDesc: 'aslma拉开门时',
      "reviewDesc": "dsdfsafd",
      "reviewId": "1506076487105",
      "fileSize": "180",
      "applyInstId": "00010000",
      "applyUserId": "yjy1",
      "filePath": "F:/upload/66/77.txt",
      "fileExt": "txt",
      "createTime": 1506023798000,
      "updateTime": 1506023798000,
      "reviewUserId": "yjy1",
      "reviewInstId": "00010000",
      'partitTime': '20180101'
    }, {
      "status": 0,
      applyDesc: 'aslma拉开门时',
      violatLevel: '10',
      "reviewDesc": "dsdfsafd",
      "reviewId": "1506076487105",
      "fileSize": "180",
      "applyInstId": "00010000",
      "applyUserId": "yjy1",
      "filePath": "F:/upload/66/77.txt",
      "fileExt": "txt",
      "createTime": 1506023798000,
      "updateTime": 1506023798000,
      "reviewUserId": "yjy1",
      "reviewInstId": "00010000",
      'partitTime': '20180101'
    }, {
      "status": 0,
      applyDesc: 'aslma拉开门时',
      violatLevel: '10',
      "reviewDesc": "dsdfsafd",
      "reviewId": "1506076487105",
      "fileSize": "180",
      "applyInstId": "00010000",
      "applyUserId": "yjy1",
      "filePath": "F:/upload/66/77.txt",
      "fileExt": "txt",
      "createTime": 1506023798000,
      "updateTime": 1506023798000,
      "reviewUserId": "yjy1",
      "reviewInstId": "00010000",
      'partitTime': '20180101'
    }, {
      "status": 2,
      applyDesc: 'aslma拉开门时',
      "reviewDesc": "dsdfsafd",
      "reviewId": "1506076487105",
      "fileSize": "180",
      "applyInstId": "00010000",
      "applyUserId": "yjy1",
      "filePath": "F:/upload/66/77.txt",
      "fileExt": "txt",
      "createTime": 1506023798000,
      "updateTime": 1506023798000,
      "reviewUserId": "yjy1",
      "reviewInstId": "00010000",
      'partitTime': '20180101'
    }, {
      "status": 1,
      runStatus: 3,
      reviewStatus: 1,
      download: 2,
      applyDesc: 'aslma拉开门时',
      "reviewDesc": "dsdfsafd",
      "reviewId": "1506076487105",
      "fileSize": "180",
      "applyInstId": "00010000",
      "applyUserId": "yjy1",
      "filePath": "F:/upload/66/77.txt",
      "fileExt": "txt",
      "createTime": 1506023798000,
      "updateTime": 1506023798000,
      "reviewUserId": "yjy1",
      "reviewInstId": "00010000",
      'partitTime': '20180101'
    }]
  }))
})
router.get('/database/list', function (req, res, next) {
  let data = [];
  for(let i = 0; i < 50; i++) {
    data.push({
      "dbName": Math.random().toString(36).substr(2), //数据库名称
      "createUserId": Math.random().toString(36).substr(8),
      "createUserName": Math.random().toString(36).substr(8),
      "createInstId": Math.random().toString(2).substr(46),
      "createTime": 124545454545,
      "updateTime": 124545454545,
      "ownInstId": "0800010000", //所属机构
      "ownInstName": "机构名称", //所属机构
      "isPublic": Math.floor(Math.random() * 2) //是否公共数据库
    })
  }
  res.end(helper(true, data))
})
router.get('/:projectid/sch/wf/wfRuns/:id', function (req, res, next) {
  res.end(helper(true, {
    "total": 10,
    "pagesize": 10,
    "pageno": 1,
    data: [{
      "status": "str",
      "beginTime": new Date().getTime(),
      "updateTime": new Date().getTime(),
      "runWfId": "str",
      "wfName": "str",
      "enable": 1,
      "type": 1,
      "cronExpr": "str",
      "wfDesc": "str"
    }, {
      "status": "str",
      "beginTime": new Date().getTime(),
      "updateTime": new Date().getTime(),
      "runWfId": "str",
      "wfName": "str",
      "enable": 1,
      "type": 1,
      "cronExpr": "str",
      "wfDesc": "str"
    }, {
      "status": "str",
      "beginTime": new Date().getTime(),
      "updateTime": new Date().getTime(),
      "runWfId": "str",
      "wfName": "str",
      "enable": 1,
      "type": 1,
      "cronExpr": "str",
      "wfDesc": "str"
    }, {
      "status": "str",
      "beginTime": new Date().getTime(),
      "updateTime": new Date().getTime(),
      "runWfId": "str",
      "wfName": "str",
      "enable": 1,
      "type": 1,
      "cronExpr": "str",
      "wfDesc": "str"
    }, {
      "status": "str",
      "beginTime": new Date().getTime(),
      "updateTime": new Date().getTime(),
      "runWfId": "str",
      "wfName": "str",
      "enable": 1,
      "type": 1,
      "cronExpr": "str",
      "wfDesc": "str"
    }, {
      "status": "str",
      "beginTime": new Date().getTime(),
      "updateTime": new Date().getTime(),
      "runWfId": "str",
      "wfName": "str",
      "enable": 1,
      "type": 1,
      "cronExpr": "str",
      "wfDesc": "str"
    }]
  }))
})
router.get('/project/list', function (req, res, next) {
  res.end(helper(true, {
    "total": 30,
    "pagesize": 10,
    "pageno": 1,
    data: [{
        projectId: 'asdasdad', // 项目ID
        projectName: 'asdasdasd', // 项目名称
        projectDesc: 'asdasd', // 项目描述
        createTime: new Date().getTime(), // 项目建立的时间
        updateTime: new Date().getTime(), // 项目更新的时间
        userId: 'string;', // 创建用户的ID
        userName: 'string;', // 创建用户的名称
        instId: 'string;', // 创建用户的机构id
        instName: 'string; ' // 创建用户的机构名称
      },
      {
        projectId: 'ads', // 项目ID
        projectName: '拉什么的', // 项目名称
        projectDesc: '阿萨德', // 项目描述
        createTime: new Date().getTime(), // 项目建立的时间
        updateTime: new Date().getTime(), // 项目更新的时间
        userId: 'string;', // 创建用户的ID
        userName: 'string;', // 创建用户的名称
        instId: 'string;', // 创建用户的机构id
        instName: 'string; ' // 创建用户的机构名称
      }
    ]
  }))
})
router.get('/logs', function (req, res, next) {
  res.end(helper(true, {
    "data": [{
      "description": "创建API授权协议信息,表名：tbl_bdp_fe_api_agree_info",
      "operDatatime": 1512447480000,
      "createDatatime": 1512447481000,
      "instId": "0800010000",
      "userId": "yjy1",
      "errorMsg": "",
      "moduleName": "api",
      "operType": "add",
      "operStatus": "S",
      "logId": 10
    }, {
      "description": "创建API授权协议信息,表名：tbl_bdp_fe_api_agree_info",
      "operDatatime": 1512447480000,
      "createDatatime": 1512447481000,
      "instId": "0800010000",
      "userId": "yjy1",
      "errorMsg": "",
      "moduleName": "api",
      "operType": "add",
      "operStatus": "S",
      "logId": 10
    }],
    "total": 10,
    "pagesize": 10,
    "pageno": 1

  }))
})
router.get('/dim', function (req, res, next) {
  res.end(helper(true, {
    "data": [{
      "createInstId": "800010000",
      "createUserId": "yjy1",
      "updateTime": 1505387220000,
      "createTime": 1505387220000,
      "codeDesc": "SM3(商户编号)",
      "cdTp": "apiFunctionType",
      "code": "1"
    }, {
      "createInstId": "800010000",
      "createUserId": "yjy1",
      "updateTime": 1505387220000,
      "createTime": 1505387220000,
      "codeDesc": "SM3(商户编号)",
      "cdTp": "apiFunctionType",
      "code": "1"
    }],
    "total": 10,
    "pagesize": 10,
    "pageno": 1
  }))
})
router.get('/dim/list', function (req, res, next) {
  res.end(helper(true, {
    "data": [{
      "createInstId": "800010000",
      "createUserId": "yjy1",
      "updateTime": 1505387220000,
      "createTime": 1505387220000,
      "codeDesc": "SM3(商户编号)",
      "cdTp": "apiFunctionType",
      "code": "1"
    }, {
      "createInstId": "800010000",
      "createUserId": "yjy1",
      "updateTime": 1505387220000,
      "createTime": 1505387220000,
      "codeDesc": "SM3(商户编号)",
      "cdTp": "apiFunctionType",
      "code": "2"
    }],
    "total": 10,
    "pagesize": 10,
    "pageno": 1
  }))
})
router.get('/dim/cdTp/list', function (req, res, next) {
  res.end(helper(true, [{
    "cdTp": "apiFunctionType",
    cdTpDesc: 'apiFunctionType',
  }, {
    "cdTp": "apiType",
    "cdTpDesc": 'apiType',
  }]))
})
router.get('/sensitDataApply/list', function (req, res, next) {
  res.end(helper(true, {
    "data": [{
      "dataOrderId": "data_0800010000_1512960672200", //申请单号*
      "applyType": "2", //申请类型 （/dim/sensitApplyType）
      "applyTypeName": "API调用", //申请类型*
      "description": "3", //单号描述*
      "applyReason": "临时使用", //申请原因*
      "applyInstId": "0800010000", //申请单位*
      "applyUserId": "yjy1", //申请用户*
      "reviewStatus": "3", //审核状态（/dim/reviewStatus）
      "reviewStatusName": "草稿", //审核状态*
      "remark": "3", //审核原因*
      "updateTime": 1511849445000, //创建时间*
      "createTime": 1511849445000, //更新时间*

      "tableName": "default.yjy1_tableName", //表名
      "fieldAuth": "1", //字段权限（/dim/fieldAuth）
      "fieldAuthName": "1", //字段权限
      // "agreement": "0",//是否上传用户协议（/dim/agreement）
      // "agreementName": "0",//是否上传用户协议
      //申请人信息
      "applyInstName": "上海信息中心",
      "applyUserName": "yjy11(技术开发中心)",
      //审核人信息
      "reviewUserName": "yjy11(技术开发中心)",
      "reviewInstId": "0800010000",
      "reviewInstName": "上海信息中心",
      "reviewUserId": "yjy1"
    }],
    "total": 1,
    "pageno": 1,
    "pagesize": 10
  }))
})
router.get('/sensitDataAgree/:dataOrderId/list', function (req, res, next) {
  res.end(helper(true, [{
      "agreeId": "agree_data_0800010000_1513071889581", //协议单号
      "dataOrderId": "data_0800010000_1512960781936", //申请单号
      "agreeFilePath": "/1513071889573collection.json", //路径
      "fieldAuth": "1", //字段权限（/dim/fieldAuth）
      "agreeName": "协议名称", //协议名称
      "createTime": 1513071890000,
      "updateTime": 1513073682000,
      //审核人信息
      "reviewUserName": "yjy11(技术开发中心)",
      "reviewInstId": "0800010000",
      "reviewInstName": "上海信息中心",
      "reviewUserId": "yjy1",
      "reviewStatus": "2", //协议审核状态（/dim/agreeReviewStatus）
      "remark": "审核通过" //审核描述
    },
    {
      "agreeId": "agree_data_0800010000_1513071889581", //协议单号
      "dataOrderId": "data_0800010000_1512960781936", //申请单号
      "agreeFilePath": "/1513071889573collection.json", //路径
      "fieldAuth": "1", //字段权限（/dim/fieldAuth）
      "agreeName": "协议名称", //协议名称
      "createTime": 1513071890000,
      "updateTime": 1513073682000,
      //审核人信息
      "reviewUserName": "yjy11(技术开发中心)",
      "reviewInstId": "0800010000",
      "reviewInstName": "上海信息中心",
      "reviewUserId": "yjy1",
      "reviewStatus": "2", //协议审核状态（/dim/agreeReviewStatus）
      "remark": "审核通过" //审核描述
    }
  ]))
})
router.get('/apilog/list',function (req, res, next) {
  res.end(helper(true,{
      'data' : [{
        "requestAppId": '11111111111',
        "instName": 'qqqqqqq',
        "instId": 'ssss',
        "responseMsgTotalSum": 1,
        "responseMsgTotalCount": 2
      },
      {
        "requestAppId": '11111111111',
        "instName": 'qqqqqqq',
        "instId": 'ssss',
        "responseMsgTotalSum": 1,
        "responseMsgTotalCount": 222
      }],
      total: 333
  }))
})
router.get('/sch/wf/wfRun/list', function (req, res, next) {
  res.end(helper(true, {
    'data': [{
        "wfName": "test_sche", //任务流名称
        "wfDesc": "12345", //任务流描述
        "type": 1, //0:非调度任务；1：调度任务
        "runWfId": "4115", //实例id
        "status": "运行完成", //运行状态
        "projectId": 8888,
        "beginTime": 1514967325000, //开始时间
        "endTime": 1514967325000 //结束时间
      },
      {
        "wfName": "test_sche", //任务流名称
        "wfDesc": "12345", //任务流描述
        "type": 1, //0:非调度任务；1：调度任务
        "runWfId": "4115", //实例id
        "status": "运行完成", //运行状态
        "projectId": 8888,
        "beginTime": 1514967325000, //开始时间
        "endTime": 1514967325000 //结束时间
      },
    ],
    "total": 100,
    "pageno": 1,
    "pagesize": 10
  }))
})
router.get('/project/count/violatlevel', function (req, res, next) {
  res.end(helper(true, {
      "dataList": [{
        "instId": "0800010000",
        "violatLevel": "1",
        "num": 3,
        "violatDesc": "1级违规",
        "instName": "上海信息中心"
      }, {
        "instId": "0800010000",
        "violatLevel": "2",
        "num": 2,
        "violatDesc": "2级违规",
        "instName": "上海信息中心"
      }, {
        "instId": "0800010000",
        "violatLevel": "3",
        "num": 2,
        "violatDesc": "3级违规",
        "instName": "上海信息中心"
      }],
      "totalNum": 7
    }))
})
router.get('/dim/USERPATH_INFO_MODEL/USERPATH_INFO/userpath', function(req, res, next) {
  res.end(helper(true, '我来自域后台'))
})
router.get('/dim/APPROVE_DOWNLOAD_FILE_SPLIT', function (req, res, next){
  res.end(helper(true, [
    {
      "code": "0",
      "cdTp": "APPROVE_DOWNLOAD_FILE_SPLIT",
      "codeDesc": "逗号"
    },
    {
      "code": "1",
      "cdTp": "APPROVE_DOWNLOAD_FILE_SPLIT",
      "codeDesc": "空格"
    }
  ]))
})
router.post('/project/create', function (req, res, next) {
  res.end(helper(true, {
    projectId: 'asdasdad', // 项目ID
    projectName: 'asdasdasd', // 项目名称
    projectDesc: 'asdasd', // 项目描述
    createTime: new Date().getTime(), // 项目建立的时间
    updateTime: new Date().getTime(), // 项目更新的时间
    userId: 'string;', // 创建用户的ID
    userName: 'string;', // 创建用户的名称
    instId: 'string;', // 创建用户的机构id
    instName: 'string; ' // 创建用户的机构名称
  }))
})
router.post('/:projectid/sch/wf/new', function (req, res, next) {
  setTimeout(() => {
    res.end(helper(true, {
      "userId": "yjy1",
      "insId": "0800010000",
      "wfName": "workflow name",
      "enable": 0,
      "type": 0,
      "cronExpr": "*****",
      "wfDesc": "desc",
      "wfId": 26
    }));
  }, 0)
})
router.post('/user/writer', function (req, res) {
  setTimeout(() => {
    res.end(helper(true));
  }, 3000)
})
router.post('/user/:type/create', function (req, res) {
  res.end(helper(true));
})
router.post('/user/:type/upload', function (req, res) {
  res.end(helper(true));
})
router.post('/sch/wf/add/job/:id', function (req, res) {
  res.end(helper(true));
})
router.post('/group/update/:id', function (req, res, next) {
  //// console.log(req.body);
  res.end(helper(true));
})
router.post('/group/add/:id', function (req, res, next) {
  //// console.log(req.body);
  res.end(helper(true));
})
router.post('/group/delete/:id/users', function (req, res, next) {
  //// console.log(req.body);
  res.end(helper(true));
})
// router.post('/group/delete')
router.post('/group/delete/:id', function (req, res, next) {
  res.end(helper(true));
})
router.post('/group/new', function (req, res, next) {
  res.end(helper(true));
})
router.post('/user/apply', function (req, res, next) {
  res.end(helper(true))
})
router.post('/sourcetable/delete', function (req, res, next) {
  res.end(helper(true))
})
router.post('/project/new', function (req, res, next) {
  res.end(helper(true, {
    projectId: 'asadadsa',
    projectName: 'asdsadasd',
    projectDesc: 'string;',
    projectPath: 'string;'
  }))
})
router.post('/database/delete', function (req, res, next) {
  res.end(helper(true));
})
router.post('/database/create', function (req, res, next) {
  res.end(helper(true));
})
router.post('/user/enable', function (req, res, next) {
  res.end(helper(true));
})
router.post('/user/disable', function (req, res, next) {
  res.end(helper(true));
})
router.post('/sourcetable/users/auth/:type/update', function (req, res, next) {
  res.end(helper(true));
})



router.get('/dim/:apiFunctionType', function (req, res, next) {
  res.end(helper(true, [{
      "code": "3",
      "cdTp": "TABLE_TYPE_CD",
      "codeDesc": "HIVE"
    },
    {
      "code": "1",
      "cdTp": "TABLE_PROP_CD",
      "codeDesc": "事实表"
    }, {
      "code": "2",
      "cdTp": "TABLE_PROP_CD",
      "codeDesc": "维度表"
    }
  ]))
})

router.get('/dim/apiType', function (req, res, next) {
  res.end(helper(true, [{
    "createTime": 1483200000000,
    "updateTime": 1483200000000,
    "cdTpDesc": null,
    "codeDesc": "交易查询",
    "createUserId": "yjy1",
    "createInstId": "0800010000",
    "code": "1",
    "cdTp": "apiType"
  }, {
    "createTime": 1483200000000,
    "updateTime": 1483200000000,
    "cdTpDesc": null,
    "codeDesc": "T0交易累计",
    "createUserId": "yjy1",
    "createInstId": "0800010000",
    "code": "2",
    "cdTp": "apiType"
  }]))
})

router.get('/dim/applyType', function (req, res, next) {
  res.end(helper(true, [{
    "createTime": 1483200000000,
    "updateTime": 1483200000000,
    "cdTpDesc": null,
    "codeDesc": "云平台",
    "createUserId": "yjy1",
    "createInstId": "0800010000",
    "code": "1",
    "cdTp": "applyType"
  }, {
    "createTime": 1483200000000,
    "updateTime": 1483200000000,
    "cdTpDesc": null,
    "codeDesc": "数据厨房",
    "createUserId": "yjy1",
    "createInstId": "0800010000",
    "code": "2",
    "cdTp": "applyType"
  }]))
})

router.get('/dim/exportType', function (req, res, next) {
  res.end(helper(true, [{
    "createTime": 1483200000000,
    "updateTime": 1483200000000,
    "cdTpDesc": null,
    "codeDesc": "涉密",
    "createUserId": "yjy1",
    "createInstId": "0800010000",
    "code": "1",
    "cdTp": "exportType"
  }]))
})


router.get('/apiAgree/:apiOrderId/list', (req, res, next) => {
  res.end(helper(true, [{
    "mchntId": "mchnt_0800010000_1512980759863", //商户id
    "agreeName": "协议名称", //协议名称
    "updateTime": 1512446854000,
    "createTime": 1512446854000,
    "appId": "application_0800010000_1512446853893",
    "agreeFilePath": "E:/springUpload/1512446853878dwbdpdb.sql",
    "applyApiId": "api_1_1512980759863",
    "agreeId": "agree_api_0800010000_1512446853893",
    "reviewUserId": "yjy1",
    "reviewUserName": "yjy11(技术开发中心)",
    "reviewInstName": "上海信息中心",
    "reviewInstld": "0800010000",
    "reviewStatus": "1",
    "remark": "审核描述",
    "apiOrderId": "1"
  }]))
})

router.post('/apiApply/add', function (req, res, next) {
  res.end(helper(true, true))
})


router.get('/apiApply/list', function (req, res, next) {
  res.end(helper(true, {
    "data": [{
      "apiOrderId": "api_0800010000_1512980759863",
      "applyType": "4", //申请类型（/dim/apiApplyType）
      "applyTypeName": "API调用", //申请类型
      "description": "3", //单号描述
      "applyReason": "临时使用", //申请原因
      "applyInstId": "0800010000", //申请单位
      "applyUserId": "yjy1", //申请用户
      "reviewStatus": "1", //审核状态（/dim/reviewStatus）
      "reviewStatusName": "草稿", //审核状态
      "remark": "3", //审核原因
      "updateTime": 1511849445000,
      "createTime": 1511849445000,
      "apiType": "1", //申请API名称（/dim/apiType）
      "apiTypeName": "1中文", //申请API名称
      "exportType": "3", //输出是否涉密（/dim/exportType）
      "exportTypeName": "3中文", //输出是否涉密
      "concurrent": 2, //并发量
      "useFrequency": 3, //使用频率
      "appName": "应用名称", //应用名称
      "mchntId": "mchnt_0800010000_1512980759863", //商户id
      "mchntName": "商户名称", //商户名称
      "secretKey": "APPID_1513056202636_A2126CAE-5DAC-4955-8557-D19AF98CC940", //密钥
      //申请人信息
      "applyUserName": "yjy1",
      "applyInstName": "上海总公司",
      //审核人信息
      "reviewUserId": "yjy1",
      "reviewUserName": "yjy1",
      "reviewInstId": "0800010000",
      "reviewInstName": "上海总公司",
      "otherRequire": "其它筛选条件", //其它筛选条件
      "apiFunctionType": "1", //API功能（/dim/apiFunctionType）
      "apiFunctionTypeName": "1", //API功能
      "exportFields": "3", //输出字段
      "applyApiId": "api_1_1512980759863", //申请APIID
      "appId": "application_0800010000_1512980759863" //应用id
    }],
    "total": 10,
    "pagesize": 10,
    "pageno": 1

  }))
})

router.get('/dim/apiApplyType', (req, res, next) => {
  res.end(helper(true, [{
    "createTime": 1505754240000,
    "updateTime": 1505754240000,
    "codeDesc": "行业云",
    "createInstId": "00010000",
    "createUserId": "yjy1",
    "cdTp": "00010018_FILE_RECEIVER",
    "code": "HYY"
  }, {
    "createTime": 1505754240000,
    "updateTime": 1505754240000,
    "codeDesc": "入网机构",
    "createInstId": "00010000",
    "createUserId": "yjy1",
    "cdTp": "00010018_FILE_RECEIVER",
    "code": "LOC"
  }]))
})


router.post('/apiAppy/delete/:apiOrderId', function (req, res, next) {
    res.end(helper(true, true))
  }


)
router.post('/sensitDataApply/add', function (req, res, next) {
  res.end(helper(true, true))
})

router.post('/project/template', function (req, res, next) {
  res.end(helper(true, {
    "projectId": 66666, //项目id
    "projectName": "嘟嘟嘟", //项目名称
    "projectDesc": "哒哒哒", // 项目描述
    "projectPath": "str", //项目路径
    "createUserId": "str", //创建用户
    "createInstId": "str", //创建机构
    "createTime": 1513839304841, //创建时间
    "updateTime": 1513839304841 //更新时间
  }))
})
router.get('/project/user/list/:projectId', function(req, res, next) {
  res.end(helper(true, {
    "pageno": 1,
		"pagesize": 10,
		"total": 2,
		"data": [{
        "uid": 10001,
        "instId": "0800010018",
        "agentInstId": "",
        "description": "",
        "instName": "银联智惠",
        "userId": "upzh01",
        "username": "upzh01"
      }, {
        "uid": 10002,
        "instId": "0800010018",
        "agentInstId": "",
        "description": "",
        "instName": "银联智惠",
        "userId": "upzh02",
        "username": "upzh02"
      }]
  }))
})
router.get('/project/not/user/list/:projectId', function(req, res, next) {
  res.end(helper(true, {
    "pageno": 1,
		"pagesize": 10,
		"total": 2,
		"data": [{
			"uid": 10027,
			"instId": "0800010018",
			"agentInstId": "",
			"description": "",
			"instName": "银联智惠",
			"userId": "upzh11",
			"username": "upzh11"
		}, {
			"uid": 10004,
			"instId": "0800010018",
			"agentInstId": "",
			"description": "",
			"instName": "银联智惠",
			"userId": "zh002",
			"username": "zh002"
		}]
  }))
})
router.post('/project/add/user/:projectId', function(req, res, next) {
  res.end(helper(true, true))
})
router.get('/:projectId/groups', function(req, res, next) {
  res.end(helper(true, {
    "pageno": 1,
		"pagesize": 10,
		"total": 3,
		"data": [{
			"groupId": 1522032144039,
			"groupName": "teststee",
			"createUserId": "bdpAdmin",
			"createInstId": "0800010000",
			"createTime": 1522032144000,
			"updateTime": 1522032144000
		}, {
			"groupId": 1521116597991,
			"groupName": "s",
			"createUserId": "bdpAdmin",
			"createInstId": "0800010000",
			"createTime": 1521116597000,
			"updateTime": 1521116597000
		}, {
			"groupId": 1516950953054,
			"groupName": "测试群组01",
			"createUserId": "bdpAdmin",
			"createInstId": "0800010000",
			"createTime": 1516950953000,
			"updateTime": 1516950953000
		}]
  }))
})
router.get('/project/groupusers/:projectId/:groupId', function(req, res, next) {
  res.end(helper(true, {
		"pageno": 1,
		"pagesize": 20,
		"total": 3,
		"data": [{
			"uid": 10016,
			"instId": "0800010000",
			"agentInstId": "",
			"description": "",
			"active": "true",
			"instName": "上海信息中心",
			"userId": "hanbowen",
			"username": "hanbowen"
		}, {
			"uid": 10013,
			"instId": "0800010000",
			"agentInstId": "",
			"description": "",
			"active": "true",
			"instName": "上海信息中心",
			"userId": "yjy1",
			"username": "yjy11(技术开发中心)"
		}, {
			"uid": 10014,
			"instId": "0800010000",
			"agentInstId": "",
			"description": "",
			"active": "true",
			"instName": "上海信息中心",
			"userId": "zc01",
			"username": "zc01n"
		}]
	}))
})
router.post('/:projectId/sch/wf/new', function(req, res, next) {
  res.end(helper(true, {
		"userId": "upzh01",
		"instId": "00010018",
		"projectId": 1528102211271,
		"wfName": "as",
		"enable": 0,
		"type": 0,
		"wfDesc": "asd",
		"startTime": 1529978072000,
		"endTime": 1529978072000,
		"rule": "0",
		"value": "0",
		"wfId": 1703
	}))
})
router.post('/:projectId/sch/wf/add/job/:wfid', function(req, res, next) {
  res.end(helper(true, true))
})
router.get('/log/optType', function(req, res, next) {
  res.end(helper(true, [
    {
      code: 'afadf',
      codeDesc: 'adfa'
    },
    {
      code: 'a12123',
      codeDesc: '12312'
    }
  ]))
})
router.get('/log/moduleType', function(req, res, next) {
  res.end(helper(true, [
    {
      code: 'afadf',
      codeDesc: 'adfa'
    },
    {
      code: 'a12123',
      codeDesc: '12312'
    }
  ]))
})
router.get('/group/users/notin/:id', function(req, res, next) {
  res.end(helper(true, {
    pageno: 1,
    pagesize: 10,
    total: 11,
    data: [{
      "uid": 10023,
      "instId": "0800010000",
      "agentInstId": "",
      "description": "",
      "instName": "上海信息中心",
      "userId": "cubeBdr",
      "authLevel": -1,
      "username": "cubeBdr"
    }, {
      "uid": 10017,
      "instId": "0800010000",
      "agentInstId": "",
      "description": "",
      "instName": "上海信息中心",
      "userId": "lijing2",
      "authLevel": 1,
      "username": "lijing2"
    }, {
      "uid": 10013,
      "instId": "0800010000",
      "agentInstId": "",
      "description": "",
      "instName": "上海信息中心",
      "userId": "yjy1",
      "authLevel": 4,
      "username": "yjy"
    }, {
      "uid": 100001,
      "instId": "0800010000",
      "agentInstId": "",
      "description": "",
      "instName": "上海信息中心",
      "userId": "yjy2",
      "authLevel": 4,
      "username": "yjy"
    }, {
      "uid": 10019,
      "instId": "0800010000",
      "agentInstId": "",
      "description": "",
      "instName": "上海信息中心",
      "userId": "zc02",
      "authLevel": 3,
      "username": "zc02n"
    }, {
      "uid": 10005,
      "instId": "0800010020",
      "agentInstId": "",
      "description": "",
      "instName": "银联智策",
      "userId": "upzc01",
      "authLevel": 2,
      "username": "upzc01"
    }, {
      "uid": 10007,
      "instId": "0800010020",
      "agentInstId": "",
      "description": "",
      "instName": "银联智策",
      "userId": "zc001",
      "authLevel": 2,
      "username": "zc001"
    }, {
      "uid": 10008,
      "instId": "0800010020",
      "agentInstId": "",
      "description": "",
      "instName": "银联智策",
      "userId": "zc002",
      "authLevel": 3,
      "username": "zc002"
    }, {
      "uid": 10025,
      "instId": "0800010020",
      "agentInstId": "",
      "description": "",
      "instName": "银联智策",
      "userId": "zctest1",
      "authLevel": 2,
      "username": "zctest1"
    }, {
      "uid": 10009,
      "instId": "0800012900",
      "agentInstId": "",
      "description": "",
      "instName": "上海分公司",
      "userId": "01092205",
      "authLevel": 3,
      "username": "bmish"
    }]
  }))
})
// router.post('/project/template', function(req, res, next) {
//   res.end(helper(true, {
// 		"projectId": 10001,
// 		"projectName": "template",
// 		"projectDesc": "项目模版",
// 		"projectPath": null,
// 		"createUserId": "bdpAdmin",
// 		"createInstId": "0800010000",
// 		"createTime": 1515397714000,
// 		"updateTime": 1515397714000
// 	}))
// })/static/:tableName/data?pagesize=10&pageno=1&search=key&column=fieldsearch/column
// router.get('/static/:tableName/data?pagesize=10&pageno=1&search=key&column=fieldsearch/column',function(req,res,next){
  router.get('/static/table04/data', function(req, res, next) {
    res.end(helper(true,  [
      {
        'head':['id','name','age','sex'],
        'data':[['1','Jack','12','male'],['2','Andy','34','female'],['3','Lily','25','female']],
        'isMore':true
      }
  ]))
  })
router.get('/static/tables', function(req, res, next) {
  res.end(helper(true, [{
    'tableName': 'table01',
    'tableNameDesc': '第一张表',
    'tableFunctionDesc': '这个是beta版本1.0.0下的Json格式表格，该表格用于测试',
    'type': 1,
    'fields': [{
      'field': 'field1',
      'desc': '这是field1',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field2',
      'desc': '这是field2',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field3',
      'desc': '这是field3',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field4',
      'desc': '这是field4',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field5',
      'desc': '这是field5',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }],
    'data': [
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5']
    ]
  }, {
    'tableName': 'table02',
    'tableNameDesc': '第二张表',
    'tableFunctionDesc': '这个是beta版本1.0.0下的Json格式表格，该表格用于测试',
    'type': 2,
    'fields': [{
      'field': 'field1',
      'desc': '这是field1',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field2',
      'desc': '这是field2',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field3',
      'desc': '这是field3',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field4',
      'desc': '这是field4',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field5',
      'desc': '这是field5',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }],
    'data': [
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5']
    ]
  }, {
    'tableName': 'table03',
    'tableNameDesc': '第三张表',
    'tableFunctionDesc': '这个是beta版本1.0.0下的Json格式表格，该表格用于测试',
    'type': 3,
    'fields': [{
      'field': 'field1',
      'desc': '这是field1',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field2',
      'desc': '这是field2',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field3',
      'desc': '这是field3',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field4',
      'desc': '这是field4',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field5',
      'desc': '这是field5',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }],
    'data': [
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5']
    ]
  }, {
    'tableName': 'table04',
    'tableNameDesc': '第四张表',
    'tableFunctionDesc': '这个是beta版本1.0.0下的Json格式表格，该表格用于测试',
    'type': 4,
    'fields': [{
      'field': 'field1',
      'desc': '这是field1',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field2',
      'desc': '这是field2',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field3',
      'desc': '这是field3',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field4',
      'desc': '这是field4',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field5',
      'desc': '这是field5',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }],
    'data': [
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5']
    ]
  }, {
    'tableName': 'table05',
    'tableNameDesc': '第五张表',
    'tableFunctionDesc': '这个是beta版本1.0.0下的Json格式表格，该表格用于测试',
    'type': 3,
    'fields': [{
      'field': 'field1',
      'desc': '这是field1',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field2',
      'desc': '这是field2',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field3',
      'desc': '这是field3',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field4',
      'desc': '这是field4',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field5',
      'desc': '这是field5',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }],
    'data': [
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5']
    ]
  }, {
    'tableName': 'table06',
    'tableNameDesc': '第六张表',
    'tableFunctionDesc': '这个是beta版本1.0.0下的Json格式表格，该表格用于测试',
    'type': 1,
    'fields': [{
      'field': 'field1',
      'desc': '这是field1',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field2',
      'desc': '这是field2',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field3',
      'desc': '这是field3',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field4',
      'desc': '这是field4',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }, {
      'field': 'field5',
      'desc': '这是field5',
      'type': 'varchar',
      'sourceDesc': 'beta数据'
    }],
    'data': [
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5'],
      ['field1', 'field2', 'field3', 'field4', 'field5']
    ]
  }]))
})
router.get('/sourcetable/desc', function(req, res, next) {
  res.end(helper(true, 'sd\n  `pri_acct_no` string, \n  `dist_acct` int, \n  `dist_device` int, \n  `trans_total` int, \n  `trans_disc` '))
})


module.exports = router;

function initArr(num, handler) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(handler(i));
  };
  return arr;
}
