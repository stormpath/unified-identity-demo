'use strict';

var express = require('express');

// Globals
var app = express();
app.locals.oauthio_public_key = process.env.OAUTHIO_PUBLIC_KEY;

// Settings
app.set('view engine', 'jade');

// Middleware
app.use('/static', express.static('./static'));

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/dashboard', function(req, res) {
  res.render('dashboard');
});

// Server
app.listen(process.env.PORT || 3000);
