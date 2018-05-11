"use strict";

var mongoose = require('mongoose'),
	Question = require('./../model/model.question'),
	TileSchema = new mongoose.Schema({
		available: Boolean,
		owner: String,
		position: Number,
		mystery: Boolean,
		index: Number,
		state: Boolean,
	});

module.exports = mongoose.model('Tile', TileSchema);