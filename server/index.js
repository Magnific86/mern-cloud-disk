const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const authRouter = require("./routes/authRouter.js");
const fileRouter = require("./routes/fileRouter.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);
app.use(express.urlencoded());
mongoose.set("strictQuery", false);

const PORT = config.get("localServerPort");
const MONGODB_URL = config.get("mongodbUrl");
const startApp = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    app.listen(PORT, () => {
      console.log("server started on port", PORT);
    });
  } catch (error) {}
};

startApp();
