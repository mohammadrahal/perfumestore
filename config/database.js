require('dotenv').config();
const mysql = require('mysql2');
const {DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD} = process.env

const connection = mysql.createPool({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
});

connection.getConnection((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected successfully');
});

module.exports = connection.promise();