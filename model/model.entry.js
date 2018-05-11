'use strict';

var mongoose = require('mongoose'),
	Material = require('./model.material'),
	EntrySchema = new mongoose.Schema({
		reference: String,
		number: String,
		time: Number,
		type: {
			boolean: Boolean,
			multiple: Boolean
		},
		question: String,
		options: Array,
		answer: {
			boolean: Boolean,
			multiple: String
		},
		response: {
			answer: String,
			resource: {
				expert: {
					certifications: Array,
					description: String,
					name: {
						first: String,
						last: String
					},
					picture: {
						base64: String,
						filename: String,
						filesize: String,
						filetype: String
					},
					url: String
				},
				event: {
					contact: {
						certifications: Array,
						name: {
							first: String,
							last: String
						},
						picture: {
							base64: String,
							filename: String,
							filesize: String,
							filetype: String
						}
					},
					date: Date,
					description: String,
					logo: {
						base64: String,
						filename: String,
						filesize: String,
						filetype: String
					},
					title: String,
					url: String
				},
				materials: [Material.schema]
			}
		}
	});

module.exports = mongoose.model('Entry', EntrySchema);