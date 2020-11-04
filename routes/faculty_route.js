var express = require("express");
const faculty = require("../models/faculty_model");
var router = express.Router();

router.get("/:faculty_id?", function (req, res, next) {
  if (req.params.course_id) {
    faculty.getfacultyByID(req.params.faculty_id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    faculty.getAllFaculty(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/", function (req, res, next) {
  faculty.addfaculty(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:faculty_email_id", function (req, res, next) {
  faculty.updateFaculty(req.params.faculty_email_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
