/**
 * Created by imran on 28/07/2017.
 */
var mongoose = require('mongoose'),
  userModel = require('../models/Users'),
  courseModel = require('../models/Course');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('Thorpe booking db opened');
  });

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();
}


