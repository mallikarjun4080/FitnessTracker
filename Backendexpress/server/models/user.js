const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM Fitness_Persons", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){
        conn.query("SELECT * FROM Fitness_Persons WHERE Id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    getById(id, cb){
        conn.query("SELECT * FROM fitness_persons WHERE id=?", id, (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        if(input.Password.length < 8){
            cb(Error('A longer Password is Required'));
            return;
        }
        conn.query( "INSERT INTO Fitness_Persons(Id,FirstName,LastName,Password,created_at) VALUES (?)",
                    [[input.Id,input.FirstName, input.LastName, input.Password, new Date()]],
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
                    
    },
    update(input, email, cb) {
        conn.query( `update fitness_persons set firstName =${mysql.escape(input.firstName)}, lastName = ${mysql.escape(input.lastName)}, password = ${mysql.escape(input.newpassword)} where email = ${mysql.escape(email)}`,
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
    },
    auth(input, cb){
         conn.query(`SELECT * FROM fitness_persons WHERE email=${mysql.escape(input.email)}`, (err, data) => {
         cb(err, data);
    });    
   },
};

module.exports = model;