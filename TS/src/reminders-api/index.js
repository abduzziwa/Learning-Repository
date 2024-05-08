"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(8000, function () { return console.log('Server is running on port 8000++'); });
