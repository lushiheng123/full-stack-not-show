const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let savedState = null;

app.get("/state/", (req, res) => {
  res.json(savedState);
  console.log(savedState);
});

app.post("/state", (req, res) => {
  savedState = { ...req.body };
  res.json("state saved");
  console.log(savedState);
});

app.listen(8080, () => console.log("Server listening on port 8080!"));
