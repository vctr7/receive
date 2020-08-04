require('dotenv').config();

import fs from 'fs';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import mysql from 'mysql2';
import mongoose from 'mongoose';
import api from './api';

const router = new Router();
const app = new Koa();

const {PORT, MONGO_URI} = process.env;
const port = PORT || 8795;

// MySQL 연동
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const connectionToMysql = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connectionToMysql.connect(console.log('Connected to MySQL'));

// MongoDB 연동
mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify:false, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(e=>{
        console.error(e);
});

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