const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Data", dataSchema);

//AbhijithJB
//BmcG2Pfd0uUlvPHv
