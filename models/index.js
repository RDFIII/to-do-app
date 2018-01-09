var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/to-do-api');

mongoose.Promise = Promise;
