const express = require('express');
const user   = require('../models/DailyActivity');
const app  = express.Router();

app.get("/",auth, (req,res) =>{

    user.getAll(req.query.email, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.get("/:id", auth, (req,res) =>{

    user.get(req.params.id, req.query.email, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.post("/", auth, (req,res) =>{
    
    console.log(req.body);
    user.add(req.body, req.query.email, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});


module.exports = app;