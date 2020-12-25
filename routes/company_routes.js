var company = require("../models/company_model");
var express = require("express");
var router = express.Router();

router.get("/:company_id?", function (req, res, next) {
  if (req.params.company_id) {
    company.getcompanyByID(req.params.company_id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    }); 
  } else {
    company.getAllcompany(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/", function (req, res, next) {
    company.insertcompany(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:company_id", function (req, res, next) {
    company.updatecompany(req.params.company_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:company_id", function (req, res, next) {
    company.deletecompany(req.params.company_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
