"use strict";

var mongoose = require('mongoose'),
	MaterialSchema = new mongoose.Schema({
		author: String,
		title: String,
		type: String,
		url: String,
	}, { _id: false });

module.exports = mongoose.model('Material', MaterialSchema);