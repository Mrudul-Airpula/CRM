const e = require('express');
const express = require('express')
const app = express()
const port = 4000
app.use(express.json());

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



app.post("/loginapi", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let sql = "SELECT id, txtFirstName FROM tblusers where txtFirstName='" + username + "' and txtPassword='" + password + "'";
  if (password == "" || username == "") {
    res.send("Please enter your details")
    return
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result:" + result);
    if (result != "") {
      res.send("Success" + JSON.stringify(result));
    }
    else {
      res.send("Login details incorrect");
    }
  });
});



app.post("/signup", (req, res) => {
  let firstname = req.body.firstname;
  let email = req.body.email;
  let password = req.body.password;
  let repassword = req.body.repassword;
  let sql = "SELECT txtEmail FROM tblusers where txtEmail='" + email + "';";
  let sql1 = "insert into tblusers(txtFirstName,txtEmail,txtPassword) values ('" + firstname + "','" + email + "','" + password + "');"
  if (firstname == "") {
    res.send("Firstname is Mandatory")
    return
  }
  if (email == "") {
    res.send("Email is Mandatory")
    return
  }
  if (password == "") {
    res.send("Password is Mandatory")
    return
  }
  if (repassword == "") {
    res.send("RePassword is Mandatory")
    return
  }
  if (password != repassword) {
    res.send("Passwords Do not Match")
    return
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result:" + result);
    if (result != "") {
      res.send("User already exists");
    }
    else {
      con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("1 Record Inserted");
        res.send("1 Record Updated");
      })
    }
  });
});



app.post("/verifyotp", (req, res) => {
  let otp = req.body.otp;
  let sql = "select id from crm.tblusers where txtOTP='" + otp + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    if (result == "") {
      res.send(result)
    }
    else {
      res.send("OTP Verified");
    }
  });
});

app.post("/resendotp", (req, res) => {
  let otp = req.body.otp;
  let sql = "select id from crm.tblusers where txtOTP='" + otp + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    if (result == "") {
      res.send(result)
    }
    else {
      res.send("OTP Verified");
    }
  });
});


app.post("/insertsingleprofile", (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let dob = req.body.dob;
  let address = req.body.address;
  let password = req.body.password;
  let repassword = req.body.repassword;
  let sql = "select txtEmail from tblusers where txtEmail =  '" + email + "';"
  let sql1 = "insert into tblusers(txtFirstName,txtLastName,txtEmail,txtdob,txtAddress,txtPassword) values ('" + firstname + "','" + lastname + "','" + email + "','" + dob + "','" + address + "','" + password + "');"
  if (firstname == "") {
    res.send("Firstname is empty")
    return
  }
  if (lastname == "") {
    res.send("Lastname is empty")
    return
  }
  if (email == "") {
    res.send("Email is empty")
    return
  }
  if (dob == "") {
    res.send("Date of birth is empty")
    return
  }
  if (address == "") {
    res.send("Address is empty")
    return
  }
  if (password == "") {
    res.send("Password is empty")
    return
  }
  if (repassword == "") {
    res.send("Repassword is empty")
    return
  }
  if (password != repassword) {
    res.send("Password's do not match")
    return
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result = " + JSON.stringify(result))
    if (result != "") {
      res.send("Profile already exists!")
      return
    }
    else {
      con.query(sql1, function (err, result) {
        if (err) throw err;
        res.send("Profile Inserted!")
        console.log("New user profile details inserted")
        return
      });
    }
  });
});



app.post("/getsingleprofile", (req, res) => {
  let id = req.body.id;
  let sql = "select txtFirstName,txtLastName,txtEmail,txtdob,txtAddress from tblusers where id = '" + id + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Profile information displayed")
    if (result != "") {
      res.send("Profile Information " + JSON.stringify(result))
      return
    }
    else {
      res.send("Profile does not exist")
      return
    }
  });
});


