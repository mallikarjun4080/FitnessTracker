const conn = require('./mysql_connection');
const mysql = require('mysql');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM fitness_persons", (err, data) => {
            cb(err, data);
        });    
    },
    get(email, cb){
        conn.query("SELECT * FROM fitness_persons WHERE email=?", email, (err, data) => {
            cb(err, data[0]);
        });    
    },    
    getById(id, cb){
        conn.query("SELECT * FROM fitness_persons WHERE id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        if(input.password.length < 8){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO fitness_persons(firstName,lastName,email,password,created_at) VALUES (?)",
                    [[input.firstName, input.lastName, input.email, input.password, new Date()]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.getById(data.insertId, (err, data)=>{
                            cb(err, data);
                        })
                    }
        );    
                    
    },
    update(input, email, cb){
        conn.query( `update fitness_persons set firstName =${mysql.escape(input.firstName)}, lastName = ${mysql.escape(input.lastName)}, password = ${mysql.escape(input.newpassword)} where email = ${mysql.escape(email)}`,
                    (err, data) => {
                       if(err){
                          cb(err);
                          return;
                    }
                    model.get(data.insertId, (err, data)=>{
                        cb(err, data);
                    })
                }
        );    
    },
    auth(input, cb){
         conn.query(`SELECT * FROM fitness_persons WHERE email=${mysql.escape(input.email)}`, (err, data) => {
         cb(err, data);
    });    
   },
};

module.exports = model;