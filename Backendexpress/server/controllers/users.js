const express = require('express');
const user   = require('../models/user');
const keys = require('../../config.js');
const jwt = require('jsonwebtoken');
const app  = express.Router();

app.get("/", (req,res) =>{

    user.getAll((err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.get("/:id", (req,res) =>{

    user.get(req.params.id, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.post("/", (req,res) =>{
    
    console.log(req.body);
    user.add(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});

app.post("/auth", (req, res) => {
    console.log(req.body);
    user.auth(req.body, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {

            // check if password matches
            if (user[0].password != req.body.password) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else {
                console.log(keys.secret)

                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({
                    id: user[0].id,
                    email: user[0].email,
                    password: user[0].password
                }, keys.secret, {
                    expiresIn: expiresIn
                });
                res.status(200).send({
                    access_token: accessToken,
                    expires_in: expiresIn,
                    user: {
                        _userId: user[0].id,
                        fname: user[0].firstName,
                        lname: user[0].lastName,
                        email: user[0].email
                    }
                });
            }
        }
    });

});


module.exports = app;