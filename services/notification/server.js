const express = require('express');
const mysql = require('mysql');

const app = express();

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

app.get('/notify', (req, res) => {
    const sql = 'SELECT * FROM flights WHERE issues != "None"';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Notification service running on port ${PORT}`));
