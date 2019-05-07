var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000

require("./app/routing/htmlRoutes")(app)

app.listen(PORT, function () {
    console.log(`listening on PORT: ${PORT}`);
});