var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var internship=require('./routes/internship_route');
var admin=require('./routes/admin_route');
var course=require('./routes/course_route');
var deleteallcourse=require('./routes/delete_all_course_route');
var student=require('./routes/student_route');
var faculty = require('./routes/faculty_route');
var location=require('./routes/location_routes');
var jobProfile = require('./routes/job_profile_routes');
var companies=require('./routes/company_routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/internship',internship);
app.use('/admin',admin);
app.use('/course',course);
app.use('/deleteallcourse',deleteallcourse);
app.use('/student',student);
app.use('/faculty',faculty);
app.use('/location',location);
app.use('/job_profile',jobProfile);
app.use('/company',companies);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
