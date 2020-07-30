const fs = require('fs');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const router = new Router();
const app = new Koa();

const port = process.env.PORT || 8795;

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

app.use(bodyParser());

router.get('/api/parfum', ctx => {
    try {
      return new Promise(function(resolve, reject) {
        connection.query("SELECT * FROM parfum WHERE imgSrc IS NOT NULL LIMIT 200",function (error, results, fields){
              ctx.body = results;
              resolve();
          })
      });
    } catch (error) {
      console.log(error)
    }
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => console.log(`Listening on port ${port}`));