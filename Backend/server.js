var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var PORT = process.env.PORT || 4000;
var routes = require("./routes/index");

var app = express();
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(passport.initialize());
require("./config/passport");
app.use("/", routes);

app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:4000/ in your browser.",
    PORT
  );
});