app.post("/updatesingleprofile", (req, res) => {
  let id = req.body.id;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let dob = req.body.dob;
  let address = req.body.address;
  let sql = "select id from tblusers where id = " + id + " ;"
  let sql1 = "update crm.tblusers set txtFirstName = '" + firstname + "',txtLastName = '" + lastname + "',txtEmail = '" + email + "',txtdob ='" + dob + "',txtAddress = '" + address + "' where id = " + id + " ;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    if (result != "") {
      con.query(sql1, function (err, result1) {
        console.log("1 Record Updated");
        res.send("Profile Updated");
      })
    }
    else {
      res.send("Profile does not exist")
    }
  })
})


app.post("/GetSingleCampaign", (req, res) => {
  let txtCampaignName = req.body.txtCampaignName;
  let sqlSinglecampaign =
    "SELECT txtCampaignName CampaignName,dtStartdate Startdate,dtEnddate Enddate , count(txtCampaignName) NoOfOwners FROM tblcampaign join tblusers where txtCampaignName = '" + txtCampaignName + "' group by txtCampaignName;";
  con.query(sqlSinglecampaign, function (err, result) {
    if (err) throw err;
    console.log("Selected Campaign Details");
    if (result != "") {
      res.send("Campaign details for selected Campaign" + JSON.stringify(result))
      return
    } else {
      res.send("Campaign Does Not Exist")
      return
    }
  });

});



app.post("/InsertSingleCampaign", (req, res) => {
  let CampaignName = req.body.CampaignName;
  let ParentCampaignName = req.body.ParentCampaignName;
  let Status = req.body.Status;
  let Startdate = req.body.Startdate;
  let Enddate = req.body.Enddate;
  let Responses = req.body.Responses;
  let CampaignOwner = req.body.CampaignOwner;
  let sqlinsert =
    "insert into tblcampaign (txtCampaignName,ParentCampaignName,Status,dtStartdate,dtEnddate,Responses,refCampaignOwner) VALUES('" +
    CampaignName +
    "','" +
    ParentCampaignName +
    "','" +
    Status +
    "','" +
    Startdate +
    "','" +
    Enddate +
    "','" +
    Responses +
    "','" +
    CampaignOwner +
    "');";
  if (CampaignName == "") {
    res.send("CampaignName is mandatory");
    return res;
  }
  if (ParentCampaignName == "") {
    res.send("ParentCampaignName is mandatory");
    return res;
  }
  if (Startdate == "") {
    res.send("Startdate is mandatory");
    return res;
  }
  if (Enddate == "") {
    res.send("Enddate is mandatory");
    return res;
  }
  if (CampaignOwner == "") {
    res.send("CampaignOwner name is mandatory");
    return res;
  }

  con.query(sqlinsert, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send("1 record inserted");
  });
});



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post("/addition", (req, res) => {
  let a = req.body.numone;
  let b = req.body.numtwo;
  let sum = a + b;
  res.send("Result = " + sum);
})

app.post("/subtraction", (req, res) => {
  let a = req.body.numone;
  let b = req.body.numtwo;
  let diff = a - b;
  res.send("Result = " + diff);
})

app.post("/multiply", (req, res) => {
  let a = req.body.numone;
  let b = req.body.numtwo;
  let mul = a * b;
  res.send("Result = " + mul);
})

