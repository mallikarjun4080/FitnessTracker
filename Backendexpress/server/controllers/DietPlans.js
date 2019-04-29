const express = require('express');
const user   = require('../models/DietPlan');
const app  = express.Router();
const auth=require('../middlewares/requireAuth.js');

app.put("/:diet_plans_id",auth, (req,res) =>{

    user.update(req.body,req.params.diet_plans_id,req.query.email,(err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.delete("/:diet_plans_id",auth, (req,res) =>{

    user.delete(req.params.diet_plans_id,req.query.email,(err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});

app.get("/",auth, (req,res) =>{

    user.getAll(req.query.email, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.get("/:id", auth, (req,res) =>{

    user.get(req.params.id,req.query.email, (err,data) =>{
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