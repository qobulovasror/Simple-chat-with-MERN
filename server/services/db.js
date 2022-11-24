const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect("mongodb://localhost/chat").then(() => {
    console.log("MongoDB -> connection successful");
  }).catch(ex=>console.error(ex));
};
