'use strict';

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crm"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports.hello = async (event) => {
  let request = JSON.parse(event.body)
  let email = request.email;
  let password = request.password;
  let sql = "SELECT id, txtEmail FROM tblusers where txtEmail='" + email + "' and txtPassword='" + password + "'";
  let result = await new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result != "") {
        resolve({ body: JSON.stringify(result) });
        console.log("Result:" + JSON.stringify(result));
      }
      else if (password == "" || email == "") {
        reject("Both the fields are mandatory");
      } else {
        reject("Login details incorrect!");
      }
    });
  });
  return result;
};
