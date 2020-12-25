var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var internshipType=require('./routes/internship_type_router');
var internship=require('./routes/internship_route');
var admin=require('./routes/admin_route');
var course=require('./routes/course_route');
var deleteallcourse=require('./routes/delete_all_course_route');
var student=require('./routes/student_route');
var faculty = require('./routes/faculty_route');
var location=require('./routes/location_routes');
var jobProfile = require('./routes/job_profile_routes');
var companies=require('./routes/company_routes');
var login=require('./routes/login_route');
var review=require('./routes/review_route');
var admin_login=require('./routes/admin_login_route');

//DASHBOARD
var companycount=require('./routes/get_all_company_route');
var internshipcount=require('./routes/get_all_internship_route');
var reviewcount=require('./routes/get_all_review_route');
var studentcount=require('./routes/get_all_student_route');
var latest5interview=require('./routes/get_latest_review_route');

var app = express();

// view engine setup
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/internshipType',internshipType);
app.use('/internship',internship);
app.use('/login',login);
app.use('/admin',admin);
app.use('/course',course);
app.use('/deleteallcourse',deleteallcourse);
app.use('/student',student);
app.use('/faculty',faculty);
app.use('/location',location);
app.use('/job_profile',jobProfile);
app.use('/company',companies);
app.use('/review',review);
app.use('/adminLogin',admin_login);


// DASHBOARD
app.use('/companycount',companycount);
app.use('/internshipcount',internshipcount);
app.use('/reviewcount',reviewcount);
app.use('/studentcount',studentcount);
app.use('/latest5interview',latest5interview);

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
