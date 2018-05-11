"use strict";

var express = require('express'),
	controller = require('./api.board.controller'),
	router = express.Router();

router.post('/', controller.create);

module.exports = router;