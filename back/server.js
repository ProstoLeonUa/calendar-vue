var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
//app.use(express.static(__dirname + "/dist/"));
//app.get(/.*/, function (req, res) {
//	res
//		.sendFile(__dirname + "/dist/index.html")
//})


const port = process.env.PORT || 4000;

app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
	console.log(`Example app listening on port http://localhost:${port}/`);
});

const url = "./users.json";
app.get('/', (req, res) => {

	fs.readFile(url, 'utf-8', (e, file) => {
		res
			.status(200)
			.send(file);
	})

})