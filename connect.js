const mysql = require("mysql");
const express = require("express");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: "employee_tracker"
});
    
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected" );
});
      


module.exports = connection;