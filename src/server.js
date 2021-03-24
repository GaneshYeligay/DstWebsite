const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");
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
let storage = new GridFsStorage({
  url: url + dbName,
  file: (req, file) => {
    console.log("file MiMTYPE", file);
    //mimetype: 'image/png'
    //application/pdf
    if (file.mimetype === "application/pdf") {
      return {
        bucketName: "document", //Setting collection name, default name is fs
        filename: file.originalname //Setting file name to original name of file
      };
    }
    if (file.mimetype === "image/png") {
      return {
        bucketName: "test", //Setting collection name, default name is fs
        filename: file.originalname //Setting file name to original name of file
      };
    }
    if (file.mimetype === "image/jpg") {
      return {
        bucketName: "test", //Setting collection name, default name is fs
        filename: file.originalname //Setting file name to original name of file
      };
    }
    if (file.mimetype === "image/jpeg") {
      return {
        bucketName: "test", //Setting collection name, default name is fs
        filename: file.originalname //Setting file name to original name of file
      };
    }
  }
});
// let storageFile = new GridFsStorage({
//   url: url + dbName,
//   file: (req, file) => {
//     return {
//       bucketName: "careerFile", //Setting collection name, default name is fs
//       filename: file.originalname //Setting file name to original name of file
//     };
//   }
// });

let upload = null;
storage.on("connection", db => {
  //Setting up upload for a single file
  upload = multer({
    storage: storage
  }).single("image");
});

// let uploadFile = null;
// storage.on("connection", db => {
//   //Setting up upload for a single file
//   uploadFile = multer({
//     storage: storage
//   }).single("file");
// });

// let storageFile = new GridFsStorage({
//   url: url + dbName,
//   file: (req, file) => {
//     return {
//       bucketName: "careerFile",
//       filename: file.originalname
//     };
//   }
// });
// let upload = null;
// storageFile.on("connection", db => {
//   //Setting up upload for a single file
//   uploadFile = multer({
//     storageFile: storageFile
//   }).single("file");
// });

const secureRoutes = require("./secureRoutes/routes");

const app = express();

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.use(secureRoutes);

// Load Actions
let feedbackActions = require("./actions/feedback");
let tecFinishingSchool = require("./actions/tecFinishingSch");
let internship = require("./actions/internship");
let careerAction = require("./actions/career");
let contactAction = require("./actions/contact");

app.post("/feedback", (req, res) => {
  //console.log("Image->", req.file);
  console.log("[Feedback called]", req.body);
  upload(req, res, err => {
    if (err) {
      return res.json({
        title: "Uploaded Error",
        message: "File could not be uploaded",
        error: err
      });
    }
    /*     let newData = {
      status: "Uploaded",
      title: req.body.title,
      fileName: req.file
    };
    res.json(newData); */
    feedbackActions.write(req, res);
  });
});

app.get("/feedback", (req, res) => {
  console.log("for getting to testimonial page", req.query.flag);

  feedbackActions.read(req, res);
});
app.put("/feedback/:id", (req, res) => {
  feedbackActions.update(req, res);
  // res.send("newsiteTestimonialUpdate");
});
app.get("/feedbackgetById/:id", async (req, res) => {
  console.log("/getNewsiteTestimonialById:/id");

  feedbackActions.readById(req, res);
});
app.get("/download_profile_pic/:id", (req, res) => {
  //Accepting user input directly is very insecure and should
  //never be allowed in a production app. Sanitize the input.
  console.log("control in getting image url", req.params.id);
  let id = req.params.id;
  console.log("Id", id);
  //Connect to the MongoDB client
  MongoClient.connect(url + dbName, function(err, client) {
    if (err) {
      return res.status(404).json({
        title: "Uploaded Error",
        message: "MongoClient Connection error",
        error: err.errMsg
      });
    }
    const db = client.db(dbName);

    const collection = db.collection("test.files");
    const collectionChunks = db.collection("test.chunks");
    collection
      .find({ _id: MongoClient.ObjectID(id) })
      .toArray(function(err, docs) {
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
            .toArray(function(err, chunks) {
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
              res.json({
                imgurl: finalFile
              });
            });
        }
      });
  });
});

app.post("/finishingSchool", (req, res) => {
  console.log("finishingSchool", req.body);
  tecFinishingSchool.write(req, res);
});

app.post("/internship", (req, res) => {
  console.log("internship");
  internship.write(req, res);
});
app.post("/career", (req, res) => {
  console.log("[career called]", req.body);
  upload(req, res, err => {
    if (err) {
      return res.json({
        title: "Uploaded Error",
        message: "File could not be uploaded",
        error: err
      });
    }

    careerAction.write(req, res);
  });
});
app.post("/contact", (req, res) => {
  console.log("[contact called]", req.body);

  contactAction.write(req, res);
});
app.listen(3001, () => {
  console.log("server started");
});
