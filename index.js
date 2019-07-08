var express = require("express");
var bodyParser = require("body-parser");
var shell = require('shelljs');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhook/deploy/iloveyou3000", function(req, res) {
    shell.exec('../deploy-speed-debug.sh');
    res.status(200).send("thanks");
});

var server = app.listen(8069, function () {
    console.log("app running on port.", server.address().port);
});