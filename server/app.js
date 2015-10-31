var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index');
var path = require('path');

// set server port
app.set("port", process.env.PORT || 3000);

// static pages
app.use(express.static(path.join(__dirname, './public')));

// used for post
app.use(bodyParser.urlencoded({
    extended: true
}));

// used for post
app.use(bodyParser.json());

// route the request to index.js
app.use('/', index);

// run the server
var server = app.listen(app.get("port"), function() {
    console.log('Listening on port: ', app.get("port"));
});

// export express
module.exports = app;