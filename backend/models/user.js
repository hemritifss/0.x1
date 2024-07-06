const mysql = require('mysql');
const bcrypt = require('bcryptjs');
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

const createUser = (username, password, callback) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(sql, [username, hash], callback);
    });
};

const findUserByUsername = (username, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], callback);
};

module.exports = {
    createUser,
    findUserByUsername
};
