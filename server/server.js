var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

const publicdir = path.join(__dirname, "../public");

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

app.use(express.static(publicdir));

server.listen(port, (err) => {
    if (!err) {
	console.log(`Listening on port ${port}`);
    } else {
	console.log(`Failed to acquire port ${port} for listening`);
	process.exit(1);
    }
});


