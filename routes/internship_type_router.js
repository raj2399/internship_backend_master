var internship=require('../models/internship_type_model');
var express = require('express');
var router = express.Router();

router.get("/:internship_type_id?", function (req, res, next) {
  if (req.params.internship_type_id) {
    internship.getIntenrshipTypeByID(req.params.internship_type_id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    internship.getAllInternshipDetails(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.get('/',function(req,res,next){
    internship.getAllInternshipDetails(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

router.post("/", function (req, res, next) {
    internship.insertIntenshipType(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


router.put("/:internship_type_id", function (req, res, next) {
    internship.updateIntenshipType(req.params.internship_type_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:internship_type_id", function (req, res, next) {
    internship.deleteInternshipType(req.params.internship_type_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports=router;