const express = require('express');
const router = express.Router();

router.get('/cube/:subjectId/metadata/tables', function(req, res, next) {
    res.send({
        "succ": true,
        "msg": "",
        "code": 0,
        "data": [
            {
                "name": "tpl_dafa",
                "isCube":true
            },
            {
                "name": "tpl_dafaasda",
                "isCube":true
            },
            {
                "name": "asdvasd",
                "isCube":false
            },
        ]
    })
})
router.get('/cube/:subjectId/metadata/fields', function(req, res, next) {
    res.send({
        "succ": true,
        "msg": "",
        "code": 0,
        "data": [
            {
                "name": "字段1",
                "isDim":true
            },
            {
                "name": "字段2",
                "isDim":true
            },
            {
                "name": "字段3",
                "isDim":false
            },
        ]
    })
})
module.exports = router;
