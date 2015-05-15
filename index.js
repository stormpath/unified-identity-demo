'use strict';

var OAuth = require('oauthio');
var express = require('express');

// Initialization
OAuth.initialize(process.env.OAUTHIO_PUBLIC_KEY, process.env.OAUTHIO_SECRET_KEY);

// Globals
var app = express();

// Settings
app.set('view engine', 'jade');

app.locals.oauthio_public_key = process.env.OAUTHIO_PUBLIC_KEY;

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
