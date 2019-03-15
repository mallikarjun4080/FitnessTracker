const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_FoodItems", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM Fitness_FoodItems WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        if(input.Password.length < 8){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO Fitness_FoodItems(Food_Id,calorie_amount,created_at) VALUES (?)",
                    [[input.Food_Id,input.calorie_amount, new Date()]],
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