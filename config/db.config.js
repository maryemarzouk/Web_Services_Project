const mysql = require('mysql');

//create mysql connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});
dbConn.connect(function(error){
    if (error) throw error;
    console.log('database connected successfully!');
});

module.exports = dbConn;
