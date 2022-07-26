const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/posts");

require("dotenv").config();

const PORT = process.env.PORT || 9000;
const app = express();

app.use((req, _, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.static("src/images"));

app.use("/posts", router);

const uri = process.env.DB_URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected MongoDB");
  app.listen(PORT, () => console.log("Listening on Port:", PORT));
});
