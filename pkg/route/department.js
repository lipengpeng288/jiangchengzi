// var app = require('../app.js');
var express = require('express');
var router = express.Router();
var mysql = require('../db/conn');

router.get('/department', function(req, res, next) {
    let index = req.query.index;
    let size = req.query.size;
    index = index || 0;
    size = size || 10; 
    const from = index * size;
    mysql(`select * from department limit ${from}, ${size}`).then((result) => {
        mysql(`select count(*) from department`).then((count) => {
            res.send({departments: result, total: count[0]['count(*)']})
        })
    })
    
});

router.post('/department', (req, res) => {
    const department = req.body;
    const sql = `insert into department(dname,parent,createdAt)values('${department.name}', '${department.parent ? department.parent: null}',${department.createdAt})`;
    mysql(sql).then(() => {
        res.send({status: 200, message: '创建成功'})
    }).catch((err) => {
        res.send({status: 444, message: `创建失败: ${err}`});
    });
});

router.delete('/department', (req, res) => {
    let did = req.query.did;
    const sql = `delete from department where did = ${did}`;
    mysql(sql).then(() => {
        res.send({status: 200, message: '删除成功'})
    }).catch((err) => {
        res.send({status: 444, message: `删除失败: ${err}`});
    })
});



module.exports = router;

