// Load required packages
var cluster = require('cluster');

if (cluster.isMaster) {
	console.log("Cluster master is online.")
	var cpuCount = require('os').cpus().length;
	for (var i = 0; i < cpuCount; i += 1) {
		cluster.fork();
	}
	cluster.on('exit', function(worker) {
		console.log('Worker ' + worker.id + ' died :(');
		cluster.fork();

	});
} else {
	var express = require('express'),
		mongoose = require('mongoose'),
		bodyParser = require('body-parser'),
		contextualizer = require('contextualizer'),
		config = require('./config/contextualizer'),
		app = express(),
		port = process.env.PORT || config.port;

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.get('/', function(req, res) {
		res.end("<p>Context Service</p><a href=\"\" target=\"_blank\">Github</a>");
		return;
	});
	app.get('/:org', contextualizer);

	app.listen(port, function() {
		console.log('Worker ' + cluster.worker.id + ' is listening on port ' + port + "...");
	});
}
