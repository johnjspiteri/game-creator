"use strict";

var mongoose = require('mongoose'),
	MaterialSchema = new mongoose.Schema({
		author: String,
		date: Date,
		title: String,
		type: String,
		url: String,
	}, {_id: false});

module.exports = mongoose.model('Material', MaterialSchema);