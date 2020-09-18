var express = require('express');
const mysql = require('mysql');
var router = express.Router();
// var moment = require('moment'); // 追加momentで追加
// var connection = require('../mysqlConnection'); // 追加

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'pass',
//   database: 'list_app',
// });

//const mysqlconn = mysql.createConnection({
  const mysqlconn = mysql.createPool({
    host: 'localhost', //ここのパラメータはひろさんの環境に合わせて修正してください。
    port: '3306',
    user: 'root',
    password: 'pass',
    database: 'list_app'
});



router.post('/', function(req, res, next) {
  console.log(req.body.menu);
  console.log(req.body.sex);
  console.log(req.body.ages);
  // var createdAt = moment().format('YYYY-MM-DD HH:mm:ss'); // 追加
  // console.log(createdAt); // 追加
 
  // mysql.connectの代わりにgetConnectionを使う。
// 内部関数でSQLを処理する。
mysqlconn.getConnection((err,conn) => {
  conn.query(
      "insert into sampledata values(?,?,?)",
      [data.mode, data.sex, data.ages],
      (error, result, fields) =>{
  });
  // コネクションを使い終わったら必ずreleaseする。
  conn.release();
});

});



module.exports = router;

