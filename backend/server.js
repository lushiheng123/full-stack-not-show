require("dotenv").config();
const express = require("express");
const cors = require("cors");
const workoutsRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/workouts", workoutsRoutes);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
