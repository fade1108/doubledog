//数据库连接池
const mysql = require('mysql');
var pool = mysql.createPool({
   host:'localhost',
   port:'3306',
   user:'root',
   password:'',
   database:'doubledog',
   connectionLimit:20
});
module.exports=pool;