#!/usr/bin/env node

// Express can launch a www executable to handle certain tasks.
// www goes in bin (sometimes .bin to keep it hidden)

// This way, we can set certain properties here
// rather than having them take up space in server.js.
var debug = require('debug')('express-example');

// we bring in the app we exported from server.js
var app = require('../server');

// we bring in the models we exported with index.js
var db = require("../models");

// we set the port of the app
app.set('port', process.env.PORT || 3000);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
	var server = app.listen(app.get('port'), function() {
		debug('Express server listening on port ' + server.address().port);
  });
});