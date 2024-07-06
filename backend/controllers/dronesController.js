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

const getDrones = (req, res) => {
    const sql = 'SELECT * FROM drones';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

const addDrone = (req, res) => {
    const { model, serial_number, specifications } = req.body;
    const sql = 'INSERT INTO drones (model, serial_number, specifications) VALUES (?, ?, ?)';
    db.query(sql, [model, serial_number, specifications], (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId });
    });
};

module.exports = {
    getDrones,
    addDrone
};
