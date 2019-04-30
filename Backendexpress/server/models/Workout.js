const conn = require('./mysql_connection');
const mysql=require('mysql');

const model = {
    update(input, id, email, cb) {
        conn.query(`UPDATE workouts SET workoutName=${mysql.escape(input.workoutName)},
        workoutDetail=${mysql.escape(input.workoutDetail)},
        workoutStatus=${mysql.escape(input.workoutStatus)},
        sets=${mysql.escape(input.sets)},
        steps=${mysql.escape(input.steps)},
        type=${mysql.escape(input.type)} where workouts_id=${mysql.escape(id)} and email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });
    },
    delete(id, email, cb) {
        conn.query(`DELETE FROM workouts where workouts_id =${mysql.escape(id)} and email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });
    },
    getAll(email, cb){
        conn.query(`SELECT * FROM workouts where email = ${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });    
    },
    get(id, email, cb) {
        conn.query(`SELECT * FROM workouts WHERE workouts_id=? and email=${mysql.escape(email)}`, id, (err, data) => {
            cb(err, data[0]);
        });
    },
    add(input, email, cb) {
        console.log('hello');
        
        conn.query("INSERT INTO workouts(workoutName,workoutDetail,workoutStatus,sets,steps,type,email,date_stamp) VALUES (?)",
            [
                [input.workoutName, input.workoutDetail, input.workoutStatus, input.sets, input.steps, input.type, email, input.date_stamp]
            ],
            (err, data) => {
                if (err) {
                    cb(err);
                    return;
                }
                model.get(data.insertId, email, (err, data) => {
                    cb(err, data);
                })
            }
        );
    }
};

module.exports = model;