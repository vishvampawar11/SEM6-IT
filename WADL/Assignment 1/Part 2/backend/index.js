const express = require("express");
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

let data = {
  firstName: "",
  lastName: "",
  email: "",
};

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.post("/", (req, res) => {
  data = req.body;
  res.status(200).json(data);
});

app.listen(3000);
