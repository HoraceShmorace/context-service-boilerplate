# Context Service Boilerplate
The Context Service Boilerplate is a fully functional sample implementation of npm-contextualizer, which determines the context (topics) of webpages by matching text content against a dictionary of significant words and weighting those matches, allowing ads or content to be targeted according to context.

## Installation
* `git clone` the repo.
* `npm install`.
* Edit the environment settings in the `/config/contextualizer` directory.

## Requirements
* Node.js
* MongoDB

## Running the Service
* At the command line, run `node server.js`.
* In the browser, go to `http://localhost:9090`. 

## TODO:
* Add testing workflow (JSHint, Jasmine, etc).
* Add GruntFile.
