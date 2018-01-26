var express = require('express');
var path = require('path');

const publicdir = path.join(__dirname, "../public");

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicdir));

app.listen(3000, (err) => {
    if (!err) {
	console.log(`Listening on port ${port}`);
    } else {
	console.log("Failed to acquire port 3000 for listening");
	process.exit(1);
    }
});


