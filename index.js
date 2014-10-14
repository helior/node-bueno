var express = require('express');
var app = express();

app.listen(3333);

// Serve static files out of the "files" path.
app.use(express.static('files'));

app.get('/controller/:controller', function(req, res){
	res.json({
		'data': '<h1>' + req.params.controller + '</h1>',
		// TODO: Introspect for the hostname and port of the application.
		'assets': ['http://localhost:3333/css/styles.css'],
		// TODO: How does node.js usually handle reporting errors to the client?
		'errors': []
	});
});


// 404 handler; technically this is a fallback middleware callback, which is virtually a 404 for all intent and purpose.
app.use(function(req, res) {
	res.status(404).send('Sorry, the URI "' + req.originalUrl + '" route is no bueno.');
});
