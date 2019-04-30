
const mysql = require('mysql');
              require('dotenv').load();
const conn = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user:process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  Password:process.env.MYSQL_PASS,
  connectionLimit: 10,
  insecureAuth: true
});


module.exports = conn;
