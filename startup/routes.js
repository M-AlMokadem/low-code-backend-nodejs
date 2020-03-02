var express = require("express");

var account = require("../controllers/account.contoller");
var user = require("../controllers/user.controller");
var application = require("../controllers/application.controller");




module.exports = function(app) {
  app.use("/api/users", user);
  app.use("/api/application", application);

};
