var express = require('express');
var app = express();
var mysql      = require('mysql');
//connection
var connection = mysql.createConnection({
  database : 'Project',
  host     : 'instance-1',
  user     : 'root',
  password : 'mysqlpassword',
  port : '3306',
  host : 'instance-1'
});
connection.connect(
    function(err) {
        if (err) throw err;}
);
module.exports = connection;
