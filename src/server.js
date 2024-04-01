const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;
const webRoutes = require('./routes/web')
const mysql = require('mysql2');


app.use('/', webRoutes);
// config template engine
configViewEngine(app);

// test connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hoidanit',
  port: 3307,
  password: '123456'
 });

 // simle query
 connection.query(
  'SELECT * FROM Users u;',
  function(err, results, fields) {
    console.log(">>>results = ",results); // results contains rows returned by server
    console.log(">>> fields ",fields); // fields contains extra meta data about results, if available
  })
 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});