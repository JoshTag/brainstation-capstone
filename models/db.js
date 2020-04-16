require("dotenv").config();
const mysql = require('mysql')

// Created Connection to database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// Connect
connection.connect((err) => {
  if(err) {
    return console.log(err)
  }
  console.log("mySQL connected")
})

module.exports = connection;