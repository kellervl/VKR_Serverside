var express = require('express');
var app = express();
var mysql      = require('mysql');
//connection
var connection = mysql.createConnection({
  database : 'Project',
  host     : '127.0.0.1',
  user     : 'root',
  password : 'mysqlpassword',
  port : '3306',
  host : '127.0.0.1'
});
connection.connect(
    function(err) {
        if (err) throw err;}
);
module.exports = connection;
