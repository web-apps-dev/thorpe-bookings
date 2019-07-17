/**
 * Created by imran on 28/07/2017.
 */
var express = require('express'),
  stylus = require('stylus'),
  path = require('path'),
  morgan = require('morgan'), /* logging */
  bodyParser = require('body-parser'),
  passport = require('passport'),
  expressSession = require('express-session'),
  cookieParser = require('cookie-parser');

module.exports = function(app, config) {
  function compile(str, path) {
    return stylus(str).set('filename', path);
  }

  //app.set('views', config.rootPath + '\\server\\views');
  app.set('views', path.resolve(config.rootPath, 'server', 'views'));
  console.log('views set to : ' + app.get('views'));
  app.set('view engine', 'jade');

  app.use(morgan('dev'));
  app.locals.pretty = true;

  /* Must use cookieParser before expressSession */
  app.use(cookieParser());

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(expressSession({
    secret: 'multi vision unicorns',
    saveUninitialized: true,
    resave: true}));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(stylus.middleware(
    {
      src: config.rootPath + '/public',
      compile: compile
    }
  ));
  app.use(express.static(config.rootPath + '/public'));
}