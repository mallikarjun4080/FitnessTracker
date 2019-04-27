const conn = require('./mysql_connection');
const mysql=require('mysql');

const model = {
    getCalories(email, cb){
        conn.query(`SELECT * FROM fitness_goals where email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });    
    },
    getGoals(email, cb){
        conn.query(`SELECT * FROM fitness_goals where email=${mysql.escape(email)} and goalStatus='Completed'`, (err, data) => {
            cb(err, data);
        });    
    },
    getNutritions(email, cb){
        conn.query(`SELECT * FROM diet_plans where email=${mysql.escape(email)} and dietplanStatus='Completed'`, (err, data) => {
            cb(err, data);
        });    
    },
    getWorkouts(email, cb){
        conn.query(`SELECT * FROM workouts where email=${mysql.escape(email)} and workoutStatus='Completed'`, (err, data) => {
            cb(err, data);
        });    
    },
    getPendingGoals(email, cb){
        conn.query(`SELECT * FROM fitness_goals where email=${mysql.escape(email)} and goalStatus='Pending'`, (err, data) => {
            cb(err, data);
        });    
    }
};

module.exports = model;