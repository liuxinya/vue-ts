const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const menu = require('./routes/menu');

const app = express();

// view engine setup
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('X-Powered-By', ' 3.2.1');
    if (req.method == "OPTIONS") {
    res.send(200/*让options请求快速返回*/);
    }else {
        next();
    }
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/menus', menu);
app.use('/cube', require('./routes/cube'));
// 数据库 数据源 表 字段
app.use('/', require('./routes/data'));
// 主题相关
app.use('/subject', require('./routes/subject'));
// 参数管理
app.use('/dim', require('./routes/dim'));
// sql相关
app.use('/sql', require('./routes/sql'));
// 任务相关
app.use('/task', require('./routes/task'));
// sql编辑 获取树的 表 字段
app.use('/subjectTable', require('./routes/subjectTable'));
// 迁移
app.use('/', require('./routes/mizar'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;