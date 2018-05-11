"use strict";

var fs = require('fs'),
	path = require('path'),
	Map = require('./../../model/model.map');

exports.create = function() {
	var source = require('./../../question-map.json');
	// console.log('source: ', source);

	var questions = {
		bb: [],
		fn: [],
		hr: [],
		mg: [],
		mk: []
	},
	map = {
		"bb": "business_basics",
		"fn": "finance",
		"hr": "human_resources",
		"mg": "management",
		"mk": "marketing",
	};

	function read(route) {
		var question = fs.readFileSync(route, "utf8");
		return JSON.parse(question);
	}

	for(var key in questions) {
		for(var i=0; i<source[key].length; i++) {
			console.log('source key:', source[key][i]);
			var marker = source[key][i];
			var route = path.join('/Users/jj/Development/library/library/questions', map[key], marker, marker + '.json');
			var question = read(route);
			questions[key].push(question);
		}
	}

	Map.create(questions, function(err, response) {
		if (err) console.log(err);
		console.log('response:', response);
	});
};

this.create();