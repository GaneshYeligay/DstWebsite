const Contact = require("../model/contact");
const nodeMailer = require("nodemailer");
module.exports = {
  write: async (req, res) => {
    console.log("contact:write");
    console.log("adding add to contact school", req.body);
    console.log("adding data request for contact add", req.body);
    let web = new Contact(req.body);
    web
      /* .save()
            .then(web => {
              res.status(200).json({ web: "data added for contact successfully" });
              console.log("data added contact successfully");
            }) */
      .save()
      .then(async web => {
        const ouput = `
      <body style="background-color:white;">
      <img src="http://newsite.digitalshark.in/static/media/logo_lg.0ee3712f.png"/>
      <h3 style="text-align:center;font-size:1rem;font-family:Roboto;">You have a message from website - contact by :${req.body.name}</h3>
      <h4 style="text-align:center;font-size:2rem;font-family:Roboto;">Contact</h4>
      <table align="center" style="font-family:Roboto; font-size:1.4rem;border:none;padding:2%; box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);" >
       <tr><td>Name:</td><td>${req.body.name}</td></tr>
      <tr><td>Email:</td><td>${req.body.email}</td></tr>
      <tr><td>Phone:</td><td>${req.body.phone}</td></tr>
  
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
          to: "info@digitalshark.in",
          subject: "message from website - contact page",
          text: "empty",
          html: ouput
        };
        await transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("eroor:", error);
            return res.json(400).send("adding contact data failed");
          }
          console.log("message sent:%s", info.messageId);
          console.log("Preview URL is:%s", nodeMailer.getTestMessageUrl(info));
          res.status(200).json({ web: "data added for contact successfully" });
        });
      })
      .catch(err => {
        res.json(400).send("adding data failed");
      });
  }
};
