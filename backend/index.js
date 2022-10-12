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
  let email = req.body.email;
  let password = req.body.password;
  let sql = "SELECT id, txtEmail FROM tblusers where txtEmail='" + email + "' and txtPassword='" + password + "'";
  if (password == "" || email == "") {
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




app.post('/getuserlistwithfilter', (req, res) => {
  let filtertype = req.body.filtertype;
  let filtervalue = req.body.filtervalue;
  let sql = "select * from crm.tblusers where " + filtertype + " = '" + filtervalue + "'"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result)
    res.send(result)
  })
})




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




app.post('/campaignwiseprospectcount', (req, res) => {
  let sql = "SELECT B.refCampaignId, A.txtCampaignName, D.txtConversionType, count(txtCampaignName) as count FROM tblcampaign A  JOIN tblleadcampaignmap B ON A.id = B.refCampaignId  JOIN  tblactivity C ON B.id = C.refMapid    JOIN  tblconversiontype D ON C.refConversionStatus = D.id  where D.txtConversionType = 'Prospect'  group by A.txtCampaignName;"
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
})




app.post('/leadsfunnel', (req, res) => {
  let sql = "select count(id) leadscount from crm.tblleads union all SELECT count(d.txtConversionType) as NoOfLeads FROM crm.tblleads a JOIN crm.tblleadcampaignmap b ON a.id = b.refLeadId JOIN crm.tblactivity c ON b.id = c.refMapid JOIN crm.tblconversiontype d ON c.refConversionStatus = d.id where d.txtConversionType = 'Nurturing ' or d.txtConversionType = 'Prospect ' group by d.txtConversionType;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result)
    res.send(result)
  })
})




app.post('/ManagerwiseProspectCount', (req, res) => {
  let sql = "SELECT B.txtFirstName, A.txtJobTitle, E.txtConversionType, COUNT(E.txtConversionType) FROM tbljobtitle A JOIN tblusers B ON A.id = B.refJobTitle JOIN tblleadcampaignmap C ON C.refCreatedBy = B.id JOIN tblactivity D ON D.refMapid = C.id JOIN tblconversiontype E ON D.refConversionStatus = E.id WHERE A.txtJobTitle = '% Manager' AND E.txtConversionType = 'Prospect';"
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
})




app.post('/prospectGrowth', (req, res) => {
  let sql = "SELECT d.txtConversionType, COUNT(d.txtConversionType) as count FROM crm.tblleads a JOIN crm.tblleadcampaignmap b ON a.id = b.refLeadId JOIN crm.tblactivity c ON b.id = c.refMapid JOIN crm.tblconversiontype d ON c.refConversionStatus = d.id WHERE d.txtConversionType = 'Prospect';"
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
})




app.post('/SalespersonwiseSuccessRate', (req, res) => {
  let sql = "SELECT tm.refLeadId,tl.txtFirstName,tc.txtConversionType,COUNT(txtFirstName) count FROM tblleads tl JOIN tblleadcampaignmap tm ON tl.id = tm.refLeadId JOIN tblactivity ta ON tm.id = ta.refMapid JOIN tblconversiontype tc ON tc.id = ta.refConversionStatus WHERE tc.txtConversionType = 'Prospect' GROUP BY (tl.txtFirstName);;"
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
})




app.post('/getleadslistwithfilter', (req, res)=>{
  let filtertype = req.body.filtertype;
  let filtervalue = req.body.filtervalue;
  let sql = "select * from crm.tblleads where "+filtertype+" = '"+filtervalue+"'"
  con.query(sql, function(err, result){
    if(err) throw err;
    console.log(result)
    res,send(result)
  })
})




app.post("/GetSingleLead", (req, res) => {
  let LeadName = req.body.LeadName;
  let sqlSingleLead =
    "SELECT tl.txtFirstName FirstName,tl.txtLastName LastName,tl.status1 Status,tl.dtCreatedOn CreatedOn,tl.txtEmail Email,tl.Responses,tu.txtFirstName Owner FROM tblleads tl JOIN tblusers tu on tl.refCreatedBy=tu.id where tl.txtFirstName = '" + LeadName + "';";
  con.query(sqlSingleLead, function (err, result) {
    if (err) throw err;
    console.log("Selected Lead Details");
    if (result != "") {
      res.send(
        "Lead details for selected Lead" + JSON.stringify(result)
      );
      return;
    } else {
      res.send("LeadName Does Not Exist");
      return;
    }
  });
});




app.post("/InsertSingleLead", (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let Status = req.body.Status;
  let CreatedOn = req.body.CreatedOn;
  let Email = req.body.Email;
  let Responses = req.body.Responses;
  let Owner = req.body.Owner;
  let sqlinsert =
    "insert into tblleads (txtFirstName,txtLastName,status1,dtCreatedOn,txtEmail,Responses,refCreatedby) VALUES('" +
    firstname +
    "','" +
    lastname +
    "','" +
    Status +
    "','" +
    CreatedOn +
    "','" +
    Email +
    "','" +
    Responses +
    "','" +
    Owner +
    "');";
  if (firstname == "") {
    res.send("firstname is mandatory");
    return res;
  }
  if (lastname == "") {
    res.send("lastname is mandatory");
    return res;
  }
  if (CreatedOn == "") {
    res.send("Startdate is mandatory");
    return res;
  }
  if (Email == "") {
    res.send("Enddate is mandatory");
    return res;
  }
  if (Owner == "") {
    res.send("CampaignOwner name is mandatory");
    return res;
  }

  con.query(sqlinsert, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send("1 record inserted");
  });
});




