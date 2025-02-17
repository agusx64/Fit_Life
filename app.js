var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var mysql = require('mysql2');
require('dotenv').config();

var get = require('./routes/get');
var post = require('./routes/post');
const { console } = require('inspector');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', get);
app.use('/', post);

app.use(function (req, res, next) {
  res.status(404).render('error', { message: 'Página no encontrada', error: {} });
});

app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;