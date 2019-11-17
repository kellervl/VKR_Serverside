var express = require('express');
var app = express();
var mysql      = require('mysql');
//connection
var connection = mysql.createConnection({
  database : 'Project',
  host     : '46.29.209.239',
  user     : 'root',
  password : 'mysqlpassword',
  port : '3306'
});
connection.connect(
    function(err) {
        if (err) throw err;}
);
module.exports = connection;
