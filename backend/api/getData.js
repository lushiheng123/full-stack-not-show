const mysql = require("mysql2");
const dotenv = require("dotenv").config();
// 连接数据库;
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,

  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
module.exports = connection;
