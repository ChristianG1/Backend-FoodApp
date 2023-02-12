const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'delivery_food',
});

db.connect(function(err) {
  if(err) throw err;
  console.log('DATABSE CONNECTED!');
})

module.exports = db;