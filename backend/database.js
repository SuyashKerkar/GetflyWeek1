const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',    
    password:'123456',
    database:'company_database'
}); 

module.exports = connection;