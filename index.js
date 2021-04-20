var express = require("express");
var static = require("express-static");
var path = require("path");
var app = express();
var port = process.env.PORT || 80;
app.use(static(path.join(__dirname, "dist"), {}))
app.listen(port, function() {
    console.log("listening on port", port);
})