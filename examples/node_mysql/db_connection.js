const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host:"127.0.0.1",
   user:"root",
   password:"",
   database:"nodejs"
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('Connected to the MySQL server.');
    } else {
        return console.error('error: ' + err.message);
    }
});
