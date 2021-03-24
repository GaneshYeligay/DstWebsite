const mongodb = require("mongodb");
const User = require("../model/user");
const nodeMailer = require("nodemailer");
module.exports = {
  read: async (req, res) => {
    console.log("feedback:read");
    if (req.query.flag == 0) {
      console.log("for newsite check in feedback");
      User.find({})
        .where({ active: true, site: true })
        .then(responce => {
          console.log("data getting in newsite", responce);

          return res.json(responce);
        })
        .catch(err => {
          console.log(" error -- ", err);
        });
    } else {
      console.log("for academic check in feedback");

      User.find({})
        .where({ active: true, site: false })
        .then(responce => {
          console.log("data getting in newsite", responce);

          return res.json(responce);
        })
        .catch(err => {
          console.log(" error -- ", err);
        });
    }
  },
  readById: async (req, res) => {
    console.log("to get data by id ", req.params.id);
    // let userId = req.params.id;
    var ObjectID = require("mongodb").ObjectID;
    let userId = new ObjectID(req.params.id);
    console.log("to get data by id ", userId);
    let userData = await User.findOne({ _id: userId });
    if (userData) {
      console.log("user data found after fetching is", userData);
      return res.send(userData);
    } else {
      console.log("user data not found after fetching is");
      return res.send();
    }
  },
  write: async (req, res) => {
    // console.log("Write", Object.keys(req.body));

    console.log("req.body.otherFields", typeof req.body.otherFields);
    let fileds = await JSON.parse(req.body.otherFields);

    let { name, email, phone, details, message, site, active } = fileds;

    let userData = {
      name: name,
      email: email,
      phone: phone,
      details: details,
      message: message,
      image_id: req.file.id,
      active: active,
      site: site
    };
    let newUser = await new User(userData);
    await newUser
      .save()
      .then(async web => {
        const ouput = `
       <body style="background-color:white;">
      <img src="http://newsite.digitalshark.in/static/media/logo_lg.0ee3712f.png"/>
      <h3 style="text-align:center;font-size:1rem;font-family:Roboto;">You have message related to Testimonial from ${userData.name}</h3>
      <h4 style="text-align:center;font-size:2rem;font-family:Roboto;">Testimonial</h4>
      <table align="center" style="font-family:Roboto; font-size:1.4rem;border:none;padding:2%; box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);" >
       <tr><td>Name:</td> <td>${userData.name}</td></tr>
      <tr><td>Email:</td><td>${userData.email}</td></tr>
      <tr><td>Message:</td><td>${userData.message}</td></tr>
   
      </table>
      <p style="font-family:Roboto; font-size:1.4rem;">Click <a href="http://newsite.digitalshark.in/feedback/${newUser._id}">here</a> to update form </p>
      </body>
      
      `;

        let smtpTransport = await nodeMailer.createTransport({
          host: "mail.digitalshark.in",
          port: 587,
          secure: false,

          auth: {
            user: "info@digitalshark.in",
            pass: "dstinfo@123"
          },

          tls: {
            rejectUnauthorized: false
          }
        });

        //setup email data with unicode symbols
        let mailOptions = await {
          from: "info@digitalshark.in",
          to: "info@digitalshark.in",
          // to: "nikhil.j@digitalshark.in",
         // to: "ganesh.yeligay@digitalshark.in",
          subject: " message related to testimonial",
          text: "empty",
          html: ouput
        };
        await smtpTransport.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("eroor:", error);
            return res.json(400).send("adding newsite testimonial data failed");
          }
          console.log("message sent:%s", info.messageId);
          console.log("Preview URL is:%s", nodeMailer.getTestMessageUrl(info));
          res
            .status(200)
            .json({ check: "data added for testimonial successfully" });
        });
      })
      .catch(err => {
        return res.json(400).send("adding data failed");
      });
    // res.json(isCreated);
  },
  update: async (req, res) => {
    console.log("feedback:update");
    console.log("adding comming for newsite testimonial update", req.params.id);
    var ObjectID = require("mongodb").ObjectID;
    let userId = new ObjectID(req.params.id);
    console.log("to get data by id ", userId);
    let userData = await User.findOne({ _id: userId });
    console.log("data in getting dataD", userData);

    if (userData) {
      console.log("data in getting dataD", userData);
      let updatedId = await User.updateOne(
        { _id: userId },
        { $set: { active: true } },
        function (err, data) {
          if (err) {
            console.log("user data not updated", err);
            return res.send({ message: false, err: err });
          } else {
            console.log("data in updatedId", data);
            return res.send({ message: true, data: data });
          }
        }
      );
    } else {
      console.log("user data not found");
      return res.send("user data not found");
    }
  },
  delete: async (req, res) => {
    console.log("feedback:delete");
    res.send("ok");
  }
};
