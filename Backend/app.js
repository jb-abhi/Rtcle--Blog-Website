const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

const compression = require("compression");
app.use(compression());

const websiteData = require("./models/data");

var app = new express();
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://AbhijithJB:BmcG2Pfd0uUlvPHv@cluster0.c5szz.mongodb.net/BlogData?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.get("/readRTcle", function (req, res) {
  websiteData.find().then((datas) => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      data: datas,
    });
  });
});

app.listen(port, function () {
  console.log("listening to port 3000");
});
