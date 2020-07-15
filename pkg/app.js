var express = require('express');
const bodyParser = require('body-parser');
var config = require('./conf/config');
var logger = require('morgan');
var fs = require('fs');
const departmentRoute = require('./route/department');
const index = require('./route/index');
var app = express();

app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
var accessLog = fs.createWriteStream(__dirname + '/access.log', {flags : 'a'});  
// var errorLog = fs.createWriteStream('../logs/error.log', {flags : 'a'});  
app.use(logger('dev'));
app.use(logger('combined', {stream : accessLog}));

app.use('/', express.static(config.wwwwroot.path));

app.use('/', index);

// department api
app.use('/api/v1', departmentRoute);
module.exports = app;