require('dotenv').config();

import fs from 'fs';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import mysql from 'mysql2';
import mongoose from 'mongoose';
import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const router = new Router();
const app = new Koa();

const {PORT, MONGO_URI} = process.env;
const port = PORT || 8795;

// Connect to MySQL, PORT: 3306
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

// Connect to MongoDB
mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify:false, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(e=>{
        console.error(e);
});

app.use(bodyParser());

// Get item list from MySQL
router.get('/item/parfum', ctx => {
    try {
      return new Promise(function(resolve, reject) {
        connectionToMysql.query("SELECT * FROM parfum WHERE imgSrc IS NOT NULL LIMIT 50", function (error, results, fields){
              ctx.body = results;
              resolve();
          })
      });
    }
    catch (error) {
      console.log(error)
    }
})

router.use('/api', api.routes());
app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => console.log(`Listening on port ${port}`));