const conn = require('./mysql_connection');
const mysql=require('mysql');

const model = {
    update(input,id,email, cb){
        conn.query(`UPDATE fitness_goals SET goalName=${mysql.escape(input.goalName)},
        goalDetail=${mysql.escape(input.goalDetail)},goalStatus=${mysql.escape(input.goalStatus)},
        calories=${mysql.escape(input.calories)},duration=${mysql.escape(input.duration)},
        type=${mysql.escape(input.type)} where fitness_goals_id=${mysql.escape(id)} and email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });    
    },
    delete(id,email, cb){
        conn.query(`DELETE FROM fitness_goals WHERE fitness_goals_id=${mysql.escape(id)} and email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });    
    },
    getAll(email, cb){
        conn.query(`SELECT * FROM fitness_goals where email = ${mysql.escape(email)}`,(err, data) => {
            cb(err, data);
        });    
    },
    get(id,email, cb){
        conn.query(`SELECT * FROM fitness_goals WHERE fitness_goals_id=? and email=${mysql.escape(email)}`, id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, email, cb){
        conn.query( "INSERT INTO fitness_goals(goalName,goalDetail,goalStatus,calories,duration,type,email,date_stamp) VALUES (?)",
                    [[input.goalName,input.goalDetail,input.goalStatus,input.calories,input.duration,input.type,email,input.date_stamp]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.get(data.insertId, email, (err, data)=>{
                            cb(err, data);
                        })
                    }
        );  
    }
};

module.exports = model;