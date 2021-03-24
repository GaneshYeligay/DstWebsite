const FinishingSchool = require("../model/tecFinishing");
const nodeMailer = require("nodemailer");
module.exports = {
  read: async (req, res) => {
    console.log("TechFinishingSchool:read");
    res.send("ok");
  },
  write: async (req, res) => {
    console.log("TechFinishingSchool:write", req.body);
    // console.log("adding add to finishing school", req.body);

    let web = await new FinishingSchool(req.body);
    web
      .save()
      .then(async web => {
        const ouput = `
         <body style="background-color:white;">
      <img src="http://newsite.digitalshark.in/static/media/logo_lg.0ee3712f.png"/>
      <h3 style="text-align:center;font-size:1rem;font-family:Roboto;">You have message from Student of ${req.body.college} for Finishing School</h3>
      <h4 style="text-align:center;font-size:2rem;font-family:Roboto;">Finishing School</h4>
      <table align="center" style="font-family:Roboto; font-size:1.4rem;border:none;padding:2%; box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);" >
       <tr><td>Name:</td> <td>${req.body.name}</td></tr>
      <tr><td>Email:</td><td>${req.body.email}</td></tr>
      <tr><td>Phone:</td><td>${req.body.phone}</td></tr>
      <tr><td>College:</td><td>${req.body.college}</td></tr>
      <tr><td>State:</td><td>${req.body.state}</td></tr>
      </table>
      </body>
      `;

        let transporter = await nodeMailer.createTransport({
          host: "mail.digitalshark.in",
          port: 587,
          secure: false,
          service: "Gmail",
          auth: {
            user: "info@digitalshark.in",
            pass: "dstinfo@123"
          },

          tls: {
            rejectUnauthorized: false
          }
        });

        //setup email data with unicode symbols
        let mailOptions = {
          from: "info@digitalshark.in",
          to: "internship@digitalshark.in",
          subject: "message related to Finishing School",
          text: "empty",
          html: ouput
        };
        await transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("eroor:", error);
            return res.json(400).send("adding finishingSchool data failed");
          }
          console.log("message sent:%s", info.messageId);
          console.log("Preview URL is:%s", nodeMailer.getTestMessageUrl(info));
          res
            .status(200)
            .json({ web: "data added for finishingSchool successfully" });
        });
      })
      .catch(err => {
        console.log("errr", err);
        res.json(400).send({ errror: "adding finishingSchool data failed" });
      });
    // res.send("ok");
  },
  update: async (req, res) => {
    console.log("TechFinishingSchool:update");
    res.send("ok");
  },
  delete: async (req, res) => {
    console.log("TechFinishingSchool:delete");
    res.send("ok");
  }
};
