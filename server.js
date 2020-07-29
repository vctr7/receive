const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8795;

// const rjson = require('./parfum.json');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));                                                                  

app.get('/api/parfum', (req, res) => {
    connection.query(
        "SELECT * FROM parfum WHERE imgSrc IS NOT NULL LIMIT 200",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));