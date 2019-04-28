const express = require('express');
const profile=require('../models/Profile');
const auth=require('../middlewares/requireAuth');

const app = express.Router();


app.post("/",auth, (req, res) => {

    console.log(req.body);
    profile.add(req.body, req.query.email, (err, data) => {
        if (err) throw err;
        res.send(data);
    });

});

app.get('/', auth , (req,res)=>{
    profile.get(req.query.email,(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
});
app.put('/', auth, (req,res)=>{
    profile.update(req.body,req.query.email, (err,data)=>{
        if(err) throw err;
        res.send(data);
    })
});
app.delete('/', auth , (req,res)=>{
    profile.delete(req.query.email, (err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})

module.exports=app;