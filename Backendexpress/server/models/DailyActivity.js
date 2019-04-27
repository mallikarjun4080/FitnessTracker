const conn = require('./mysql_connection');
const mysql=require('mysql');

const model = {
    update(input,id,email, cb){
        conn.query(`UPDATE daily_activities SET activityName=${mysql.escape(input.activityName)},
        activityDetail=${mysql.escape(input.activityDetail)},
        activityName=${mysql.escape(input.activityName)},
        activityStatus=${mysql.escape(input.activityStatus)},
        repitition=${mysql.escape(input.repitition)},duration=${mysql.escape(input.duration)},
        type=${mysql.escape(input.type)} where daily_activity_id=${mysql.escape(id)} and email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });    
    },
    delete(id,email, cb){
        conn.query(`DELETE FROM daily_activities WHERE daily_activity_id =${mysql.escape(id)} and email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });    
    },
    getAll(email, cb){
        conn.query(`SELECT * FROM daily_activities where email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });    
    },
    get(id, email, cb){
        conn.query(`SELECT * FROM daily_activities WHERE daily_activity_id=? and email=${mysql.escape(email)}`, id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, email, cb){
      
        conn.query( "INSERT INTO daily_activities(activityName,activityDetail,activityStatus,repitition,duration,type,email,date_stamp) VALUES (?)",
                    [[input.activityName,input.activityDetail,input.activityStatus,input.repitition,input.duration,input.type,email,input.date_stamp]],
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