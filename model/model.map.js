"use strict";

var mongoose = require('mongoose'),
	Entry = require('./model.entry'),
	MapSchema = new mongoose.Schema({
		bb: [Entry.schema],
		fn: [Entry.schema],
		hr: [Entry.schema],
		mg: [Entry.schema],
		mk: [Entry.schema]
	});

module.exports = mongoose.model('Map', MapSchema);