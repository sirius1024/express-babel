var express = require('express');
var app = express();
var fs = require('fs');
var Promise = require('bluebird');

app.get('/', function (req, res) {
    testAsync();
    res.send('Hello World!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});



async function testAsync(name) {
    console.log("hello");
    for (let i = 0; i < 3; i++) {
        let fileContent = await readFile("package.json");
        console.log(new Buffer(fileContent).toString());
        console.log(".");
    }
    console.log(name);
}
let readFile = Promise.promisify(fs.readFile);