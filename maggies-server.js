var express = require('express')
  , app     = express();

var startup = {
	PORT: 8080
}

app.get('/', function (req, res, next) {
	res.render('index.ejs', {
		subject: 'What\'s Maggies?',
	});
});

app.listen(startup.PORT, function () {
	console.log('[maggies-server.js]:\tListening on port(%d)'
		, startup.PORT);
});
