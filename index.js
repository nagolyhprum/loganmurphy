var express = require("express");
var static = require("express-static");
var path = require("path");
var app = express();
app.use(static(path.join(__dirname, "dist"), {}))
app.listen(80, function() {
    console.log("listening on port 80");
})