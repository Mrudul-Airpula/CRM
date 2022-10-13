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
  let otp = request.otp;
  let sql = "select id from crm.tblusers where txtOTP='" + otp + "';"
  let result = await new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result == "") {
        console.log("OTP Wrong")
      }
      else {
        resolve({body: JSON.stringify(result)})
        console.log("OTP Verified")
      }
    });
  });
  return result;
};
