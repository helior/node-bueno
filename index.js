var express = require('express');
var app = express();

app.listen(3333);

// Serve static files out of the "files" path.
app.use(express.static('files'));

app.get('/', function(req, res){
	res.send('Hello');
});


// 404 handler; technically this is a fallback middleware callback, which is virtually a 404 for all intent and purpose.
app.use(function(req, res) {
	res.status(404).send('Sorry, the URI "' + req.originalUrl + '" route is no bueno.');
});
