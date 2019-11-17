var express = require('express');
var app = express();
var mysql      = require('mysql');
//connection
var connection = mysql.createConnection({
  database : 'Project',
  host     : 'localhost',
  user     : 'root',
  password : 'mysqlpassword',
  port : '3306',
  host : 'localhost'
});
connection.connect(
    function(err) {
        if (err) throw err;}
);
module.exports = connection;
