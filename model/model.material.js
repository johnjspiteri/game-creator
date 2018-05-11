"use strict";

var mongoose = require('mongoose'),
	MaterialSchema = new mongoose.Schema({
		author: String,
		title: String,
		date: Date,
	});

module.exports = mongoose.model('Material', MaterialSchema);