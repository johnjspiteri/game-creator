'use strict';

     var express = require('express'),
        mongoose = require('mongoose'),
          morgan = require('morgan'),
    errorHandler = require('errorhandler'),
             app = express(),
          server = require('http').Server(app),
      connection = '127.0.0.1:27017/gauge';

app.use(morgan('dev'));

mongoose.connect(connection);
	// .set('debug', true);
app.use('/api/board', require('./api/board/api.board.index'));

app.use(errorHandler({ dumpExceptions: true, showStack: true }));

server.listen(8080, 'localhost', function () {});