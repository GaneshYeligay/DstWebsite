// const mongodb = require("mongodb");
const Career = require("../model/career");
const nodeMailer = require("nodemailer");
const MongoClient = require("mongodb");
const url = "mongodb://localhost:27017/";
const dbName = "dstWebsite";
const mongoose = require("mongoose");
mongoose.connect(
  url + dbName,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) console.log("Mongoose conection failure", err);
  }
);

module.exports = {
  write: async (req, res) => {
    // console.log("req.body.otherFields", typeof req.body.otherFields);
    console.log("req.body.otherFields", typeof req.body.otherFields);
    let fileds = await JSON.parse(req.body.otherFields);
    console.log("req.body.otherFields", typeof req.body.otherFields);
    let { name, email, phone } = fileds;

    let userData = {
      name: name,
      email: email,
      phone: phone,
      file_id: req.file.id
    };
    console.log("yuserData", userData);
    console.log("data in console of of file", req.file);
    let newUser = await new Career(userData);
    let id = req.file.id;
    let docUrl = "";
    // var blob = new Blob([req.file], { type: 'application/pdf' });
    // console.log("data in console of of file", blob);
    let isCreated = await newUser
      .save();
    if (isCreated) {
      console.log("data in is created is", isCreated);
      // return res.json({
      //   data: "data  saved"
      // });
      MongoClient.connect(url + dbName, function (err, client) {
        if (err) {
          return res.status(404).json({
            title: "Uploaded Error",
            message: "MongoClient Connection error",
            error: err.errMsg
          });
        }
        const db = client.db(dbName);

        const collection = db.collection("document.files");
        const collectionChunks = db.collection("document.chunks");
        collection
          .find({ _id: MongoClient.ObjectID(id) })
          .toArray(async function (err, docs) {
            if (err) {
              return res.status(404).json({
                title: "File error",
                message: "Error finding file",
                error: err.errMsg
              });
            }
            if (!docs || docs.length === 0) {
              console.log("docs", docs);
              return res.status(404).json({
                title: "Download Error",
                message: "No file found"
              });
            } else {
              //Retrieving the chunks from the db
              collectionChunks
                .find({ files_id: docs[0]._id })
                .sort({ n: 1 })
                .toArray(async function (err, chunks) {
                  if (err) {
                    return res.status(404).json({
                      title: "Download Error",
                      message: "Error retrieving chunks",
                      error: err.errmsg
                    });
                  }
                  if (!chunks || chunks.length === 0) {
                    //No data found
                    return res.status(404).json({
                      title: "Download Error",
                      message: "No data found"
                    });
                  }
                  //Append Chunks
                  let fileData = [];
                  for (let i = 0; i < chunks.length; i++) {
                    //This is in Binary JSON or BSON format, which is stored
                    //in fileData array in base64 endocoded string format
                    fileData.push(chunks[i].data.toString("base64"));
                  }
                  //Display the chunks using the data URI format
                  let finalFile =
                    "data:" + docs[0].contentType + ";base64," + fileData.join("");
                  // console.log("data in finalfile", finalFile);
                  docUrl = finalFile;

                  if (finalFile) {
                    // var attachments = [{ filename: 'test.pdf', path: __dirname + '/pdf/test.pdf', contentType: 'application/pdf' }];
                    const internOutput = `
    <body style="background-color:white;">
    <img src="http://newsite.digitalshark.in/static/media/logo_lg.0ee3712f.png"/>
    <h3 style="text-align:center;font-size:1rem;font-family:Roboto;">You have a message from an Student of ${userData.name} for Career</h3>
    <h4 style="text-align:center;font-size:2rem;font-family:Roboto;">Career</h4>
    <table align="center" style="font-family:Roboto; font-size:1.4rem;border:none;padding:2%; box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);" >
     <tr><td>Name:</td> <td>${userData.name}</td></tr>
    <tr><td>Email:</td><td>${userData.email}</td></tr>
    <tr><td>Phone:</td><td>${userData.phone}</td></tr>
    
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

                      to: "careers@digitalshark.in",
                      subject: "message related to careers from website",
                      text: "empty",
                      html: internOutput,
                      attachments: [{
                        filename: 'career.pdf',
                        content: new Buffer(docUrl, 'base64'),
                        contentType: 'application/pdf'
                      }]
                    };
                    await transporter.sendMail(mailOptions, (error, info) => {
                      if (error) {
                        console.log("eroor:", error);
                        return res.json(400).send("adding career data failed");
                      }
                      console.log("message sent:%s", info.messageId);
                      console.log("Preview URL is:%s", nodeMailer.getTestMessageUrl(info));
                      res.json({
                        imgurl: docUrl
                      });

                    });
                  }
                  else {
                    console.log("data in getting doc url failed");
                  }
                });
            }
          });
      });
    }
    else {
      console.log("data not saved", isCreated);
      return res.json({
        data: "data  not saved"
      });
    }
  }
};
    //       console.log("control in getting doc url", id);


    //      

    //     if (docUrl) {
    //       // let data = await mongoose.Collection("document.files").findById({ _id: req.file.id });
    //       const internOutput = `
    // <body style="background-color:white;">
    // <img src="http://newsite.digitalshark.in/static/media/logo_lg.0ee3712f.png"/>
    // <h3 style="text-align:center;font-size:1rem;font-family:Roboto;">You have a message from an Student of ${userData.name} for Career</h3>
    // <h4 style="text-align:center;font-size:2rem;font-family:Roboto;">Internship Program</h4>
    // <table align="center" style="font-family:Roboto; font-size:1.4rem;border:none;padding:2%; box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);" >
    //  <tr><td>Name:</td> <td>${userData.name}</td></tr>
    // <tr><td>Email:</td><td>${userData.email}</td></tr>
    // <tr><td>Phone:</td><td>${userData.phone}</td></tr>
    // <a href=${docUrl} target="_blank">.

    // </table>
    // </body>
    // `;

    //       let transporter = await nodeMailer.createTransport({
    //         host: "smtp.gmail.com",
    //         port: 465,
    //         secure: true,
    //         service: "Gmail",
    //         auth: {
    //           user: "parbaj722@gmail.com",
    //           pass: "arbaj12345@"
    //         },
    //         tls: {
    //           rejectUnauthorized: false
    //         }
    //       });

    //       //setup email data with unicode symbols
    //       let mailOptions = {
    //         from: "parbaj722@gmail.com",
    //         // to: "nikhil.j@digitalshark.in",
    //         // to: "internship@digitalshark.in",
    //         to: "nikhiljayaram1018@gmail.com",
    //         subject: "message related to internship program",
    //         text: "empty",
    //         html: internOutput,
// attachments: attachments,
    //       };
    //       await transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //           console.log("eroor:", error);
    //           return res.json(400).send("adding career data failed");
    //         }
    //         console.log("message sent:%s", info.messageId);
    //         console.log("Preview URL is:%s", nodeMailer.getTestMessageUrl(info));
    //         res.status(200).json({ web: "data added for career successfully" });
    //       });
    //     }
    //     else {
    //       console.log("data in getting doc url failed");
    //     }

    //   }).catch(err => {
    //     res.json(400).send("adding career data failed");
    //   });









