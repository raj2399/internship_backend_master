var location = require("../models/location_model");
var express = require("express");
var router = express.Router();

router.get("/:location_id?", function (req, res, next) {
  if (req.params.location_id) {
    location.getlocationByID(req.params.location_id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    location.getAlllocation(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/", function (req, res, next) {
  location.insertLocation(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:location_id", function (req, res, next) {
    location.updatelocation(req.params.location_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:location_id", function (req, res, next) {
    location.deletecourse(req.params.location_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
