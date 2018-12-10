const express = require('express');
const router = express.Router();
const fs = require('fs');
// const tool = require('../helpers/tool');
const path = require('path');
/* GET home page. */
router.get('/list', function (req, res, next) {
    res.send({
        "succ": true,
        "code": 0,
        "msg": "操作成功",
        "data": {
            "pageno": 1,
            "pagesize": 10,
            "total": 21,
            "data": [{
                "subjectId": "1532074554559",
                "taskId": "13",
                "name": "新建查询1",
                "state": "ES",
                "detail": "{\"cubeName\":\"DUMMY_DAY\",\"cubePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\\",\"dimJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_dimensions.json\",\"dims\":[{\"children\":[],\"code\":\"STORE_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"filters\":[{\"children\":[{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1000\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1000沃尔玛购物广场贵阳沙冲路分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"code\":\"STORE_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"children\":[{\"belongCode\":\"user_dim\",\"code\":\"user_dim-1531724618669\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店1000\",\"parentCode\":\"user_dim\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"code\":\"user_dim\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"用户自定义集\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"measureJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_measures.json\",\"measures\":[{\"code\":\"TRANS_VOLUME~0~0\",\"factTable\":\"TBL_IPBAT_TRANS_STATISTICS\",\"field\":\"TRANS_CT\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":true,\"isUnique\":false,\"level\":0,\"name\":\"总交易笔数(单位:笔)\",\"separator\":\"-\",\"unit\":\"1.00\"},{\"code\":\"TRANS_VOLUME~0~1\",\"factTable\":\"TBL_IPBAT_TRANS_STATISTICS\",\"field\":\"TRANS_AT\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":true,\"isUnique\":false,\"level\":0,\"name\":\"总交易金额(单位:元)\",\"separator\":\"-\",\"unit\":\"0.01\"}],\"name\":\"新建查询1\",\"offsetFrom0\":0,\"offsetFrom1\":1,\"pageno\":1,\"pagesize\":20,\"selectFieldsSize\":2,\"subjectId\":1532074554559,\"tablesJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_tables.json\",\"userDimFilePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\0800010000/bdpAdmin/DUMMY_DAY/\",\"userInfo\":{\"instId\":\"0800010000\",\"userId\":\"bdpAdmin\"}}",
                "type": "cube",
                "beginTime": 1532330924000,
                "endTime": 1532330924000
            }, {
                "subjectId": "1532074554559",
                "taskId": "24",
                "name": "新建查询1",
                "state": "ES",
                "detail": "{\"cubeName\":\"DUMMY_DAY\",\"cubePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\\",\"dimJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_dimensions.json\",\"dims\":[],\"filters\":[],\"measureJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_measures.json\",\"measures\":[{\"children\":[{\"belongCode\":\"TRANS_VOLUME~0\",\"code\":\"TRANS_VOLUME~0~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易笔数(单位:笔)\",\"parentCode\":\"TRANS_VOLUME~0\",\"separator\":\"-\",\"source\":\"度量\"}],\"code\":\"TRANS_VOLUME~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"交易\",\"separator\":\"-\",\"source\":\"度量\"}],\"name\":\"新建查询1\",\"offsetFrom0\":0,\"offsetFrom1\":1,\"pageno\":1,\"pagesize\":20,\"selectFieldsSize\":0,\"subjectId\":1532074554559,\"tablesJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_tables.json\",\"userDimFilePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\0800010000/bdpAdmin/DUMMY_DAY/\",\"userInfo\":{\"instId\":\"0800010000\",\"userId\":\"bdpAdmin\"}}",
                "type": "cube",
                "beginTime": 1532343331000,
                "endTime": 1532343331000
            }, {
                "subjectId": "1532074554559",
                "taskId": "26",
                "name": "新建查询1",
                "state": "ES",
                "detail": "{\"cubeName\":\"DUMMY_DAY\",\"cubePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\\",\"dimJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_dimensions.json\",\"dims\":[{\"code\":\"STORE_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"code\":\"AREA_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"区域级联\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"code\":\"SMALL_AREA_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"小区\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"filters\":[{\"children\":[{\"code\":\"user_dim-1531724618669\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店1000\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"code\":\"user_dim\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"用户自定义集\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"measureJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_measures.json\",\"measures\":[{\"children\":[{\"code\":\"TRANS_VOLUME~0~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易笔数(单位:笔)\",\"separator\":\"-\",\"source\":\"度量\"},{\"code\":\"TRANS_VOLUME~0~1\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易金额(单位:元)\",\"separator\":\"-\",\"source\":\"度量\"}],\"code\":\"TRANS_VOLUME~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"交易\",\"separator\":\"-\",\"source\":\"度量\"}],\"name\":\"新建查询1\",\"offsetFrom0\":0,\"offsetFrom1\":1,\"pageno\":1,\"pagesize\":20,\"selectFieldsSize\":6,\"subjectId\":1532074554559,\"tablesJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_tables.json\",\"userDimFilePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\0800010000/bdpAdmin/DUMMY_DAY/\",\"userInfo\":{\"instId\":\"0800010000\",\"userId\":\"bdpAdmin\"}}",
                "type": "cube",
                "beginTime": 1532343423000,
                "endTime": 1532343423000
            }, {
                "subjectId": "1532074554559",
                "taskId": "27",
                "name": "新建查询1",
                "state": "ES",
                "detail": "{\"cubeName\":\"DUMMY_DAY\",\"cubePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\\",\"dimJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_dimensions.json\",\"dims\":[{\"children\":[{\"code\":\"STORE_ID~0~1000\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1000沃尔玛购物广场贵阳沙冲路分店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"code\":\"STORE_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"filters\":[{\"children\":[{\"code\":\"user_dim-1531724618669\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店1000\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"code\":\"user_dim\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"用户自定义集\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"measureJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_measures.json\",\"measures\":[{\"children\":[{\"code\":\"TRANS_VOLUME~0~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易笔数(单位:笔)\",\"separator\":\"-\",\"source\":\"度量\"}],\"code\":\"TRANS_VOLUME~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"交易\",\"separator\":\"-\",\"source\":\"度量\"}],\"name\":\"新建查询1\",\"offsetFrom0\":0,\"offsetFrom1\":1,\"pageno\":1,\"pagesize\":20,\"selectFieldsSize\":2,\"subjectId\":1532074554559,\"tablesJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_tables.json\",\"userDimFilePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\0800010000/bdpAdmin/DUMMY_DAY/\",\"userInfo\":{\"instId\":\"0800010000\",\"userId\":\"bdpAdmin\"}}",
                "type": "cube",
                "beginTime": 1532343442000,
                "endTime": 1532343442000
            }, {
                "subjectId": "1532074554559",
                "taskId": "28",
                "name": "新建查询1",
                "state": "ES",
                "detail": "{\"cubeName\":\"DUMMY_DAY\",\"cubePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\\",\"dimJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_dimensions.json\",\"dims\":[{\"children\":[],\"code\":\"STORE_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"filters\":[{\"children\":[{\"code\":\"user_dim-1531724618669\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店1000\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"code\":\"user_dim\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"用户自定义集\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"measureJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_measures.json\",\"measures\":[{\"children\":[{\"code\":\"TRANS_VOLUME~0~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易笔数(单位:笔)\",\"separator\":\"-\",\"source\":\"度量\"}],\"code\":\"TRANS_VOLUME~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"交易\",\"separator\":\"-\",\"source\":\"度量\"}],\"name\":\"新建查询1\",\"offsetFrom0\":0,\"offsetFrom1\":1,\"pageno\":1,\"pagesize\":20,\"selectFieldsSize\":2,\"subjectId\":1532074554559,\"tablesJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_tables.json\",\"userDimFilePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\0800010000/bdpAdmin/DUMMY_DAY/\",\"userInfo\":{\"instId\":\"0800010000\",\"userId\":\"bdpAdmin\"}}",
                "type": "cube",
                "beginTime": 1532343448000,
                "endTime": 1532343448000
            }, {
                "subjectId": "1532074554559",
                "taskId": "29",
                "name": "新建查询1",
                "state": "ES",
                "detail": "{\"cubeName\":\"DUMMY_DAY\",\"cubePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\\",\"dimJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_dimensions.json\",\"dims\":[{\"children\":[{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1000\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1000沃尔玛购物广场贵阳沙冲路分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1001\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1001沃尔玛购物广场贵阳人民广场分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1002\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1002沃尔玛购物广场南宁朝阳路分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1003\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1003沃尔玛购物广场武汉中山大道分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"code\":\"STORE_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"filters\":[{\"children\":[{\"code\":\"user_dim-1531724618669\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店1000\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"code\":\"user_dim\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"用户自定义集\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"measureJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_measures.json\",\"measures\":[{\"children\":[{\"code\":\"TRANS_VOLUME~0~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易笔数(单位:笔)\",\"separator\":\"-\",\"source\":\"度量\"}],\"code\":\"TRANS_VOLUME~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"交易\",\"separator\":\"-\",\"source\":\"度量\"}],\"name\":\"新建查询1\",\"offsetFrom0\":0,\"offsetFrom1\":1,\"pageno\":1,\"pagesize\":20,\"selectFieldsSize\":2,\"subjectId\":1532074554559,\"tablesJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_tables.json\",\"userDimFilePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\0800010000/bdpAdmin/DUMMY_DAY/\",\"userInfo\":{\"instId\":\"0800010000\",\"userId\":\"bdpAdmin\"}}",
                "type": "cube",
                "beginTime": 1532343454000,
                "endTime": 1532343454000
            }, {
                "subjectId": "1532074554559",
                "taskId": "30",
                "name": "新建查询1",
                "state": "ES",
                "detail": "{\"cubeName\":\"DUMMY_DAY\",\"cubePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\\",\"dimJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_dimensions.json\",\"dims\":[{\"children\":[{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1000\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1000沃尔玛购物广场贵阳沙冲路分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1001\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1001沃尔玛购物广场贵阳人民广场分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1002\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1002沃尔玛购物广场南宁朝阳路分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1003\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1003沃尔玛购物广场武汉中山大道分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"code\":\"STORE_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"children\":[],\"code\":\"SMALL_AREA_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"小区\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"filters\":[{\"children\":[{\"code\":\"user_dim-1531724618669\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店1000\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"code\":\"user_dim\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"用户自定义集\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"measureJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_measures.json\",\"measures\":[{\"children\":[{\"code\":\"TRANS_VOLUME~0~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易笔数(单位:笔)\",\"separator\":\"-\",\"source\":\"度量\"}],\"code\":\"TRANS_VOLUME~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"交易\",\"separator\":\"-\",\"source\":\"度量\"}],\"name\":\"新建查询1\",\"offsetFrom0\":0,\"offsetFrom1\":1,\"pageno\":1,\"pagesize\":20,\"selectFieldsSize\":4,\"subjectId\":1532074554559,\"tablesJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_tables.json\",\"userDimFilePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\0800010000/bdpAdmin/DUMMY_DAY/\",\"userInfo\":{\"instId\":\"0800010000\",\"userId\":\"bdpAdmin\"}}",
                "type": "cube",
                "beginTime": 1532343460000,
                "endTime": 1532343460000
            }, {
                "subjectId": "1532074554559",
                "taskId": "32",
                "name": "新建查询2",
                "state": "EF",
                "detail": "select\n  tbl_ipbat_trans_statistics.store_id as store_id,\n  tbl_ipbat_store_dummy_list.store_id_desc as store_id_desc,\n  sum(TBL_IPBAT_TRANS_STATISTICS.TRANS_CT),\n  sum(TBL_IPBAT_TRANS_STATISTICS.TRANS_AT)\nfrom\n  tbl_ipbat_trans_statistics as tbl_ipbat_trans_statistics\n  LEFT OUTER JOIN tbl_ipbat_store_dummy_list as tbl_ipbat_store_dummy_list on tbl_ipbat_trans_statistics.store_id = tbl_ipbat_store_dummy_list.store_id\nwhere\n  1 = 1\ngroup by\n  tbl_ipbat_trans_statistics.store_id,\n  tbl_ipbat_store_dummy_list.store_id_desc\norder by\n  tbl_ipbat_trans_statistics.store_id",
                "type": "cube_sql",
                "beginTime": 1532393864000,
                "endTime": 1532393864000
            }, {
                "subjectId": "1532074554559",
                "taskId": "33",
                "name": "新建查询2",
                "state": "EF",
                "detail": "select\n  tbl_ipbat_trans_statistics.store_id as store_id,\n  tbl_ipbat_store_dummy_list.store_id_desc as store_id_desc,\n  sum(TBL_IPBAT_TRANS_STATISTICS.TRANS_CT),\n  sum(TBL_IPBAT_TRANS_STATISTICS.TRANS_AT)\nfrom\n  tbl_ipbat_trans_statistics as tbl_ipbat_trans_statistics\n  LEFT OUTER JOIN tbl_ipbat_store_dummy_list as tbl_ipbat_store_dummy_list on tbl_ipbat_trans_statistics.store_id = tbl_ipbat_store_dummy_list.store_id\nwhere\n  1 = 1\ngroup by\n  tbl_ipbat_trans_statistics.store_id,\n  tbl_ipbat_store_dummy_list.store_id_desc\norder by\n  tbl_ipbat_trans_statistics.store_id",
                "type": "cube_sql",
                "beginTime": 1532393881000,
                "endTime": 1532393881000
            }, {
                "subjectId": "1532074554559",
                "taskId": "34",
                "name": "新建查询1",
                "state": "ES",
                "detail": "{\"cubeName\":\"DUMMY_DAY\",\"cubePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\\",\"dimJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_dimensions.json\",\"dims\":[{\"children\":[{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1000\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1000沃尔玛购物广场贵阳沙冲路分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1001\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1001沃尔玛购物广场贵阳人民广场分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false},{\"belongCode\":\"STORE_ID~0\",\"code\":\"STORE_ID~0~1002\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"1002沃尔玛购物广场南宁朝阳路分店\",\"parentCode\":\"STORE_ID~0\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"code\":\"STORE_ID~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"filters\":[{\"children\":[{\"code\":\"user_dim-1531724618669\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"门店1000\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false}],\"code\":\"user_dim\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"用户自定义集\",\"separator\":\"-\",\"showCode\":false,\"source\":\"自定义集\",\"top\":false},{\"children\":[],\"code\":\"PAY_TP~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"支付方式\",\"separator\":\"-\",\"showCode\":false,\"source\":\"维度\",\"top\":false}],\"measureJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_measures.json\",\"measures\":[{\"children\":[{\"belongCode\":\"TRANS_VOLUME~0\",\"code\":\"TRANS_VOLUME~0~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易笔数(单位:笔)\",\"parentCode\":\"TRANS_VOLUME~0\",\"separator\":\"-\",\"source\":\"度量\"},{\"belongCode\":\"TRANS_VOLUME~0\",\"code\":\"TRANS_VOLUME~0~1\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"总交易金额(单位:元)\",\"parentCode\":\"TRANS_VOLUME~0\",\"separator\":\"-\",\"source\":\"度量\"}],\"code\":\"TRANS_VOLUME~0\",\"isDrag\":true,\"isEdit\":false,\"isLeaf\":false,\"isUnique\":false,\"level\":0,\"name\":\"交易\",\"separator\":\"-\",\"source\":\"度量\"}],\"name\":\"新建查询1\",\"offsetFrom0\":0,\"offsetFrom1\":1,\"pageno\":1,\"pagesize\":20,\"selectFieldsSize\":2,\"subjectId\":1532074554559,\"tablesJsonFile\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\DUMMY_DAY/DUMMY_DAY_tables.json\",\"userDimFilePath\":\"F:\\\\work\\\\big-data-analytics-platform\\\\src\\\\main\\\\resources\\\\0800010000/bdpAdmin/DUMMY_DAY/\",\"userInfo\":{\"instId\":\"0800010000\",\"userId\":\"bdpAdmin\"}}",
                "type": "cube",
                "beginTime": 1532394027000,
                "endTime": 1532394027000
            }]
        }
    })
});
router.post('/delete/:taskId', function(req, res, next) {
    res.send({
        succ: true,
        data: ''
    })
})
router.get('/download/:taskId', function(req, res, next) {
    let currFilePath = path.join(__dirname,`../data/file.txt`);
    let f = fs.createReadStream(currFilePath);
    res.writeHead(200, {
        'Content-Type': 'application/force-download',
        'Content-Disposition': `attachment; filename=file.txt`
    });
    f.pipe(res);
})
router.get('/taskname/list', function(req, res, next) {
    res.send({
        succ: true,
        data: ['name1', 'name2', 'name3']
    })
})
router.get('/:taskId/download', function(req, res, next) {
    // res.send({
    //     succ: false,
    //     data: '文件下载异常',
    //     msg: '文件下载异常',
    // })
    let currFilePath = path.join(__dirname,`../data/file.txt`);
    let f = fs.createReadStream(currFilePath);
    res.writeHead(200, {
        'Content-Type': 'application/force-download',
        'Content-Disposition': `attachment; filename=file.txt`
    });
    f.pipe(res);
})
module.exports = router;