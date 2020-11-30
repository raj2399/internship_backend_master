var admin = require("../models/admin_model");
var express = require("express");
var router = express.Router();
router.get('/',function(req,res,next){
  admin.getAllAdmin(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});
router.get("/:admin_email", function (req, res, next) {
  admin.getAdminByEmail(admin_email, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function (req, res, next) {
  admin.addAdmin(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:admin_email", function (req, res, next) {
  admin.updateAdminByEmail(req.params.admin_email, req.body, function (err,rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
