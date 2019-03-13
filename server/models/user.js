const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM FitnessPersons", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM FitnessPersons WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        if(input.Password.length < 8){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO FitnessPersons (FirstName,LastName,Birthday,Password,created_at) VALUES (?)",
                    [[input.FirstName, input.LastName, input.Birthday, input.Password, new Date()]],
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