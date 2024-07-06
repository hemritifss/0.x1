const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'us07$$killua',
    database: 'drone_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

const getNotifications = (req, res) => {
    const sql = 'SELECT * FROM flights WHERE issues != "None"';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

module.exports = {
    getNotifications
};
