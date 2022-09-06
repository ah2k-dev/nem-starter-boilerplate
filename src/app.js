const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ApiError = require("./utils/ApiError");
const app = express();


app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Api for Survey App");
  });
  
  // send back a 404 error for any unknown api request
  app.use((req, res, next) => {
    next(new ApiError(404, "Not found"));
  });
  
  module.exports = app;