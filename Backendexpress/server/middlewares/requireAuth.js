var jwt = require('jsonwebtoken');
//const keys = require('../../config.js');
const mysql = require('mysql');
//const con = require('../db/connection');
const con=require('../models/mysql_connection');
const keys = require('../../config.js');

module.exports = (req, res, next) => {
  let token = req.headers['token'];
  
  console.log(token);

  if(!token) return res.status(500).send({ auth: false, msg: 'No token provided.'});

  jwt.verify(token, keys.secret, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, msg: 'Failed to authenticate the provided token.'});

    req.user_id = decoded.id;
    let user = `select email from fitness_persons where id = ${mysql.escape(req.user_id)}`;
    con.query(user, (err, user) => {
      if (err) throw err;
      console.log(user);
      req.email = user.email;
    })
    console.log(decoded.id);
    next();
  })
};