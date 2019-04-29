const conn = require('./mysql_connection');
const mysql=require('mysql');
const users = require('./user');
const model = {
    add(input, email, cb) {
        conn.query("INSERT INTO profiles(designation,gender,age,height,bodyweight,bmi,bloodpressure,email,date_stamp) VALUES (?)",
            [
                [input.designation,input.gender, input.age, input.height, input.bodyweight, input.bmi, input.bloodpressure, email, `'${new Date().toISOString().slice(0, 19).replace('T', ' ')}'`]
            ],
            (err, data) => {
                if (err) {
                    cb(err);
                    return;
                }
                cb(err, {
                    auth: true,
                    msg: 'successfully posted'
                })
            })
    },
    get(email,cb){
        conn.query(`SELECT * FROM profiles p, fitness_persons fp WHERE p.email=${mysql.escape(email)} and fp.email = p.email`, (err,data) => {
            cb(err, data[0]);
        });
    }, 
    
    delete(id,email, cb){
        conn.query(`DELETE FROM profiles WHERE profile_id=${mysql.escape(id)} and email=${mysql.escape(email)}` , (err,data)=>{
            if(err) throw err;
            cb(err, data);
        })
    }
    
};

module.exports = model;