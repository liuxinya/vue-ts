const express = require('express');
const router = express.Router();
const tool = require('../helpers/tool');
/* GET home page. */
router.get('/', function(req, res, next) {
    try {
        setTimeout(() => {
            res.json(tool.wrapResult(true, require('../data/menu.json')));
        }, 1000);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
