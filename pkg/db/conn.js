var config = require('../conf/config');
var mysql = require('mysql');

var con = mysql.createConnection(config.mysql);

con.connect();

function mysqlExec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = mysqlExec;