const express = require('express');
const router = express.Router();

router.post('/exec', function(req, res, next) {
    let data = require('../data/complexTableData.js');
    res.send({
        succ: true,
        data: {
            pageno: 1,
            pagesize: 10,
            total: 100,
            taskId: 'afdadfds',
            data: data.data,
            // head: data.head
        }
    })
})
module.exports = router;
