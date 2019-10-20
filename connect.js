var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chronos",
  database: "BMS"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