app.post("/UpdateSingleLead", (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let Status = req.body.Status;
  let CreatedOn = req.body.CreatedOn;
  let Email = req.body.Email;
  let Responses = req.body.Responses;
  let Owner = req.body.Owner;
  let id = req.body.id;
  let sqlupdate =
    "UPDATE tblleads SET  txtFirstName ='" +
    firstname +
    "',txtLastName = '" +
    lastname +
    "',Status1 = '" +
    Status +
    "',dtCreatedOn= '" +
    CreatedOn +
    "',txtEmail= '" +
    Email +
    "',Responses= '" +
    Responses +
    "',refCreatedby='" +
    Owner +
    "'WHERE id = '" +
    id +
    "';";
  if (firstname == "") {
    res.send("firstname is mandatory");
    return res;
  }
  if (lastname == "") {
    res.send("lastname is mandatory");
    return res;
  }
  if (CreatedOn == "") {
    res.send("Startdate is mandatory");
    return res;
  }
  if (Email == "") {
    res.send("Enddate is mandatory");
    return res;
  }
  if (Owner == "") {
    res.send("CampaignOwner name is mandatory");
    return res;
  }

  con.query(sqlupdate, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
    res.send("1 record updated");
  });
});




app.post("/GetCampaignListWithFilter", (req, res) => {
  let campaignname = req.body.campaignname;
  let name = req.body.name;

  let sql = "select * from tblcampaign where txtCampaignName= '" + campaignname + "';";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);

    if (campaignname != "" || name != "") {
      if (campaignname != "" & name == "") {
        if (result != "") {
          res.send("success" + JSON.stringify(result));
        }
        else {
          res.send("error");
        }
      }
      if (campaignname == "" & name != "") {
        let sql = "select * from tblcampaign where txtCampaignName like '" + name + "';";
        con.query(sql, function (err, result1) {
          if (err) throw err;
          console.log("Result: " + result1);
          if (result1 != "") {
            res.send("success" + JSON.stringify(result1));
          }
          else {
            res.send("error");
          }
        });

      }
      if (campaignname != "" & name != "") {
        res.send("please use Campaignname or name");
      }


    }
    else {
      res.send("campaignname or name is mandatory ");
    }

  });
});




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
  let status = req.body.status;
  let Startdate = req.body.Startdate;
  let Enddate = req.body.Enddate;
  let Responses = req.body.Responses;
  let CampaignOwner = req.body.CampaignOwner;
  let sqlinsert =
    "insert into tblcampaign (txtCampaignName,ParentCampaignName,status1,dtStartdate,dtEnddate,Responses,refCampaignOwner) VALUES('" +
    CampaignName +
    "','" +
    ParentCampaignName +
    "','" +
    status +
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




  app.post("/UpdateSingleCampaign", (req, res) => {
    let CampaignName = req.body.CampaignName;
    let ParentCampaignName = req.body.ParentCampaignName;
    let status = req.body.status;
    let Startdate = req.body.Startdate;
    let Enddate = req.body.Enddate;
    let Responses = req.body.Responses;
    let CampaignOwner = req.body.CampaignOwner;
    let id = req.body.id;
    let sqlupdate =
      "UPDATE tblcampaign SET  txtCampaignName ='" +
      CampaignName +
      "',ParentCampaignName = '" +
      ParentCampaignName +
      "',status1 = '" +
      status +
      "',dtStartdate= '" +
      Startdate +
      "',dtEnddate= '" +
      Enddate +
      "',Responses= '" +
      Responses +
      "',refCampaignOwner='" +
      CampaignOwner +
      "'WHERE id = '" +
      id +
      "';";
    if (CampaignName == "") {
      res.send("Enter CampaignName");
      return res;
    }
    if (ParentCampaignName == "") {
      res.send("Enter ParentCampaignName");
      return res;
    }
    if (Startdate == "") {
      res.send("Enter Startdate");
      return res;
    }
    if (Enddate == "") {
      res.send("Enter Enddate");
      return res;
    }
    if (CampaignOwner == "") {
      res.send("Enter CampaignOwner");
      return res;
    }
    con.query(sqlupdate, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");
      res.send("1 record updated");
    });
  });

  con.query(sqlinsert, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send("1 record inserted");
  });
});




app.post("/getProspectlistwithfilter", (req, res) => {

  let value_filter=req.body.value_filter;
  let filtername=req.body.filtername;

  con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      
      let sql = "select A.refConversionStatus,B.txtconversiontype from tblactivity A join tblconversiontype B on A.refConversionStatus=B.id where "+value_filter+"='"+filtername+"' or "+value_filter+" like '"+filtername+"';";
  con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result" + result);
      res.send(result)
  })
})
});




app.post("/getsingletask", (req, res) => {
  let id = req.body.id;
  let sql = "select B.txtActivitytype Task,C.txtConversionType Status from tblactivity A join tblactivitytype B on A.refActivitytype=B.id join tblconversiontype C on A.refConversionStatus=C.id where A.id = '" + id + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result !== '') {
      res.send("Task Exists" + JSON.stringify(result))
      return
    }
    else {
      res.send(" Task does not Exist")
      return
    }
  })
})




































































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





