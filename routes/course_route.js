var course = require("../models/course_model");
var express = require("express");
var router = express.Router();

router.get("/:course_id?", function (req, res, next) {
  if (req.params.course_id) {
    course.getcourseByID(req.params.course_id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    course.getAllcourse(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/", function (req, res, next) {
  course.insertcourse(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:course_id", function (req, res, next) {
  course.updatecourse(req.params.course_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:course_id", function (req, res, next) {
  course.deletecourse(req.params.course_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
