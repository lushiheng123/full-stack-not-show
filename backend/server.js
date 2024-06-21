const express = require("express");
const getDataConnection = require("./api/getData");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3002;
const multer = require("multer");

app.use(cors());
// app.use(express.json());
app.use(express.static("public"));
app.get("/data", (req, res) => {
  const query = "SELECT * FROM pictures";
  getDataConnection.query(query, (err, results, fields) => {
    if (err) {
      console.error("Error connecting to database:", err);
      res.status(500).json({ error: "Error querying database" });
      return;
    }
    res.json(results);
    console.log(`You are using Mysql database ${process.env.MYSQL_DATABASE}`);
  });
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
app.post("/upload", upload.single("image"), (req, res) => {
  // const image = Date() + req.file.filename;
  const image = Date.now() + req.file.originalname;

  //   const sql = "INSERT INTO pictures (image) VALUES (?)";
  const sql = "INSERT INTO pictures SET ?";
  getDataConnection.query(
    sql,
    { name: req.file.originalname, image },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ Status: "success" });
      }
    }
  );
});
app.listen(port, () => {
  console.log("server is running");
});
