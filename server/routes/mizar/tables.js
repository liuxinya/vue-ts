var express = require('express');
var router = express.Router();
const helper = require("./helper");

/* GET home page. */
router.get('/size', function(req, res, next) {
    res.end(helper(false, 10, '发生了错误'));
});

module.exports = router;