app.post("/divide", (req, res) => {
  let a = req.body.numone;
  let b = req.body.numtwo;
  let div = a / b;
  res.send("Result = " + div);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post("/userlistwithfilter", (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let dob = req.body.dob;
  let address = req.body.address;
  let sql1 = "select txtFirstName as FirstName from tblusers;"
  let sql2 = "select txtLastName as Lastname from tblusers;"
  let sql3 = "select txtEmail as Email from tblusers;"
  let sql4 = "select txtdob as DOB from tblusers;"
  let sql5 = "select txtAddress as Address from tblusers;"
  let sql6 = "select txtFirstName,txtLastName from tblusers;"
  let sql7 = "select txtFirstName,txtEmail from tblusers;"
  let sql8 = "select txtFirstName,dob from tblusers;"
  let sql9 = "select txtFirstName,txtAddress from tblusers;"
  let sql10 = "select txtLastName,txtEmail from tblusers;"
  let sql11 = "select txtLastName,txtdob from tblusers;"
  let sql12 = "select txtLastName,txtAddress from tblusers;"
  let sql13 = "select txtdob,txtAddress from tblusers;"
  let sql14 = "select txtFirstName,txtLastName,txtEmail from tblusers;"
  let sql15 = "select txtFirstName,txtLastName,txtdob from tblusers;"
  let sql16 = "select txtFirstName,txtLastName,txtAddress from tblusers;"
  let sql17 = "select txtLastName,txtEmail,txtdob from tblusers;"
  let sql18 = "select txtLastName,txtEmail,txtAddress from tblusers;"
  let sql19 = "select txtLastName,txtdob,txtAddress from tblusers;"
  let sql20 = "select txtEmail,txtdob,txtAddress from tblusers;"
  let sql21 = "select txtFirstName,txtLastName,txtEmail,txtdob from tblusers;"
  let sql22 = "select txtFirstName,txtLastName,txtEmail,txtAddress from tblusers;"
  let sql23 = "select txtFirstName,txtLastName,txtAddress,txtdob from tblusers;"
  let sql24 = "select txtFirstName,txtLastName,txtEmail,txtdob,txtAddress from tblusers;"
  if (firstname == "" & lastname == "" & email == "" & dob == "" & address == "") {
    con.query(sql24, function (err, result24) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result24))
      }
    })
  }
  else if (firstname == "" & lastname == "" & dob == "" & address == "") {
    con.query(sql23, function (err, result23) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result23))
      }
    })
  }
  else if (firstname == "" & lastname == "" & email == "" & address == "") {
    con.query(sql22, function (err, result22) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result22))
      }
    })
  }
  else if (firstname == "" & lastname == "" & email == "" & dob == "") {
    con.query(sql21, function (err, result21) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result21))
      }
    })
  }
  else if (email == "" & dob == "" & address == "") {
    con.query(sql20, function (err, result20) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result20))
      }
    })
  }
  else if (lastname == "" & dob == "" & address == "") {
    con.query(sql19, function (err, result19) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result19))
      }
    })
  }
  else if (lastname == "" & email == "" & address == "") {
    con.query(sql18, function (err, result18) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result18))
      }
    })
  }
  else if (lastname == "" & email == "" & dob == "") {
    con.query(sql17, function (err, result17) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result17))
      }
    })
  }
  else if (firstname == "" & lastname == "" & address == "") {
    con.query(sql16, function (err, result16) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result16))
      }
    })
  }
  else if (firstname == "" & lastname == "" & dob == "") {
    con.query(sql15, function (err, result15) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result15))
      }
    })
  }
  else if (firstname == "" & lastname == "" & email == "") {
    con.query(sql14, function (err, result14) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result14))
      }
    })
  }
  else if (dob == "" & address == "") {
    con.query(sql13, function (err, result13) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result13))
      }
    })
  }
  else if (lastname == "" & address == "") {
    con.query(sql12, function (err, result12) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result12))
      }
    })
  }
  else if (lastname == "" & dob == "") {
    con.query(sql11, function (err, result11) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result11))
      }
    })
  }
  else if (lastname == "" & email == "") {
    con.query(sql10, function (err, result10) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result10))
      }
    })
  }
  else if (firstname == "" & address == "") {
    con.query(sql9, function (err, result9) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result9))
      }
    })
  }
  else if (firstname == "" & dob == "") {
    con.query(sql8, function (err, result8) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result8))
      }
    })
  }
  else if (firstname == "" & email == "") {
    con.query(sql7, function (err, result7) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result7))
      }
    })
  }
  else if (firstname == "" & lastname == "") {
    con.query(sql6, function (err, result6) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result6))
      }
    })
  }
  else if (address == "") {
    con.query(sql5, function (err, result5) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result5))
      }
    })
  }
  else if (dob == "") {
    con.query(sql4, function (err, result4) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result4))
      }
    })
  }
  else if (email == "") {
    con.query(sql3, function (err, result3) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result3))
      }
    })
  }
  else if (lastname == "") {
    con.query(sql2, function (err, result2) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result2))
      }
    })
  }
  else if (firstname == "") {
    con.query(sql1, function (err, result1) {
      if (err) throw err;
      else {
        res.send(JSON.stringify(result1))
      }
    })
  }
  else {
    res.send("Please select valid filters!")
  }
});