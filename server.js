require('dotenv').config();

const fs = require('fs');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const router = new Router();
const app = new Koa();
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
import api from './api';


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

const {PORT, MONGO_URI} = process.env;
const port = PORT || 8795;

mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify:false, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(e=>{
        console.error(e);
});

connection.connect(console.log('Connected to MySQL'));

app.use(bodyParser());

//MySQL에서 상품목록 불러오기
router.get('/api/parfum', ctx => {
    try {
      return new Promise(function(resolve, reject) {
        connection.query("SELECT * FROM parfum WHERE imgSrc IS NOT NULL LIMIT 200", function (error, results, fields){
              ctx.body = results;
              resolve();
          })
      });
    }
    catch (error) {
      console.log(error)
    }
})



app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => console.log(`Listening on port ${port}`));