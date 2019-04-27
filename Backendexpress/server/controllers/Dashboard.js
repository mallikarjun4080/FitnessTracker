const express = require('express');
const dashboard   = require('../models/Dashboard');
const app  = express.Router();
const auth=require('../middlewares/requireAuth.js');

app.get("/calories",auth, (req,res) =>{

    dashboard.getCalories(req.query.email, (err,data) =>{
        if(err) throw err;
        let calories = 0;
        data.forEach(cal => {
            calories += cal.calories;
        });
        res.send(`${calories}`);
    });

});

app.get("/goals",auth, (req,res) =>{

    dashboard.getGoals(req.query.email, (err,data) =>{
        if(err) throw err;
        let goals = (data.length * 10) < 100 ? data.length * 10 : (data.length / 100) * 10;
        res.send(`${goals}`);
    });

});

app.get("/nutritions",auth, (req,res) =>{

    dashboard.getNutritions(req.query.email, (err,data) =>{
        if(err) throw err;
        let nutritions = (data.length * 10) < 100 ? data.length * 10 : (data.length / 100) * 10;
        res.send(`${nutritions}`);
    });

});

app.get("/workouts",auth, (req,res) =>{

    dashboard.getWorkouts(req.query.email, (err,data) =>{
        if(err) throw err;
        console.log(data);
        let workouts = (data.length * 10) < 100 ? data.length * 10 : (data.length / 100) * 10;
        res.send(`${workouts}`);
    });

});

app.get("/achvieved-goals",auth, (req,res) =>{

    dashboard.getGoals(req.query.email, (err,data) =>{
        if(err) throw err;
        let goals = [];
        data.forEach((gl) => {
            goals.push(gl.calories)
        })
        res.send(goals);
    });

});

app.get("/pending-goals",auth, (req,res) =>{

    dashboard.getPendingGoals(req.query.email, (err,data) =>{
        if(err) throw err;
        let pGoals = [];
        data.forEach((gl) => {
            pGoals.push(gl.calories)
        })
        res.send(pGoals);
    });

});

module.exports = app;