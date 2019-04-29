const conn = require('./mysql_connection');
const mysql = require('mysql');
const model = {
    update(input, id,email, cb) {
        conn.query(`UPDATE diet_plans SET dietplanName=${mysql.escape(input.dietplanName)},
        dietplanPeriod=${mysql.escape(input.dietplanPeriod)},meal01type=${mysql.escape(input.meal01type)},
        meal02type=${mysql.escape(input.meal02type)},meal03type=${mysql.escape(input.meal03type)},
        meal04type=${mysql.escape(input.meal04type)},meal01mon=${mysql.escape(input.meal01mon)},
        meal01tue=${mysql.escape(input.meal01tue)},meal01wed=${mysql.escape(input.meal01wed)},
        meal01thu=${mysql.escape(input.meal01thu)},meal01fri=${mysql.escape(input.meal01fri)},
        meal01sat=${mysql.escape(input.meal01sat)},meal02mon=${mysql.escape(input.meal02mon)},
        meal02tue=${mysql.escape(input.meal02tue)},meal02wed=${mysql.escape(input.meal02wed)},
        meal02thu=${mysql.escape(input.meal02thu)},meal02fri=${mysql.escape(input.meal02fri)},
        meal02sat=${mysql.escape(input.meal02sat)},meal02sun=${mysql.escape(input.meal02sun)},
        meal03mon=${mysql.escape(input.meal03mon)},meal03tue=${mysql.escape(input.meal03tue)},
        meal03wed=${mysql.escape(input.meal03wed)},meal03thu=${mysql.escape(input.meal03thu)},
        meal03fri=${mysql.escape(input.meal03fri)},meal03sat=${mysql.escape(input.meal03fri)},
        meal03sun=${mysql.escape(input.meal03sun)},meal04mon=${mysql.escape(input.meal04mon)},
        meal04tue=${mysql.escape(input.meal04tue)},meal04wed=${mysql.escape(input.meal04wed)},
        meal04thu=${mysql.escape(input.meal04thu)},meal04fri=${mysql.escape(input.meal04fri)},
        meal04sat=${mysql.escape(input.meal04sat)},meal04sun=${mysql.escape(input.meal04sun)},dietplanStaus=${mysql.escape(input.dietplanStatus)},dietplanPeriodType=${mysql.escape(input.dietplanPeriodType)} where diet_plans_id=${mysql.escape(id)} and email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });
    },
    delete(id,email, cb) {
        conn.query(`DELETE FROM diet_plans WHERE diet_plans_id =${mysql.escape(id)}and email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });
    },
    getAll(email, cb) {
        conn.query(`SELECT * FROM diet_plans where email=${mysql.escape(email)}`, (err, data) => {
            cb(err, data);
        });
    },
    get(id,email, cb) {
        conn.query(`SELECT * FROM diet_plans WHERE diet_plans_id=? and email=${mysql.escape(email)}`, id, (err, data) => {
            cb(err, data[0]);
        });
    },
    add(input, email, cb) {

        conn.query("INSERT INTO diet_plans(dietplanName,dietplanPeriod,meal01type,meal02type,meal03type,meal04type,meal01mon,meal01tue,meal01wed,meal01thu,meal01fri,meal01sat,meal02mon,meal02tue,meal02wed,meal02thu,meal02fri,meal02sat,meal02sun,meal03mon,meal03tue,meal03wed,meal03thu,meal03fri,meal03sat,meal03sun,meal04mon,meal04tue,meal04wed,meal04thu,meal04fri,meal04sat,meal04sun,email,date_stamp,dietplanStatus,dietplanPeriodType) VALUES (?)",
            [
                [input.dietplanName, input.dietplanPeriod, input.meal01type, input.meal02type, input.meal03type, input.meal04type, input.meal01mon, input.meal01tue, input.meal01wed, input.meal01thu, input.meal01fri, input.meal01sat, input.meal02mon, input.meal02tue, input.meal02wed, input.meal02thu, input.meal02fri, input.meal02sat, input.meal02sun, input.meal03mon, input.meal03tue, input.meal03wed, input.meal03thu, input.meal03fri, input.meal03sat, input.meal03sun, input.meal04mon, input.meal04tue, input.meal04wed, input.meal04thu, input.meal04fri, input.meal04sat, input.meal04sun, email, `'${new Date().toISOString().slice(0, 19).replace('T', ' ')}'`, input.dietplanStatus,input.dietplanPeriodType]
            ],
            (err, data) => {
                if (err) {
                    cb(err);
                    return;
                }
                model.get(data.insertId, email, (err, data) => {
                    cb(err, data);
                })
            }
        );
    }
};

module.exports = model;