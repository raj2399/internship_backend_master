var job_profile = require("../models/jobProfile_model");
var express = require("express");
var router = express.Router();

router.get("/:job_profile_id?", function (req, res, next) {
  if (req.params.job_profile_id) {
    job_profile.getjob_profileByID(req.params.job_profile_id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    job_profile.getAlllJobProfile(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/", function (req, res, next) {
  job_profile.insertProfile(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:job_profile_id", function (req, res, next) {
    job_profile.updateProfile(req.params.job_profile_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:job_profile_id", function (req, res, next) {
    job_profile.deletejobProfile(req.params.job_profile_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
