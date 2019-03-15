const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Calorie", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM Fitness_Calorie WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        if(input.Password.length < 8){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO Fitness_Calorie(Id,calorie,) VALUES (?)",
                    [[input.Id,input.calorie,]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.get(data.insertId, (err, data)=>{
                            cb(err, data);
                        })
                    }
        );    
    }
};

module.exports = model;