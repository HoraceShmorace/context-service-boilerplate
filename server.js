// Load required packages
var cluster = require("cluster");

if (cluster.isMaster) {
	console.log("Cluster master is online.")
	var cpuCount = require("os").cpus().length;
	for (var i = 0; i < cpuCount; i += 1) {
		cluster.fork();
	}
	cluster.on("exit", function(worker) {
		console.log("Worker " + worker.id + " died :(");
		cluster.fork();

	});
} else {
	var express = require("express"),
		bodyParser = require("body-parser"),
		contextualizer = require("npm-contextualizer"),
		app = express(),
		port = process.env.PORT || 9090;

	app.use(bodyParser.json());

	app.get("/", function(req, res) {
		res.end("<p>Context Service Boilerplate</p>");
		return;
	});

	app.get("/:org", function(req, res, next) {
		var config = require("./config/contextualizer"),
			orgId = req.params.org,
			url = req.query.u || req.query.url;

		if (!url) {
			res.end("Please provide a URL via either the u or url querystring parameter.");
			return;
		}

		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Headers", "X-Forwarded-For,X-Requested-With,Authorization,Content-Type");
		res.setHeader("Access-Control-Allow-Methods", "*");
		res.setHeader("Content-Type", "application/json");

		var options = {
			url: url,
			orgId: orgId,
			config: config
		};

		contextualizer(options, function(context) {
			res.end(context);
		});

	});

	app.listen(port, function() {
		console.log("Worker " + cluster.worker.id + " is listening on port " + port + "...");
	});
}
