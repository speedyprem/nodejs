var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host:"127.0.0.1",
   user:"root",
   password:"",
   database:"nodejs"
});

var sql = "SELECT * FROM fm_quizs LIMIT 2";
mysqlConnection.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    mysqlConnection.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
